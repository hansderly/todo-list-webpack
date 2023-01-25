import Todo from './todo.js';

const addTodo = (id, desc) => {
  const todo = new Todo(id, desc);
  return todo.add();
};

const editTodo = () => {};

const removeTodo = (id) => Todo.remove(id);

const updateTodo = () => {};

// eslint-disable-next-line object-curly-newline
export { addTodo, editTodo, removeTodo, updateTodo };
