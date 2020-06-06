import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  //Takes in a single todo from TodoForm.jsx and adds it into the todos array.
  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  //Toggles the completed aspect of the todo
  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    //The filter takes a function that determines whether or not the todo should be kept
    //in the array.
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        George's Todo
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
