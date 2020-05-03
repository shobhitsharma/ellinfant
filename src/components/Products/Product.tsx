import styled from 'styled-components';
import type { EtsyListing, EtsyListingImage } from '../../data';

export interface ProductProps {
  product: EtsyListing;
  images?: EtsyListingImage[];
}

const StyledProduct = styled.a`
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.boxBgColor};
  padding: ${({ theme }: { theme: ITheme }) => `${theme.spacing[4]}px`};
  border-radius: ${({ theme }: { theme: ITheme }) => `${theme.radii[3]}px`};
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);

  img {
    width: 100%;
    border-radius: ${({ theme }: { theme: ITheme }) => `${theme.radii[3]}px`};
  }
`;

const Product = (props: ProductProps) => (
  <StyledProduct href={`/products/${props.product.listing_id}`}>
    {props.images && (
      <picture>
        <img src={props.images[0].url_170x135} />
      </picture>
    )}
    <h2 className="product__title">{props.product.title}</h2>
  </StyledProduct>
);

export default Product;
