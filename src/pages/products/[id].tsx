import React from "react";
import fetch from "node-fetch";
import type { DocumentContext } from "next/document";

import MainLayout from "../../layouts/main";

const Products = (props: any): JSX.Element => {
  console.log("---", props);
  return <MainLayout title="product">Product Loaded</MainLayout>;
};

Products.getInitialProps = async function (context: DocumentContext) {
  const { id } = context.query;
  const res = await fetch(
    `https://my-json-server.typicode.com/mood-board/demo/products/${id}`
  );
  const product = await res.json();
  return { product };
};

export default Products;
