import { Component, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import MainHead from './head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { theme, GlobalStyles } from '../../styles';
import { Main } from './style';

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
        <Main>
          <Header />
          {children}
          <Footer />
        </Main>
      </ThemeProvider>
    );
  }
}

export default MainLayout;
