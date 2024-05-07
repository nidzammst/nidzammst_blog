import { getTextContent, getDateValue } from 'notion-utils'
import { NotionAPI } from 'notion-client'
import BLOG from '@/blog.config'
import formatDate from '../formatDate'
import { defaultMapImageUrl } from 'react-notion-x'
// import { createHash } from 'crypto'
import md5 from 'js-md5'

export default async function getPageProperties(id, block, schema, authToken, tagOptions) {
  const rawProperties = Object.entries(block?.[id]?.value?.properties || [])
  const excludeProperties = ['date', 'select', 'multi_select', 'person']
  const value = block[id]?.value
  const properties = {}
  for (let i = 0; i < rawProperties.length; i++) {
    const [key, val] = rawProperties[i]
    properties.id = id
    if (schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
      properties[schema[key].name] = getTextContent(val)
    } else {
      switch (schema[key]?.type) {
        case 'date': {
          const dateProperty = getDateValue(val)
          delete dateProperty.type
          properties[schema[key].name] = dateProperty
          break
        }
        case 'select':
        case 'multi_select': {
          const selects = getTextContent(val)
          if (selects[0]?.length) {
            properties[schema[key].name] = selects.split(',')
          }
          break
        }
        case 'person': {
          const rawUsers = val.flat()
          const users = []
          const api = new NotionAPI({ authToken })

          for (let i = 0; i < rawUsers.length; i++) {
            if (rawUsers[i][0][1]) {
              const userId = rawUsers[i][0]
              const res = await api.getUsers(userId)
              const resValue =
                res?.recordMapWithRoles?.notion_user?.[userId[1]]?.value
              const user = {
                id: resValue?.id,
                first_name: resValue?.given_name,
                last_name: resValue?.family_name,
                profile_photo: resValue?.profile_photo
              }
              users.push(user)
            }
          }
          properties[schema[key].name] = users
          break
        }
        default:
          break
      }
    }
  }

  // Kunci pemetaan: nama header yang ditentukan pengguna
  const fieldNames = BLOG.NOTION_PROPERTY_NAME
  if (fieldNames) {
    Object.keys(fieldNames).forEach(key => {
      if (fieldNames[key] && properties[fieldNames[key]]) properties[key] = properties[fieldNames[key]]
    })
  }

  // type\status是下拉选框 取数组第一个
  properties.type = properties.type?.[0]
  properties.status = properties.status?.[0]

  // Nilai pemetaan: opsi kotak tarik-turun untuk bidang jenis dan status yang dipersonalisasi pengguna, dipetakan kembali ke pengidentifikasi bahasa Inggris dari kode di sini
  mapProperties(properties)

  if (properties.type === 'Post') {
    properties.slug = BLOG.POST_URL_PREFIX ? (BLOG.POST_URL_PREFIX + '/' + (properties.slug ?? properties.id)) : (properties.slug ?? properties.id)
  } else {
    properties.slug = (properties.slug ?? properties.id)
  }

  // 开启伪静态路径
  if (BLOG.PSEUDO_STATIC) {
    if (!properties?.slug?.endsWith('.html') && !properties?.slug?.startsWith('http')) {
      properties.slug += '.html'
    }
  }

  properties.createdTime = formatDate(new Date(value.created_time).toString(), BLOG.LANG)
  properties.lastEditedTime = formatDate(new Date(value?.last_edited_time).toString(), BLOG.LANG)
  properties.fullWidth = value.format?.page_full_width ?? false
  properties.pageIcon = getImageUrl(block[id].value?.format?.page_icon, block[id].value) ?? ''
  properties.page_cover = getImageUrl(block[id].value?.format?.page_cover, block[id].value) ?? ''
  properties.content = value.content ?? []
  properties.password = properties.password
    ? md5(properties.slug + properties.password)
    : ''
  properties.tagItems = properties?.tags?.map(tag => {
    return { name: tag, color: tagOptions?.find(t => t.value === tag)?.color || 'gray' }
  }) || []
  delete properties.content
  return properties
}

// Dapatkan gambar sampul dari Block; dapatkan PageCover terlebih dahulu, jika tidak, dapatkan gambar konten
function getImageUrl(imgObj, blockVal) {
  if (!imgObj) {
    return null
  }
  if (imgObj.startsWith('/')) {
    return 'https://www.notion.so' + imgObj // Ubah jalur relatif gambar internal menjadi jalur absolut notion
  }

  if (imgObj.startsWith('http')) {
    // Tentukan apakah gambar yang diunggah oleh pemberitahuan perlu disambung untuk mengakses token.
    const u = new URL(imgObj)
    if (u.pathname.startsWith('/secure.notion-static.com') && u.hostname.endsWith('.amazonaws.com')) {
      return defaultMapImageUrl(imgObj, blockVal) // Gambar yang diunggah perlu mengonversi alamat permintaan
    }
  }

  // 其他图片链接 或 emoji
  return imgObj
}

function mapProperties(properties) {
  if (properties?.type === BLOG.NOTION_PROPERTY_NAME.type_post) {
    properties.type = 'Post'
  }
  if (properties?.type === BLOG.NOTION_PROPERTY_NAME.type_page) {
    properties.type = 'Page'
  }
  if (properties?.type === BLOG.NOTION_PROPERTY_NAME.type_notice) {
    properties.type = 'Notice'
  }
  if (properties?.status === BLOG.NOTION_PROPERTY_NAME.status_publish) {
    properties.status = 'Published'
  }
  if (properties?.status === BLOG.NOTION_PROPERTY_NAME.status_invisible) {
    properties.status = 'Invisible'
  }
}
