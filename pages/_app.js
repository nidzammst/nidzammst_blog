import BLOG from 'blog.config'
import React from 'react'

import 'animate.css'
import '@/styles/globals.css'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
import '@/styles/notion.css' //  Ganti beberapa gaya

import { GlobalContextProvider } from '@/lib/global'
import { DebugPanel } from '@/components/DebugPanel'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import ExternalScript from '@/components/ExternalScript'
import { isBrowser } from '@/lib/utils'

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

const MyApp = ({ Component, pageProps }) => {
  // plugin eksternal
  const externalPlugins = <>
        {JSON.parse(BLOG.THEME_SWITCH) && <ThemeSwitch />}
        {JSON.parse(BLOG.DEBUG) && <DebugPanel />}
        <ExternalScript/>
    </>

  if (isBrowser()) {
    AOS.init()
  }

  return (
        <GlobalContextProvider>
            {externalPlugins}
            <Component {...pageProps} />
        </GlobalContextProvider>
  )
}

export default MyApp
