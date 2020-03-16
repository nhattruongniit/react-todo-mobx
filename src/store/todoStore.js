import { decorate, observable, action } from "mobx"

class TodoStore {
  constructor() {
    this.todos = []
  }

  actAddTodo = name => {
    if (name === '') return;

    const newTodo = {
      id: Date.now(),
      name,
      isDone: false
    }
    this.todos = [...this.todos, newTodo]
  }

  actClearTodo = () => {
    this.todos = [];
  }

  actCompletedTodo = index => {
    const newTodos = [...this.todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    this.todos = newTodos;
  }

  actDeleteTodo = id => {
    const newTodos = this.todos.filter(todo => todo.id !== id);
    this.todos = newTodos;
  }
}

decorate(TodoStore, {
  todos: observable,

  actAddTodo: action,
  actClearTodo: action,
  actDeleteTodo: action,
  actCompletedTodo: action,
})

export default TodoStore;