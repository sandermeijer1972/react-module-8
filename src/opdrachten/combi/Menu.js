import React from "react"

function Menu({handleMenuClick}) {
    return (
        <div className="menu">
            <div className="menu-item" onClick={handleMenuClick} value="grap">moppen</div>
            <div className="menu-item" onClick={handleMenuClick} value="star">star-wars</div>
            <div className="menu-item" onClick={handleMenuClick} value="hook">teller</div>
            <div className="menu-item" onClick={handleMenuClick} value="todo">todo-lijst</div>
            <div className="menu-item" onClick={handleMenuClick} value="form">formulier</div>
            <div className="menu-item" onClick={handleMenuClick} value="cond">in/uitloggen</div>
            <div className="menu-item" onClick={handleMenuClick} value="meme">meme-generator</div>
        </div>
    )
}

export default Menu