import Product from "../../components/Product";
import type { IProduct } from "../../components/Product";

interface IProductListProps {
  products: IProduct[];
}

const ProductList = (props: IProductListProps) => {
  return (
    <div className="product-list">
      {props.products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
