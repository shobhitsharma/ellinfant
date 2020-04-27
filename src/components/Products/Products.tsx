import styled from 'styled-components';

import Product from './Product';
import type { IProduct } from './Product';

interface IProductsProps {
  products: IProduct[];
}

const StyledProducts = styled.div`
  flex: 1;
  margin-top: ${({ theme }: { theme: ITheme }) => `${theme.spacing[7]}px`};
  margin-bottom: ${({ theme }: { theme: ITheme }) => `${theme.spacing[7]}px`};
`;

const StyledBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ theme }: { theme: ITheme }) => `${theme.spacing[4]}px`};
  max-width: ${({ theme }: { theme: ITheme }) => theme.breakpoints.maxWidth};
  margin: 0 auto;
`;

const Products = (props: IProductsProps) => {
  return (
    <StyledProducts>
      <StyledBox>
        {props.products.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </StyledBox>
    </StyledProducts>
  );
};

export default Products;
