import React from "react"

function Formulier(props) {
    return (
        <div style={{display: !props.status && "none"}}>
            <h1>formulier</h1>
        </div>
    )
}

export default Formulier
