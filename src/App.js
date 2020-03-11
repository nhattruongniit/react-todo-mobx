import React from 'react';

function App() {
  return (
    <div className="container">
      <h1>Todo List with Mobx</h1>
      <div className="form-group">
        <label>Add Item</label>
        <input type="text" className="form-control" name="" id="itemInput" />
      </div>
      <div className="buttonContainer">
        <button className="btn btn-primary">Add To List</button>
        <button className="btn btn-danger">Clear Todo List</button>
      </div>
      <h3>Todo List</h3>
      <ul id="todoList">
        <li className="completed well">
          <label>dinner</label>
          <button className="btn btn-success">Complete</button>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
