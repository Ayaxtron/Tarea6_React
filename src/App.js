import React, { useState, useEffect } from 'react';
import Create from './components/todos/Create';
import TodoList from './components/todos/TodoList';
import axios from 'axios';

function App() {

  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch("http://localhost:3306/tasks")
    .then(response => response.json())
    .then(data => setTodos(data))
  }, [])

  const addTodo = (description) => {
    let cTodos = Object.assign([], todos);
    cTodos.push({ description: description, status: 'pending' });
    setTodos(cTodos);
    axios.post('http://localhost:3306/tasks', {description: description, status: 'pending'})
  }

  const markAsDone = (task, id) => {
    let cTodos = Object.assign([], todos);
    cTodos[task].status = 'done';
    setTodos(cTodos);
    axios.post('http://localhost:3306/updateStatus/'+id, {id: id})
  }

  const deleteTask = (task, id) => {
    let cTodos = Object.assign([], todos);
    cTodos.splice(task, 1);
    setTodos(cTodos);
    axios.post('http://localhost:3306/delete/'+id, {id: id})
  }

  return (
    <>
      <h1>Gestión de Tareas</h1>
      
     <div className="App">
        <Create addTodo={addTodo}/>
        <br></br>
        <TodoList todos={todos} markAsDone={markAsDone} deleteTask={deleteTask}/>
      </div>
    </>
  );
}

export default App;
