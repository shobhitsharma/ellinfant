import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import type { DocumentContext } from 'next/document';

const GA_TRACKING_ID = '';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  public render() {
    return (
      <html lang="en">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta content="/static/favicons/browserconfig.xml" name="msapplication-config" />
          <meta content="14d2e73487fa6c71" name="yandex-verification" />
          <meta content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw" name="google-site-verification" />
          <link href="/static/favicons/photo.png" rel="shortcut icon" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link href="https://fonts.googleapis.com/css?family=Inter:400,600,700&display=swap" rel="stylesheet" />
          <link href="/static/favicons/photo.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/static/favicons/photo.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/static/favicons/photo.png" rel="icon" sizes="16x16" type="image/png" />
          <link rel="apple-touch-icon" href="favicon/apple-touch-icon.png" sizes="180x180" />
          <link rel="icon" type="image/png" href="favicon/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="favicon/favicon-16x16.png" sizes="16x16" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
