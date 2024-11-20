import React from "react";
import TodoItem, { Todo } from "./TodoItem";
import { Socket } from "socket.io-client";

type IProps = {
  blockTitle: string;
  todos: Todo[];
  socket: Socket;
};
const TodosBlock = ({ blockTitle, todos, socket }: IProps) => {
  console.log(todos);

  return (
    <div>
      <div className="flex items-center gap-2  ">
        <p className="text-xl font-bold">{blockTitle} </p>
        <div className="bg-gray-200 w-6 h-6 rounded-lg flex justify-center items-center text-sm">
          {todos?.length}
        </div>
      </div>
      {todos?.map((item) => (
        <TodoItem
          id={item.id}
          title={item.title}
          isDone={item.isDone}
          key={item.id}
          socket={socket}
        />
      ))}
    </div>
  );
};

export default TodosBlock;
