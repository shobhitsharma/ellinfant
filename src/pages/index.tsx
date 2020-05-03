import { getListings } from '../data';
import type { EtsyResponse, EtsyListingImage } from '../data';

import MainLayout from '../layouts/main';
import Teaser from '../components/Teaser';
import Products from '../components/Products';

interface IIndexProps extends EtsyResponse {
  images: { [key: string]: EtsyListingImage[] };
}

const Index = (props: IIndexProps) => {
  return (
    <MainLayout>
      <Teaser />
      <Products products={props.results} images={props.images} />
    </MainLayout>
  );
};

Index.getInitialProps = async () => getListings();

export default Index;
