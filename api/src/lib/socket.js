import http from "http";
import { Server } from "socket.io";
import express from "express";
import { addTodo, deleteTodo, updateTodo } from "../service/todo.service.js";

export const todos = [];
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  socket.emit("fetchTodos", todos);

  socket.on("newTodo", (newTodoItem) => {
    addTodo(newTodoItem);
    io.emit("updateTodo", todos);
  });

  socket.on("updateTodoItem", (item) => {
    updateTodo(item);
    io.emit("updateTodo", todos);
  });

  socket.on("deleteTodoItem", (item) => {
    deleteTodo(item);
    io.emit("updateTodo", todos);
  });
});

io.on("disconnect", (socket) => {
  //   console.log("A user disconnected", socket.id);
});
export { io, app, server };
