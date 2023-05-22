import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name='keywords'
            content='웹사이트 제작, 웹사이트 외주, 웹페이지 제작, 웹페이지 외주, 구글 애널리틱스, 검색엔진 최적화, SEO, 웹디자인'
          />
          <meta property='og:site_name' content='Webpetto(웹페토)' />
          <meta property='og:title' content='웹사이트 제작 No.1 웹페토' />
          <meta
            property='og:description'
            content='웹페토는 웹사이트가 아닌 브랜드를 만들어드립니다. 웹사이트 제작 No.1 웹페토와 함께 나아가세요.'
          />
          <meta property='og:image' content='' />
          <meta property='og:url' content='https://webpetto.com' />
          <meta property='og:type' content='website' />

          {/* <meta
            name='google-signin-client_id'
            content='376760456260-ak1oa4rgm62dmo48mvq9aao9u71iiqqb.apps.googleusercontent.com'
          />
          <meta
            name='google-signin-scope'
            content='https://www.googleapis.com/auth/analytics.readonly'
          />
          <script src='https://apis.google.com/js/client:platform.js' /> */}

          <link rel='shortcut icon' href='/favicon-32.ico' />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
