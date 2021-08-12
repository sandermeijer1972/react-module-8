import React from "react"
import winkelwagen from "./images/winkelwagen.png"

function Header() {
    return (
        <header>
            <img src={winkelwagen} alt=""></img>
            <h1>boodschappen doen</h1>
            <img style={{transform: "scaleX(-1)"}} src={winkelwagen} alt=""></img>
        </header>        
    )
}

export default Header