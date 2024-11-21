"use client";
import React, { useState } from "react";
import Button from "./Button";

const CreateTodo = ({ socket }: any) => {
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e: any) => {
    e.preventDefault();
    socket.emit("newTodo", newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={addTodo}>
      <div className="mt-6 flex justify-center items-center border-2 border-[#e0dcf7] gap-2 w-full rounded-lg">
        <p className="text-2xl ml-3">➕</p>
        <input
          className="w-full h-12 border-0 rounded-lg focus:outline-none placeholder-[#8d85b7]"
          placeholder="Add a new to do"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <div className="flex justify-end mt-4">
        <Button
          type="submit"
          disabled={newTodo === ""}
          title="Add todo"
          className="bg-blue-600 hover:bg-blue-500"
        />
      </div>
    </form>
  );
};

export default CreateTodo;
