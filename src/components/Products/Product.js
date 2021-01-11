import React from "react";

export default function Product() {
  return (
    <div className="product">
      <div className="product__wrapper">
        <img src={""} alt="product-alt" className="product__image"></img>
        <h4 className="product__name">Product Name</h4>
        <span className="product__price">$100</span>
        <p className="product__short-desc">
          Product description in less than 10 words
        </p>
      </div>
    </div>
  );
}
