import React from "react"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#808080",
        textDecoration: "line-through"
    }
    return (
        <div className="list-item">
            <input
                type="checkbox"
                onChange={() => props.handleChange(props.item.id)}
                checked={props.item.completed}/>
            <div style={props.item.completed ? completedStyle : null}>{props.item.text}</div>
        </div>
    )
}

export default TodoItem