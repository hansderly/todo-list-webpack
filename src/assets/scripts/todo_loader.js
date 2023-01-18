import Todo from './todo.js';

const todolist = Todo.todos;

const todolistContainer = document.querySelector('.todolist');

const loadTodo = () => {
  todolistContainer.innerHTML = '';
  todolist.forEach((el, index) => {
    const todo = document.createElement('li');
    todo.id = index;
    todo.innerHTML = `
            <div>
              <input type="checkbox" name="checkbox" id="checkbox">
              <input type="text" value="${el.description}">
            </div>
            <span class="material-symbols-outlined"> more_vert </span> `;

    todolistContainer.appendChild(todo);
  });
};

export default loadTodo;