import React from "react";
import { FaCheck } from "react-icons/fa6";
import Button from "./Button";
import { Socket } from "socket.io-client";
import { motion } from "framer-motion";

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

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05 },
    exit: { opacity: 0, x: 50, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      key={title}
      onClick={updateTodo}
      className="cursor-pointer mt-4 flex items-center justify-between bg-[#F9F9F9] rounded-lg px-4 py-2"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      exit="exit"
    >
      {/* Left Section: Checkbox and Title */}
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

      {/* Delete Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Button
          title="Delete"
          onClick={deleteTodo}
          className="bg-red-600 hover:bg-red-500"
        />
      </motion.div>
    </motion.div>
  );
};

export default TodoItem;
