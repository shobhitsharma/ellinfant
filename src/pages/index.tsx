import MainLayout from "../layouts/main";
import Products from "../components/Products";
import type { IProduct } from "../components/Products";

interface IIndexProps {
  results: IProduct[];
}

const Index = (props: IIndexProps) => {
  return (
    <MainLayout>
      <Products products={props.results} />
    </MainLayout>
  );
};

Index.getInitialProps = async () => {
  const data = await import("../data/products.json");

  console.log("====", data)
  return data;
};

export default Index;
