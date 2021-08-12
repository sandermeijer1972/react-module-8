import React from "react"
import turf1 from "./images/turf1.png"
import turf2 from "./images/turf2.png"
import turf3 from "./images/turf3.png"
import turf4 from "./images/turf4.png"
import turf5 from "./images/turf5.png"
import turf6 from "./images/turf6.png"
import turf7 from "./images/turf7.png"
import turf8 from "./images/turf8.png"
import turf9 from "./images/turf9.png"
import turf10 from "./images/turf10.png"

function ListItem({item, clickItem}) {
    return (
        <li>
            <span key={item.id} value={item.title} onClick={clickItem}>{item.title}</span>
            <span style={{display: !item.amount && "none"}}>
                <img alt="" src={turf1} style={{display: item.amount !== 1 && "none"}}></img>
                <img alt="" src={turf2} style={{display: item.amount !== 2 && "none"}}></img>
                <img alt="" src={turf3} style={{display: item.amount !== 3 && "none"}}></img>
                <img alt="" src={turf4} style={{display: item.amount !== 4 && "none"}}></img>
                <img alt="" src={turf5} style={{display: item.amount !== 5 && "none"}}></img>
                <img alt="" src={turf6} style={{display: item.amount !== 6 && "none"}}></img>
                <img alt="" src={turf7} style={{display: item.amount !== 7 && "none"}}></img>
                <img alt="" src={turf8} style={{display: item.amount !== 8 && "none"}}></img>
                <img alt="" src={turf9} style={{display: item.amount !== 9 && "none"}}></img>
                <img alt="" src={turf10} style={{display: item.amount !== 10 && "none"}}></img>
                <span style={{display: item.amount <= 10 && "none", fontFamily: "Reenie Beanie", fontSize: "30px"}}>heel veel</span>
            </span>                    
        </li>
    )
}

export default ListItem
