import React from "react";
import { FaCheck } from "react-icons/fa6";
import Button from "./Button";
import { Socket } from "socket.io-client";

export type Todo = {
  title: string;
  isDone: boolean;
  id: string;
  socket: Socket;
};
const TodoItem = ({ title, isDone, socket, id }: Todo) => {
  const updateTodo = () => {
    socket.emit("updateTodoItem", {
      isDone: !isDone,
      id,
    });
  };

  const deleteTodo = () => {
    socket.emit("deleteTodoItem", id);
  };
  return (
    <div
      key={title}
      onClick={updateTodo}
      className="cursor-pointer mt-4 flex items-center justify-between bg-[#F9F9F9] rounded-lg px-4 py-2 transition-transform duration-500 ease-in-out hover:scale-105"
    >
      <div className="flex gap-2">
        <div
          className={`w-6 h-6 border-2 border-gray-400 rounded-lg flex justify-center items-center ${
            isDone ? "bg-darkBlue-500 border-0 border-white" : ""
          }`}
        >
          {isDone && <FaCheck color="white" />}
        </div>
        <p className={isDone ? "line-through" : ""}>{title}</p>
      </div>
      <Button
        title="Delete"
        onClick={deleteTodo}
        className="bg-red-600 hover:bg-red-500"
      />
    </div>
  );
};

export default TodoItem;
