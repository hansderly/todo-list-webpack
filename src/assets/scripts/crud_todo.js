import Todo from './todo.js';

const addTodo = (id, desc) => {
  const todo = new Todo(id, desc);
  return todo.add();
};

const editTodo = () => {};

const removeTodo = (id) => Todo.remove(id);

const updateTodo = () => {};

export {
  addTodo,
  editTodo,
  removeTodo,
  updateTodo,
};
