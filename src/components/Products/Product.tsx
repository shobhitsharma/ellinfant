import { withRouter } from 'next/router';
import styled from 'styled-components';

export interface IProduct {
  listing_id: number;
  state: string;
  user_id: number;
  category_id: null;
  title: string;
  description: string;
  creation_tsz: number;
  ending_tsz: number;
  original_creation_tsz: number;
  last_modified_tsz: number;
  price: string;
  currency_code: string;
  quantity: number;
  sku: any[];
  tags: string[];
  category_path: string[];
  materials: string[];
  shop_section_id: number;
  featured_rank: null;
  state_tsz: number;
  url: string;
  views: number;
  num_favorers: number;
  shipping_template_id: number;
  processing_min: number;
  processing_max: number;
  who_made: string;
  is_supply: string;
  when_made: string;
  item_weight: null;
  item_weight_unit: string;
  item_length: null;
  item_width: null;
  item_height: null;
  item_dimensions_unit: string;
  is_private: boolean;
  recipient: null;
  occasion: null;
  style: null;
  non_taxable: boolean;
  is_customizable: boolean;
  is_digital: boolean;
  file_data: string;
  should_auto_renew: boolean;
  language: string;
  has_variations: boolean;
  taxonomy_id: number;
  taxonomy_path: string[];
  used_manufacturer: boolean;
  is_vintage: boolean;
}

export interface ProductProps {
  product: IProduct;
  router: any;
}

const StyledProduct = styled.div`
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.boxBgColor};
  padding: ${({ theme }: { theme: ITheme }) => `${theme.spacing[3]}px`};
  border-radius: ${({ theme }: { theme: ITheme }) => `${theme.radii[3]}px`};
  box-shadow: ${({ theme }: { theme: ITheme }) => `${theme.shadows.large}`};
`;

const Product = (props: ProductProps) => {
  return (
    <StyledProduct>
      <h2 className="product__title">{props.product.title}</h2>
      <p className="product__description">{props.product.description}</p>
      <div className="product__price-button-container">
        <div className="product__price">${props.product.price}</div>
        <button
          className="snipcart-add-item product__button"
          data-item-id={props.product.listing_id}
          data-item-name={props.product.title}
          data-item-price={props.product.price}
          data-item-url={props.router.pathname}
        >
          Add to cart
        </button>
      </div>
    </StyledProduct>
  );
};

export default withRouter(Product);
