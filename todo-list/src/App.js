import React, { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter ToDo" />
      <button onClick={addTask}>Add Task</button>
      <ToDoList todos={todos} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
