import React from 'react';
import { withRouter, NextRouter } from 'next/router';
import type { DocumentContext } from 'next/document';

import { getListingById, EtsyListing } from '../../data';
import MainLayout from '../../layouts/main';

interface ProductRoute {
  router: NextRouter;
  listing?: EtsyListing;
  suggestions: EtsyListing[];
}

const Products = (props: ProductRoute): JSX.Element => {
  const { listing, suggestions } = props;
  console.log('-->>-', listing, suggestions);
  return (
    <MainLayout title="product">
      {listing ? (
        <div className="grid product">
          <div className="column-xs-12 column-md-7">
            <div className="product-gallery">
              <div className="product-image">
                <img className="active" src="https://source.unsplash.com/W1yjvf5idqA" />
              </div>
              <ul className="image-list">
                <li className="image-item">
                  <img src="https://source.unsplash.com/W1yjvf5idqA" />
                </li>
                <li className="image-item">
                  <img src="https://source.unsplash.com/VgbUxvW3gS4" />
                </li>
                <li className="image-item">
                  <img src="https://source.unsplash.com/5WbYFH0kf_8" />
                </li>
              </ul>
            </div>
          </div>
          <div className="column-xs-12 column-md-5">
            <h1>Bonsai</h1>
            <h2>$19.99</h2>
            <div className="description">
              <p>
                The purposes of bonsai are primarily contemplation for the viewer, and the pleasant exercise of effort
                and ingenuity for the grower.
              </p>
              <p>
                By contrast with other plant cultivation practices, bonsai is not intended for production of food or for
                medicine. Instead, bonsai practice focuses on long-term cultivation and shaping of one or more small
                trees growing in a container.
              </p>
            </div>
            <button className="add-to-cart">Add To Cart</button>
          </div>
        </div>
      ) : (
        <h2>Product Not Found</h2>
      )}
      <div className="grid related-products">
        {suggestions.map((suggestion: EtsyListing, index: number) => (
          <div key={index} className="column-xs-12 column-md-4">
            <img src="https://source.unsplash.com/6Rs76hNbIWE" />
            <h4>{suggestion.title}</h4>
            <p className="price">{suggestion.price}</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

Products.getInitialProps = async function (context: DocumentContext) {
  const { id } = context.query;
  const { listing, suggestions } = await getListingById(id as string);
  return { listing, suggestions };
};

export default withRouter(Products);
