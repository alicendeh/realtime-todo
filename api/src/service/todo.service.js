import { v4 as uuidv4 } from "uuid";
import { todos } from "../lib/socket.js";

export const addTodo = (title) => {
  if (!title) {
    return "Missing todo item";
  }
  const newTodo = { id: uuidv4(), title, isDone: false };
  todos.push(newTodo);
};

export const updateTodo = (item) => {
  const { isDone, id } = item;

  const todo = todos.find((current) => current.id === id);

  if (!todo) {
    return "No todo item with this ID";
  }

  if (isDone !== undefined) todo.isDone = isDone;
};

export const deleteTodo = (id) => {
  const todoIndex = todos.findIndex((current) => current.id === id);

  if (todoIndex === -1) {
    return "No todo item with this ID";
  }

  todos.splice(todoIndex, 1);
};
