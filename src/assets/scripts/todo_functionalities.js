import Todo from './todo.js';
import loadTodo from './todo_loader.js';

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value: todoDesc } = document.querySelector('#todo');
  const todo = new Todo();
  todo.add('1', todoDesc);
  loadTodo();
  form.reset();
});