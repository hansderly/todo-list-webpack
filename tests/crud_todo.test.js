// Arrange
import {
  addTodo, clearAllTodo, completedTodo, editTodo, removeTodo,
} from '../src/assets/scripts/crud_todo.js';
import { todos } from '../src/assets/scripts/todo.js';

describe('todo', () => {
  // Act
  const { length: id } = todos;
  const desc = 'A new todo';

  it('should return a number', () => {
    expect(typeof addTodo(id, desc)).toBe('number');
  });

  it('should return the desc for a specific id', () => {
    expect(todos[id].description).toBe(desc);
  });

  it('should make nextId to be equal to the local storage length', () => {
    const nextId = id + 1;
    expect(todos.length).toBe(nextId);
  });

  it('should remove one from the length of the array', () => {
    expect(removeTodo(id).length).toBe(todos.length);
  });

  it('should update the description of the todo', () => {
    addTodo(id, desc);
    const { newDesc } = editTodo(id, 'test');

    expect(newDesc).toBe(todos[id].description);
  });
  it('should mark the todo as completed', () => {
    addTodo(id, desc);
    completedTodo(id);
    const { completed } = todos[id];
    expect(completed).toBeTruthy();
  });
  it('should clear all completed todos', () => {
    const { length: idOne } = todos;
    addTodo(idOne, desc);
    const { length: idTwo } = todos;
    addTodo(idTwo, desc);

    completedTodo(0);

    expect(clearAllTodo().length).toBe(todos.length);
  });
});
