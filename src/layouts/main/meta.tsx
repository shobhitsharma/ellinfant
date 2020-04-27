import Head from 'next/head';

const MetaHead = ({ title }: { title: string }) => (
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
  </Head>
);

export default MetaHead;
