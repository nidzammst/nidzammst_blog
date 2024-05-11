// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";
import BLOG from "@/blog.config";
import CommonScript from "@/components/CommonScript";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={BLOG.LANG} className="test">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <CommonScript />
          <Script strategy="afterInteractive">
            {`atOptions = {
    'key' : '5ee41ec68d55eb28c246664ae37e62d4',
    'format' : 'iframe',
    'height' : 600,
    'width' : 160,
    'params' : {}
  };`}
          </Script>
          <Script
            src="//www.topcreativeformat.com/5ee41ec68d55eb28c246664ae37e62d4/invoke.js"
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
    );
  }
}

export default MyDocument;
