"use client";
import React from "react";
import { Todo } from "./TodoItem";
import TodosBlock from "./TodosBlock";
import CreateTodo from "./CreateTodo";
import { Socket } from "socket.io-client";

type IProps = {
  socket: Socket;
  completedTodos: Todo[];
  incompletedTodos: Todo[];
};
const TodoManagement = ({
  socket,
  incompletedTodos,
  completedTodos,
}: IProps) => {
  return (
    <div className="*:max-w-full md:pl-72 md:px-10 px-4 text-darkBlue-500">
      <p className="text-2xl font-bold">Good evening, Alice 🤩</p>
      <p className="text-gray-500">Lets dive right in and plan for today!</p>
      <div className="md:flex bg-[#F9F9F9] px-2 py-2 mt-10 rounded-lg gap-3 hidden">
        <p className="text-3xl">💡</p>
        <p className="text-gray-500">
          Are you tired of juggling multiple tasks and feeling like there’s
          never enough time in the day? Flex.To.Do is here to make your life
          simpler and more organized. With our smart task management solution,
          you can prioritize, schedule, and tackle your to-do list with ease
        </p>
      </div>

      <CreateTodo socket={socket} />

      <TodosBlock
        blockTitle="Ongoing"
        todos={incompletedTodos}
        socket={socket}
      />

      <div className="mt-4 mb-14">
        <TodosBlock
          blockTitle="Uncompleted"
          todos={completedTodos}
          socket={socket}
        />
      </div>
    </div>
  );
};

export default TodoManagement;
