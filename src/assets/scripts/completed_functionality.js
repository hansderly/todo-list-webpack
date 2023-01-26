import { clearAllTodo, completedTodo } from './crud_todo.js';
import Todo, { todos } from './todo.js';
import loadTodo from './todo_loader.js';

const buttonClear = document.querySelector('.clear_btn');

const updateIndex = () => {
  todos.forEach((todo, index) => { todo.id = index; });
  Todo.saveTolocalStorage();
};

const completedTodoHandler = (target) => {
  const { id } = target.parentElement.parentElement;
  completedTodo(id);
  Todo.saveTolocalStorage();
  loadTodo();
};

const clearAllTodoHandler = () => {
  const newTodos = clearAllTodo();
  Todo.setTolocalStorage(newTodos);
  Todo.saveTolocalStorage();
  updateIndex();
  loadTodo();
};

buttonClear.addEventListener('click', () => clearAllTodoHandler());

export { completedTodoHandler, clearAllTodoHandler, updateIndex };
