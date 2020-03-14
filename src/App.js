import React, { useRef } from 'react';
import { inject, observer } from 'mobx-react';

// components
import TodoItem from './components/TodoItem';

const App = ({ todoStore: { todos, actAddTodo, actClearTodo, actDeleteTodo, actCompletedTodo } }) => {
  const inputEle = useRef('');

  const handleAddTodo = () => {
    actAddTodo(inputEle.current.value);
    inputEle.current.value = '';
  }

  return (
    <div className="container">
      <h1>Todo List with Mobx</h1>
      <div className="form-group">
        <label>Add Item</label>
        <input type="text" className="form-control" name="" id="itemInput" ref={inputEle} />
      </div>
      <div className="buttonContainer">
        <button className="btn btn-primary" onClick={handleAddTodo}>Add Todo</button>
        <button className="btn btn-danger" onClick={actClearTodo}>Clear Todo</button>
      </div>
      <h3>Todo List</h3>
      <TodoItem todos={todos} actDeleteTodo={actDeleteTodo} actCompletedTodo={actCompletedTodo} />
    </div>
  );
}

export default inject('todoStore')(
  observer(App)
);
