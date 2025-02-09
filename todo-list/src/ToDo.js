import React from 'react';

function ToDo ({ todo, index, deleteTask }) {
  return (
    <li>
      {todo} <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
}

export default ToDo;
