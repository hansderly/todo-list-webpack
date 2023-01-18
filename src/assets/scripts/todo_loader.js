import { todos } from './todo.js';

const todolistContainer = document.querySelector('.todolist');

const loadTodo = () => {
  todolistContainer.innerHTML = '';
  todos.forEach((el) => {
    const todo = document.createElement('li');
    todo.id = el.id;
    todo.innerHTML = `
            <div>
              <input type="checkbox" name="checkbox" id="checkbox">
              <input type="text" value="${el.description}">
            </div>
            <button class="material-symbols-outlined"> delete </button> `;

    todolistContainer.appendChild(todo);
  });
};

export default loadTodo;