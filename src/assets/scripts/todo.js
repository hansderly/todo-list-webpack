class Todo {
  static todos = [];

  constructor() {
    this.id = null;
    this.description = null;
    this.completed = false;
  }

  add(id, description) {
    this.id = id;
    this.description = description;
    Todo.todos.push(this);
  }

  remove(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

export default Todo;