import React from 'react'

function Todo({ todo }) {
    return (
        <div style={{display: "flex"}}>
            <input type="checkbox" />
            <li
                style={{
                    color: "white",
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task}
            </li>
            <button>X</button>
        </div>
    )
}

export default Todo;

// This component renders a todo object and handles its actions - 
// renders a todo from the list.
