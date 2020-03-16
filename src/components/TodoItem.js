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
      {todos.map((item, index) => {
        const classBtnComplete = `${item.isDone ? 'btn-success' : 'btn-primary'}`;

        return (
          <li key={item.id} className="completed well">
            <label className={item.isDone && 'line-through'}>{item.name}</label>
            <div className="buttonArea">
              <button className={`btn ${classBtnComplete}`} onClick={handleCompleted(index)}>{item.isDone ? 'Completed' : 'Complete'}</button>
              <button className="btn btn-danger" onClick={handleDelete(item.id)}>Delete</button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoItem;