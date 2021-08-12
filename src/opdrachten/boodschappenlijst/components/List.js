import React from "react"
import ListItem from "./ListItem"

function List({items, handleClickItem}) {
    const listItems = items.map(item => <ListItem key={item.id} item={item} clickItem={handleClickItem} />)
    return (
        <ul style={{display: items.length === 0 && "none"}}>
            {listItems}
        </ul>
    )
}


export default List