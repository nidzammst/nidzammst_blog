// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'
import CommonScript from '@/components/CommonScript'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={BLOG.LANG} className="test">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <CommonScript />
          <Script
            src="//pl23292371.highcpmgate.com/c9/dd/b8/c9ddb866b1055a1cd466384034590267.js"
            strategy="afterInteractive"
          />
          <Script
            src="//pl23292382.highcpmgate.com/90/42/a7/9042a704693cdf40f23d6e6b5ded2b1c.js"
            strategy="afterInteractive"
          />

          <Script id="ads" strategy="afterInteractive">
            (sc_adv_out = window.sc_adv_out || []).push(
            {{ id: 884024, domain: 'n.nnowa.com' }});
          </Script>
          <Script
            src="//st-n.nnowa.com/js/a.js"
            async
            strategy="afterInteractive"
          />
        </Head>

        <body
          className={`${BLOG.FONT_STYLE} tracking-wider bg-day dark:bg-night`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
