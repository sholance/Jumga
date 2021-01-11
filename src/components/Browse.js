import React from 'react';
import Featured from "./Products/Featured";

export default function Browse() {
    return (
        <div className="browse container">
            <div className="search-sidebar">
                Search sidebar
            </div>
            <div className="searched-products">
                <Featured />
            </div>
        </div>
    )
}
