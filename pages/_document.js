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
            src="//pl23292822.highcpmgate.com/1fc27fc34489f0b73514246aeae498fc/invoke.js"
            strategy="beforeInteractive"
          />
          <Script
            src="//pl23292382.highcpmgate.com/90/42/a7/9042a704693cdf40f23d6e6b5ded2b1c.js"
            strategy="beforeInteractive"
          />
          <Script
            src="//satellitefetidtelegraph.com/c9/dd/b8/c9ddb866b1055a1cd466384034590267.js"
            strategy="beforeInteractive"
          />
        </Head>

        <body
          className={`${BLOG.FONT_STYLE} tracking-wider bg-day dark:bg-night`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument
