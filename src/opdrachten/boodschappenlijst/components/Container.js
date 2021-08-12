import React from "react"
import GroceryList from "./GroceryList"
import ShoppingCart from "./ShoppingCart"

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            groceryItems: [],
            shoppingListItems: []
        }
    }

    render() {
        const addGroceryItemInBasket = (item) => {
            const newItem = {id: this.state.shoppingListItems.length + 1, title: item, amount: 1}
            this.setState(prevState => {
                const newShoppingList = prevState.shoppingListItems.concat(newItem)
                return {
                    shoppingListItems: newShoppingList
                }
            })
        }
        const addAmountToItem = (item) => {            
            const shoppingList = [...this.state.shoppingListItems]
            const newList = shoppingList.map(shoppingItem => {
                if (shoppingItem.title === item) {
                    shoppingItem.amount++
                }
                return shoppingItem
            })
            this.setState({ shoppingListItems: newList })
        }
        const handleClickGroceryItem = (event) => {
            const clickedItem = event.target.getAttribute("value")
            console.log("geklikt op item: ", clickedItem)
            const currentShoppingList = this.state.shoppingListItems
            const shoppingListItem = currentShoppingList.filter(
                item => item.title === clickedItem
            )
            shoppingListItem.length === 0 ? addGroceryItemInBasket(clickedItem) : addAmountToItem(clickedItem)
        }
        const emptyCart = () => {
            this.setState({shoppingListItems: []})
        }
        const addGrocery = grocery => {
            const item = { id: this.state.groceryItems.length + 1, title: grocery }            
            this.setState({ groceryItems: this.state.groceryItems.concat(item) })
        }
        return (
            <div className="lijsten">
                <GroceryList products={this.state.groceryItems} handleClickGroceryItem={handleClickGroceryItem} addGrocery={addGrocery} />
                <ShoppingCart products={this.state.shoppingListItems} handleClickEmptyBasket={emptyCart} />
            </div>
        )      
    }
}

export default Container