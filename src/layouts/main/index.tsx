import { Component, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { theme, GlobalStyles } from '../../styles';

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

export type MainLayoutProps = {
  children: ReactNode;
  title?: string;
};

const DEFAULT_TITLE = `Ell-infant - Handgemachte Babykleidung`;

class MainLayout extends Component<MainLayoutProps> {
  render() {
    const { children, title } = this.props;
    const metaTitle = title ? `Ell-infant - ${title}` : DEFAULT_TITLE;

    return (
      <ThemeProvider theme={theme}>
        <MainHead title={metaTitle} />
        <GlobalStyles />
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </ThemeProvider>
    );
  }
}

export default MainLayout;
