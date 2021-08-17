import React from "react"

function Joke(props) {
    return (
        <div className="grap" style={{backgroundColor: !props.question && "#E6CCFF"}}>
            <p style={{display: !props.question && "none"}}>Vraag: {props.question}</p>
            <p><span style={{display: !props.question && "none"}}>Antwoord:</span> {props.punchLine}</p>
        </div>
    )
}

export default Joke