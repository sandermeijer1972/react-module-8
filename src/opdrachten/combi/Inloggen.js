import React from "react"

function Inloggen(props) {
    return (
        <div style={{display: !props.status && "none"}}>
            <h1>in/uitloggen</h1>
        </div>
    )
}

export default Inloggen
