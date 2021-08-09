import React from "react"
import GroceryList from "./GroceryList"
import ShoppingCart from "./ShoppingCart"

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            groceryItems: [
                {id: 1, title: "afbakbroodjes"},
                {id: 2, title: "hagelslag"},
                {id: 3, title: "pindakaas"},
                {id: 4, title: "roggebrood"},
                {id: 5, title: "m&m's"},
                {id: 6, title: "perssinaasappelen"},
                {id: 7, title: "emmertje yoghurt"},
                {id: 8, title: "bananen"},
                {id: 9, title: "borrelnootjes"},
                {id: 10, title: "bitterballen"},
            ],
            shoppingListItems: []
        }
    }

    render() {
        const addGroceryItemInBasket = (item) => {
            const newItem = {id: this.state.shoppingListItems.length + 1, title: item}
            this.setState(prevState => {
                const newShoppingList = prevState.shoppingListItems.concat(newItem)
                return {
                    shoppingListItems: newShoppingList
                }
            })
        }
        const handleClickGroceryItem = (event) => {
            const clickedItem = event.target.getAttribute("value");
            console.log("geklikt op item: ", clickedItem)
            addGroceryItemInBasket(clickedItem)
        }
        const emptyCart = () => {
            this.setState({shoppingListItems: []})
        }
        return (
            <div className="lijsten">
                <GroceryList products={this.state.groceryItems} handleClickGroceryItem={handleClickGroceryItem} />
                <ShoppingCart products={this.state.shoppingListItems} handleClickEmptyBasket={emptyCart} />
            </div>
        )      
    }
}

export default Container