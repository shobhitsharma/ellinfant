import Product from "./Product";
import type { IProduct } from "./Product";

interface IProductsProps {
  products: IProduct[];
}

const Products = (props: IProductsProps) => {
  return (
    <div>
      {props.products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
};

export default Products;
