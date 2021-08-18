import React from "react"

function Begin(props) {
    return (
        <div className="begin" style={{display: !props.status && "none"}}>
            <p>Sander Meijer © 2021</p>
        </div>
    )
}

export default Begin
