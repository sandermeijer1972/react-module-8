import React from "react"
import Conditional from "./Conditional"

function Inloggen(props) {
    return (
        <div style={{display: !props.status && "none"}} className="inloggen">
            <Conditional />
        </div>
    )
}

export default Inloggen
