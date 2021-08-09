import React from "react"
import List from "./List"

function ShoppingCart({products, handleClickEmptyBasket}) { 
    return (
        <div className="winkelmand">
            <h2>winkelmandje</h2>
            <button onClick={handleClickEmptyBasket} style={{display: products.length === 0 && "none"}}>Leeg de winkelmand</button>
            <List items={products} />
        </div>
    )
}

export default ShoppingCart