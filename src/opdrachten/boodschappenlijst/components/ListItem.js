import React from "react"

function ListItem({item, clickItem}) {
    return (
        <li key={item.id} value={item.title} onClick={clickItem}>{item.title}</li>
    )
}

export default ListItem
