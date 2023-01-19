import data from './storage.js';

// eslint-disable-next-line import/no-mutable-exports
let todos = JSON.parse(data) || [];
class Todo {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.completed = false;
  }

  add() {
    const { id, description, completed } = this;
    const newTodo = { id, description, completed };
    todos.push(newTodo);
  }

  static remove(id) {
    todos = todos.filter((todo) => Number(todo.id) !== +id);
  }

  static saveTolocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  static setTolocalStorage(newTodos) {
    todos = newTodos;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

export default Todo;
export { todos };