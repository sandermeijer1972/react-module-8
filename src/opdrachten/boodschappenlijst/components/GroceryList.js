import React from "react"
import List from "./List"

function GroceryList({products, handleClickGroceryItem}) {    
    return (
        <div className="boodschappenlijstje">
            <h2>boodschappenlijstje</h2>
            <List items={products} handleClickItem={handleClickGroceryItem}/>
        </div>
    )
}

export default GroceryList