import { Component, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import MetaHead from './meta';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { theme, GlobalStyles } from '../../styles';
import { Main, Content } from './style';

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
        <MetaHead title={metaTitle} />
        <GlobalStyles />
        <Main>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </Main>
      </ThemeProvider>
    );
  }
}

export default MainLayout;
