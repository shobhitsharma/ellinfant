import styled from 'styled-components';

import Product from './Product';
import type { IProduct } from './Product';

interface IProductsProps {
  products: IProduct[];
}

const StyledProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${({ theme }: { theme: ITheme }) => `${theme.spacing[4]}px`};
`;

const Products = (props: IProductsProps) => {
  return (
    <StyledProducts>
      {props.products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </StyledProducts>
  );
};

export default Products;
