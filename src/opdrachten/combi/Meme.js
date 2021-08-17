import React from "react"
import Header from "./Header.js"
import MemeGenerator from "./MemeGenerator.js"


function Meme(props) {
    return (
        <div style={{display: !props.status && "none"}} className="generator">
            <Header />
            <MemeGenerator />
        </div>
    )
}

export default Meme
