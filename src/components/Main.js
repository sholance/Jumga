import React from "react";
import Featured from "./Products/Featured";

export default function Main() {
  return (
    <div>
      <div className="hero">
        <h1 className="hero__text">
          Get the best Clothing deals in Nigeria, Ghana, Kenya and the UK{" "}
        </h1>
        <form className="search-jumga">
          <input
            type="search"
            autocomplete="off"
            placeholder="What do you want?"
            className="search__input"
          ></input>
          <button className="search__button" value="">Search</button>
        </form>
      </div>
      <div className="main">
        <div className="Featured-products">
          <h3 className="main__h3">Featured Products</h3>
          <Featured />
        </div>
        <div className="Latest-products">
          <h3 className="main__h3"> Latest Products</h3>
          <Featured />
        </div>
        <div className="Popular-products">
          <h3 className="main__h3">Popular Products</h3>
          <Featured />
        </div>
        <div className="categories-wrapper">
          <h3 className="main__h3">Categories</h3>
        </div>
      </div>
    </div>
  );
}
