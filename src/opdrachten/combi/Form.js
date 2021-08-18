import React from "react"
import Formulier from "./Formulier"

function Form(props) {
    return (
        <div style={{display: !props.status && "none"}} className="invullen">
            <Formulier />
        </div>
    )
}

export default Form
