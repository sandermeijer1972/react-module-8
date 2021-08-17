import React from "react"

import Joke from "./Joke.js"
import grappenData from "./belgenMoppen.js"

function Grappen(props) {
    const jokeComponents = grappenData.map(joke => {
        return (
            <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
        )
    })
    return (
        <div style={{display: !props.status && "none"}} className="moppen">
            <h1>Belgenmoppen</h1>
            <div className="grap-lijst">
                {jokeComponents}       
            </div>
        </div>
    )
}

export default Grappen