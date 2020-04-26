import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../layouts/Products";

import type { IProduct } from "../components/Product";

interface IIndexProps {
  products: IProduct[];
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <link rel="shortcut icon" href="/public/static/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <img
          src="/public/static/aquarium.svg"
          alt="a"
          className="background-image"
        />
        <div className="promotional-message">
          <h3>REDISCOVER</h3>
          <h2>Fishkeeping</h2>
          <p>
            An <strong>exclusive collection of bettas</strong> available for
            everyone.
          </p>
        </div>
        <Products products={props.products} />
      </main>
      <Footer />
    </div>
  );
};

Index.getInitialProps = async () => {
  return {
    products: [
      {
        id: "nextjs_halfmoon",
        name: "Halfmoon Betta",
        price: 25.0,
        image: "../public/static/halfmoon.jpg",
        description:
          "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.",
      } as IProduct,
      {
        id: "nextjs_dragonscale",
        name: "Dragon Scale Betta",
        price: 35,
        image: "../public/static/dragonscale.jpg",
        description:
          "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.",
      } as IProduct,
      {
        id: "nextjs_crowntail",
        name: "Crowntail Betta",
        price: 7.5,
        image: "../public/static/crowntail.jpg",
        description:
          "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb.",
      } as IProduct,
      {
        id: "nextjs_veiltail",
        name: "Veiltail Betta",
        price: 5.0,
        image: "../public/static/veiltail.jpg",
        description:
          "By far the most common betta fish. You can recognize it by its long tail aiming downwards.",
      } as IProduct,
    ],
  };
};

export default Index;
