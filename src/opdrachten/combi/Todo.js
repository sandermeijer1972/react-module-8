import React from "react"
import TodoList from "./TodoList"

function Todo(props) {
    return (
        <div style={{display: !props.status && "none"}} className="todos">
            <TodoList />
        </div>
    )
}

export default Todo
