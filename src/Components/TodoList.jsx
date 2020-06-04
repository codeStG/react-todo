import React from 'react';
import Todo from './Todo';

function TodoList({todos}) {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo}/>
            ))}
        </ul>
    )
}

export default TodoList;
//This component renders a list of todos in an array.