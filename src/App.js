import React, {useState} from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  //Takes in a single todo from TodoForm.jsx and adds it into the todos array.
  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
       <p>George's Todo</p>
       <TodoForm addTodo={addTodo} />
       <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
