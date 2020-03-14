import React from 'react';

const TodoItem = ({ todos, actDeleteTodo, actCompletedTodo }) => {

  const handleDelete = id => () => {
    actDeleteTodo(id);
  }

  const handleCompleted = id => () => {
    actCompletedTodo(id);
  }

  return (
    <ul id="todoList">
      {todos.map(item => {
        return (
          <li key={item.id} className="completed well">
            <label className={item.done && 'line-through'}>{item.name}</label>
            <button className="btn btn-success" onClick={handleCompleted(item.id)}>Complete</button>
            <button className="btn btn-danger" onClick={handleDelete(item.id)}>Delete</button>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoItem;