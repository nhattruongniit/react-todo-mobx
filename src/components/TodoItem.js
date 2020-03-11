import React from 'react';

const TodoItem = () => {
  return (
    <li className="completed well">
      <label>dinner</label>
      <button className="btn btn-success">Complete</button>
      <button className="btn btn-danger">Delete</button>
    </li>
  )
}

export default TodoItem;