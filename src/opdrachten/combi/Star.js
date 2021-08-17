import React from "react"
import StarWars from "./StarWars"


function Star(props) {
    return (
        <div style={{display: !props.status && "none"}} className="star">
            <StarWars />
        </div>
    )
}

export default Star
