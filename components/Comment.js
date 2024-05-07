import BLOG from '@/blog.config'
import dynamic from 'next/dynamic'
import Tabs from '@/components/Tabs'
import React from 'react'
import { useRouter } from 'next/router'

const GiscusComponent = dynamic(
  () => {
    return import('@/components/Giscus')
  },
  { ssr: false }
)

const Comment = ({ frontMatter }) => {
  const router = useRouter()

  React.useEffect(() => {
    // Lompat ke area komentar
    setTimeout(() => {
      if (window.location.href.indexOf('target=comment') > -1) {
        const url = router.asPath.replace('?target=comment', '')
        history.replaceState({}, '', url)
        const commentNode = document.getElementById('comment')
        commentNode.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    }, 200)
  }, [])

  if (!frontMatter) {
    return <>Loading...</>
  }

  return (
    <div id='comment' className='comment mt-5 text-gray-800 dark:text-gray-300'>
      <Tabs>

        {BLOG.COMMENT_GISCUS_REPO && (
          <div key="Giscus">
            <GiscusComponent className="px-2" />
          </div>
        )}

      </Tabs>
    </div>
  )
}

export default Comment
