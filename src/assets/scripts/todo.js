const todolist = [
  {
    id: 0,
    description: 'Do some data structures and algorithms',
    completed: true,
  },
  {
    id: 1,
    description: 'Go take a walk',
    completed: true,
  },
  {
    id: 2,
    description: 'Play some video game',
    completed: true,
  },
];

const todolistContainer = document.querySelector('.todolist');

const displayTodo = () => {
  todolist.forEach((el, index) => {
    const todo = document.createElement('li');
    todo.id = index;
    todo.innerHTML = `
            <div>
              <input type="checkbox" name="checkbox" id="checkbox">
              <p>${el.description}</p>
            </div>
            <span class="material-symbols-outlined"> more_vert </span> `;

    todolistContainer.appendChild(todo);
  });
};

export default displayTodo;