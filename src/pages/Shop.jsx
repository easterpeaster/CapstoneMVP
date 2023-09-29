import React from "react";

// update the state of the cart
export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        {/* import product file, loop through, and pass product and for each product render product component */}
        <h1>ebuy</h1>
      </div>
    <div className="products">
    {PRODUCTS.map((product) => (
      <Product data={product} />
    ))}
  </div>
</div>
);
};