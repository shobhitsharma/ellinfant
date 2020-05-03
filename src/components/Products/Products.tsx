import styled from 'styled-components';

import Product from './Product';
import type { EtsyListing, EtsyListingImage } from '../../data';

interface ProductsProps {
  products: EtsyListing[];
  images: { [key: string]: EtsyListingImage[] };
}

const StyledProducts = styled.div`
  flex: 1;
  margin-top: ${({ theme }: { theme: ITheme }) => `${theme.spacing[7]}px`};
  margin-bottom: ${({ theme }: { theme: ITheme }) => `${theme.spacing[7]}px`};
`;

const StyledBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${({ theme }: { theme: ITheme }) => `${theme.spacing[3]}px`};
  max-width: ${({ theme }: { theme: ITheme }) => theme.breakpoints.maxWidth};
  margin: 0 auto;
`;

const Products = (props: ProductsProps) => {
  return (
    <StyledProducts>
      <StyledBox>
        {props.products.map((product, index) => (
          <Product key={index} product={product} images={props.images[product.listing_id]} />
        ))}
      </StyledBox>
    </StyledProducts>
  );
};

export default Products;
