import React from 'react';
import Featured from "./Products/Featured";

export default function Browse() {
    return (
        <div>
        <div className="cont browse">
            <div className="search-sidebar">
            <form className="search-jumga">
          <input
            type="search"
            autocomplete="off"
            placeholder="Enter product name"
            className="search__input"
          ></input>
        </form>
                Search Products
            </div>
            <div className="search-products">
            <Featured />
            <Featured />
            </div>
        </div>
        </div>
    )
}
