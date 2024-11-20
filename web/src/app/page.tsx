"use client";

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import TodoManagement from "./components/TodoManagement";
import SideBar from "./components/Sidebar";
import { Todo } from "./components/TodoItem";

const socket = io("http://localhost:5001");

const Home = () => {
  const [allTodos, setAllTodos] = useState<Todo[]>([]);
  const completedTodos = allTodos.filter((todo) => todo.isDone);
  const incompletedTodos = allTodos.filter((todo) => !todo.isDone);

  useEffect(() => {
    // Handle socket connection
    const handleConnect = () => {
      console.log("Connected to socket server:", socket.id);
    };

    // Update todos
    const handleUpdateTodo = (todos: Todo[]) => {
      setAllTodos(todos);
    };

    // Set up socket listeners
    socket.on("connect", handleConnect);
    socket.on("updateTodo", handleUpdateTodo);
    socket.on("fetchTodos", handleUpdateTodo);

    // Cleanup on unmount
    return () => {
      socket.off("connect", handleConnect);
      socket.off("updateTodo", handleUpdateTodo);
      socket.off("fetchTodos", handleUpdateTodo);
      socket.disconnect();
    };
  }, []);

  return (
    <section>
      <aside className="w-72 fixed top-0 z-10 h-full hidden md:block">
        <SideBar
          completedTodos={completedTodos}
          incompletedTodos={incompletedTodos}
        />
      </aside>
      <div className="md:px-8 mt-5">
        <TodoManagement
          socket={socket}
          completedTodos={completedTodos}
          incompletedTodos={incompletedTodos}
        />
      </div>
    </section>
  );
};

export default Home;
