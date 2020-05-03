import { Fragment, Component, ReactNode } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MetaHead from './meta';
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
      <Fragment>
        <MetaHead title={metaTitle} />
        <Main>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </Main>
      </Fragment>
    );
  }
}

export default MainLayout;
