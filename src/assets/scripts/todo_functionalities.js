import Todo, { todos } from './todo.js';
import loadTodo from './todo_loader.js';

const form = document.querySelector('#form');
const todolist = document.querySelector('.todolist');

const addTodo = (id, desc) => {
  const todo = new Todo(id, desc);
  todo.add();
  Todo.saveTolocalStorage();
  loadTodo();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value: todoDesc } = document.querySelector('#todo');
  const id = todos.length;
  addTodo(id, todoDesc);
  form.reset();
});

const editTodo = (target) => {
  const { id } = target.parentElement.parentElement;
  target.addEventListener('focusout', () => {
    const newDesc = target.value;
    todos.forEach((todo) => {
      if (Number(todo.id) === +id) todo.description = newDesc;
    });
    Todo.saveTolocalStorage();
  });
};

const removeTodo = (id) => {
  Todo.remove(id);
  Todo.saveTolocalStorage();
  loadTodo();
};

todolist.addEventListener('click', (e) => {
  const { target } = e;
  if (target.type === 'text') editTodo(target);

  if (target.type === 'submit') {
    const { id } = target.parentElement;
    removeTodo(id);
  }
});

export default todolist;
export { addTodo, removeTodo };
