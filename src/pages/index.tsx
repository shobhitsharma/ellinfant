import MainLayout from '../layouts/main';
import Teaser from '../components/Teaser';
import Products from '../components/Products';
import type { IProduct } from '../components/Products';

interface IIndexProps {
  count: number;
  type: string;
  results: IProduct[];
}

const Index = (props: IIndexProps) => {
  return (
    <MainLayout>
      <Teaser />
      <Products products={props.results} />
    </MainLayout>
  );
};

Index.getInitialProps = async () => {
  const data = await import('../data/products.json');

  return data;
};

export default Index;
