import { decorate, observable } from "mobx"

class TodoStore {
  constructor() {
    this.todos = [
      {
        id: Math.random(),
        title: 'start mobx',
        done: false
      },
      {
        id: Math.random(),
        title: 'finished mobx',
        done: false
      }
    ]
  }
}

decorate(TodoStore, {
  todos: observable
})

export default TodoStore;