import React, { useState } from 'react'
import {v4 as uuid} from "uuid";

//This component keeps track of our todo state through the form. 
function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleInputChange(e) {
        //This sets todo to its current values and then updates the task property with
        //current input.
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(todo.task.trim()) {
            addTodo({...todo, id: uuid() });
            // reset the task input after adding it to the list.
            setTodo({...todo, task: "" });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="task"
                type="text" 
                value={todo.task}
                onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default TodoForm;
