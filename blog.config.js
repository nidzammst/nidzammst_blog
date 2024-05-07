// Catatan: process.env.XX adalah variabel lingkungan Vercel. Untuk metode konfigurasi, lihat: https://docs.tangly1024.com/zh/features/personality.
const BLOG = {
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID,
  PSEUDO_STATIC: false, // Jalur pseudo-statis, setelah diaktifkan, semua URL artikel akan diakhiri dengan .html.
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // Perbarui unit interval cache konten (detik); yaitu, setiap halaman memiliki periode statis murni selama 5 detik, selama periode tersebut tidak ada data notifikasi yang akan diambil tidak peduli berapa kali halaman tersebut diakses; meningkatkan nilai ini akan membantu menghemat sumber daya Vercel dan meningkatkan kecepatan aksesnya, namun juga akan menyebabkan keterlambatan update artikel.
  THEME: 'hexo',
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // Apakah akan menampilkan tombol ganti tema
  LANG: 'en-US', // see /lib/lang.js for more.
  SINCE: 2024,
  APPEARANCE: 'auto', // ['light', 'dark', 'auto'], // light Mode siang, mode malam gelap, mode malam otomatis otomatis berdasarkan waktu dan tema

  AUTHOR: 'nidzammst',
  BIO: 'Fullstack javascript developer (nodejs, reactjs, nextjs, tailwind css)',
  LINK: 'https://nidzammst.vercel.app',
  KEYWORDS: 'Ahmad Nidzam Musthafa&apos;s Blog',
  CONTACT_EMAIL: 'nidzam0501@gmail.com',
  CONTACT_GITHUB: 'https://github.com/nidzammst',

  // font situs web
  FONT_STYLE: 'font-serif', // ['font-serif','font-sans'] Dua pilihannya adalah serif dan sans serif, Referensi: https://www.jianshu.com/p/55e410bd2115
  FONT_URL: [// Contoh font CSS https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@500&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500&display=swap'
  ],
  FONT_SANS: [// Font sans serif mis.'LXGW WenKai'
    'Bitter', '"PingFang SC"', '-apple-system', 'BlinkMacSystemFont', '"Hiragino Sans GB"',
    '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Segoe UI"', '"Noto Sans SC"', 'HarmonyOS_Regular',
    '"Microsoft YaHei"', '"Helvetica Neue"', 'Helvetica', '"Source Han Sans SC"',
    'Arial', 'sans-serif', '"Apple Color Emoji"'],
  FONT_SERIF: [// Font serif seperti 'LXGW WenKai'
    'Bitter', '"Noto Serif SC"', 'SimSun', '"Times New Roman"', 'Times', 'serif',
    '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Apple Color Emoji"'],
  FONT_AWESOME: '/css/all.min.css', // font-awesome Alamat ikon font

  // Apakah tata letak sidebar dibalik (kiri ke kanan, kanan ke kiri) Tema didukung: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE: false,

  // PrismJs Terkait kode
  PRISM_JS_AUTO_LOADER: 'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_THEME_PATH: 'https://npm.elemecdn.com/prism-themes/themes/prism-a11y-dark.min.css', // Tema Gaya Kode Referensi Lebih Banyak https://github.com/PrismJS/prism-themes
  CODE_MAC_BAR: true, // Ikon mac berwarna merah, kuning dan hijau ditampilkan di sudut kiri atas kode
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || 'false', // Apakah akan menampilkan nomor baris

  BACKGROUND_LIGHT: '#DDDDDD', // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: '#222831', // use hex value, don't forget '#'
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder

  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX || 'article', // Awalan jalur default untuk artikel tipe POST, misalnya jalur tipe POST default adalah /article/[slug]
  // Jika item ini dikonfigurasi sebagai '' kosong, artikel tidak akan memiliki jalur awalan Skenario penggunaan: Jika Anda ingin jalur awalan artikel menjadi /post, dukungan multi-level didukung.

  POST_LIST_STYLE: 'scroll', // ['page','scroll] Gaya daftar artikel: paging nomor halaman, pemuatan gulir satu halaman
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', //  Apakah akan memuat pratinjau artikel dalam daftar
  POST_PREVIEW_LINES: 12, // Pratinjau jumlah baris blog
  POST_RECOMMEND_COUNT: 6, // Jumlah artikel yang direkomendasikan
  POSTS_PER_PAGE: 8, // post counts per page
  POSTS_SORT_BY: 'notion', // Sort by: 'date' waktu, 'notion' Tergantung control Notion

  PREVIEW_CATEGORY_COUNT: 0, // Jumlah maksimum kategori yang ditampilkan di beranda, 0 berarti tidak ada batasan
  PREVIEW_TAG_COUNT: 0, // Jumlah maksimum tag yang ditampilkan di beranda, 0 berarti tidak ada batasan

  // giscus @see https://giscus.app/
  COMMENT_GISCUS_REPO: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '', // Nama repositori github Anda e.g 'tangly1024/NotionNext'
  COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '', // github Anda Repo ID e.g ( dapat dilihat giscus dapat dilihat )
  COMMENT_GISCUS_CATEGORY_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '', // github Anda Discussions di dalam Category ID ( dapat dilihat giscus dapat dilihat )
  COMMENT_GISCUS_MAPPING: process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', // github Anda Discussions Metode mana yang digunakan untuk mengkalibrasi artikel, default 'pathname'
  COMMENT_GISCUS_REACTIONS_ENABLED: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', // milikmu Giscus Apakah akan mengaktifkan emotikon artikel '1' menyalakan "0" Nonaktif Default aktif
  COMMENT_GISCUS_EMIT_METADATA: process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0', // milikmu Giscus Apakah akan mengekstrak Metadata '1' menyalakan '0' Mati Default tidak aktif
  COMMENT_GISCUS_INPUT_POSITION: process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', // Giscus milikmu Tinggalkan lokasi pesan 'bottom' ekor 'top' atas, bawaan 'bottom'
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'zh-CN', // Giscus milikmu bahasa e.g 'en', 'zh-TW', 'zh-CN', default 'en'
  COMMENT_GISCUS_LOADING: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy', // Giscus milikmu Apakah akan memuat secara progresif, default 'lazy'
  COMMENT_GISCUS_CROSSORIGIN: process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous', // Giscus milikmu Bisa lintas domain, default 'anonymous'

  // Konfigurasi khusus Nama bidang basis data Notion
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'password',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // jenis artikel,
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // jika tipe tipe artikel sama dengan nilai ini, maka itu adalah postingan blog., untuk postingan blog.
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // Bila jenis artikel sama dengan nilai ini, untuk satu halaman.
    type_notice: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // Ketika tipe artikel sama dengan nilai ini, itu adalah pengumuman.
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // Judul artikel
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
    status_publish: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // Ketika nilai statusnya sama dengan ini, maka dilepaska
    status_invisible: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // Ketika nilai statusnya sama dengan ini, itu adalah rilis tersembunyi, yang bisa berbahasa Mandarin Selain itu, status halaman lain tidak akan ditampilkan di blog
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug',
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category',
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date',
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags',
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon'
  },

  // Konfigurasi usang
  AVATAR: '/avatar.png', // Avatar penulis ditutupi oleh ICON di pemberitahuan. Jika tidak ada ikon, ambil /public/avatar.png
  TITLE: process.env.NEXT_PUBLIC_TITLE || 'nidzammst Blog', // Judul, ditimpa dengan judul halaman dalam pemberitahuan
  HOME_BANNER_IMAGE: './bg_image.jpg', // Gambar latar belakang halaman beranda, Akan ditimpa oleh gambar sampul di pemberitahuan. Jika tidak ada gambar sampul, file /public/bg_image.jpg dalam kode akan digunakan.
  DESCRIPTION: process.env.NEXT_PUBLIC_DESCRIPTION || 'Tulisan Ahmad Nidzam Musthafa', // Deskripsi situs, diganti dengan deskripsi halaman dalam pemberitahuan
  // Building
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // Apakah akan menampilkan tombol debug
  ENABLE_CACHE: process.env.ENABLE_CACHE || false, // Mengaktifkan caching akan menyimpan data Notion dalam memori. Biasanya digunakan selama pengembangan dan debugging.
  isProd: process.env.VERCEL_ENV === 'production', // membedakan antara lingkungan pengembangan dan produksi (ref: https://vercel.com/docs/environment-variables#system-environment-variables)  isProd: process.env.VERCEL_ENV === 'production' // membedakan antara lingkungan pengembangan dan produksi (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  VERSION: process.env.NEXT_PUBLIC_VERSION // nomor versi
}

module.exports = BLOG