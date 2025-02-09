import React from 'react';
import ToDo from './ToDo';

function ToDoList({ todos, deleteTask }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDo key={index} todo={todo} index={index} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}

export default ToDoList;
