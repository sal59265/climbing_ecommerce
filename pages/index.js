import React from 'react';

const Home = () => {
  return (
    <>
      Header
      <div>HeroBanner</div>
      <div>
        <h2>Most Popular Products</h2>
        <p>Variety of climbing gears</p>
      </div>
      <div>{['Product 1', 'Product 2'].map((product) => product)}</div>
      Footer
    </>
  );
};

export default Home;
