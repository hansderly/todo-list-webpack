import Todo, { todos } from './todo.js';

const addTodo = (id, desc) => {
  const todo = new Todo(id, desc);
  return todo.add();
};

const editTodo = (id, newDesc) => {
  todos.forEach((todo) => {
    if (Number(todo.id) === +id) todo.description = newDesc;
  });

  return { id, newDesc };
};

const completedTodo = (id) => {
  todos.forEach((todo) => {
    if (todo.id === +id) todo.completed = !todo.completed;
  });
};

const clearAllTodo = () => todos.filter((todo) => todo.completed !== true);

const removeTodo = (id) => Todo.remove(id);

export {
  addTodo,
  editTodo,
  completedTodo,
  clearAllTodo,
  removeTodo,
};
