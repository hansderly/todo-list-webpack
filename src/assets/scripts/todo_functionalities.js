import { completedTodo, updateIndex } from './completed_functionality.js';
import { addTodo, removeTodo } from './crud_todo.js';
import Todo, { todos } from './todo.js';
import loadTodo from './todo_loader.js';

const form = document.querySelector('#form');
const todolist = document.querySelector('.todolist');
const popupMessage = document.querySelector('.popup_message');

const displaySuccessMessage = () => {
  popupMessage.classList.remove('hide');
  setTimeout(() => popupMessage.classList.add('hide'), 3000);
};

const addTodoHandler = (id, desc) => {
  addTodo(id, desc);
  Todo.saveTolocalStorage();
  loadTodo();
  displaySuccessMessage();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value: todoDesc } = document.querySelector('#todo');
  const id = todos.length;
  addTodoHandler(id, todoDesc);
  form.reset();
});

const editTodo = (target) => {
  const { id } = target.parentElement.parentElement;
  target.addEventListener('focusout', () => {
    target.parentElement.parentElement.classList.remove('yellow_color');
    const newDesc = target.value;
    todos.forEach((todo) => { if (Number(todo.id) === +id) todo.description = newDesc; });
    Todo.saveTolocalStorage();
  });
};

const removeTodoHandler = (id) => {
  removeTodo(id);
  Todo.saveTolocalStorage();
  loadTodo();
  updateIndex();
};

todolist.addEventListener('click', (e) => {
  const { target } = e;
  if (target.type === 'text') {
    editTodo(target);
    target.parentElement.parentElement.classList.add('yellow_color');
  }

  if (target.type === 'submit') {
    const { id } = target.parentElement;
    removeTodoHandler(id);
  }

  if (target.type === 'checkbox') completedTodo(target);
});

export default todolist;
export { addTodoHandler, removeTodoHandler };
