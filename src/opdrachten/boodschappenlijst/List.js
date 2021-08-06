import React from "react"
import ListItem from "./ListItem"

class List extends React.Component {
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
                {id: 11, title: "doos eieren"},
                {id: 12, title: "schuursponsjes"},
                {id: 13, title: "wc papier"},
                {id: 14, title: "afwasmiddel"},
                {id: 15, title: "cornetto's"},
            ]
        }
    }
    render() {
        const listItems = this.state.groceryItems.map(item => <ListItem key={item.id} item={item} />)
        return (
            <ul className="boodschappenlijstje">
                {listItems}                                    
            </ul>
        )
    }
}

export default List