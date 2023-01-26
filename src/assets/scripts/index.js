import '../styles/styles.css';
import loadTodo from './todo_loader.js';

loadTodo();

export { addTodoHandler, removeTodoHandler } from './todo_functionalities.js';
export { clearAllTodo } from './completed_functionality.js';
