// import { decorate, observable } from 'mobx';

class Todo {
  constructor() {
    this.item = {
      id: Math.random(),
      title: '',
      done: false
    }
  }
}

const todoStore = new Todo();

export { todoStore }