import Head from 'next/head';

const MainHead = ({ title }: { title: string }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="A Next.js Recipe discovery app." />
    <meta name="author" content="yerowyn" />
    <meta name="keywords" content="react, next, ts, js" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:url" content="https://nextshop.now.sh" />
    <meta property="og:image" content="/logo.svg" />
    <meta property="og:description" content="A Next.js Recipe discovery app." />

    <link rel="apple-touch-icon" href="favicon/apple-touch-icon.png" sizes="180x180" />
    <link rel="icon" type="image/png" href="favicon/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="favicon/favicon-16x16.png" sizes="16x16" />

    <link rel="manifest" href="/favicon/site.webmanifest" />
  </Head>
);

export default MainHead;
