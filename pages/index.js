import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <>
      Header
      <HeroBanner />
      <div>HeroBanner</div>
      <div>
        <h2>Most Popular Products</h2>
        <p>Variety of climbing gears</p>
      </div>
      <div>{['Product 1', 'Product 2'].map((product) => product)}</div>
      <FooterBanner />
    </>
  );
};

export default Home;
