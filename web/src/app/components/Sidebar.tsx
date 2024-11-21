import React from "react";
import { BiLogoAlgolia } from "react-icons/bi";
import { Todo } from "./TodoItem";

type IProps = {
  completedTodos: Todo[];
  incompletedTodos: Todo[];
};

const SideBar = ({ incompletedTodos, completedTodos }: IProps) => {
  const SideBarItems = [
    {
      title: "All",
      icon: "🏠",
      count: incompletedTodos?.length + completedTodos?.length,
    },
    {
      title: "Completed",
      icon: "✅",
      count: completedTodos?.length,
    },
    {
      title: "Uncompleted",
      icon: "❌",
      count: incompletedTodos?.length,
    },
  ];

  return (
    <div className="h-screen bg-[#F9F9F9] px-4 py-5">
      <div className="flex items-center space-x-3">
        <div className="bg-slate-950 w-14 h-14 rounded-lg text-white flex justify-center items-center">
          <BiLogoAlgolia size={40} />
        </div>
        <div>
          <p className="font-semibold text-lg">Flex.To.Do</p>
          <p className="text-gray-500">Easy todos with friends</p>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-darkBlue-500 text-2xl font-bold">Summary</p>
        {SideBarItems?.map((item) => (
          <div
            key={item.title}
            className="flex items-center mt-5 gap-2 justify-between"
          >
            <div className="flex items-center">
              <div className="flex gap-1 text-darkBlue-500">
                <p>{item.icon}</p>
                <p>{item.title}</p>
              </div>
            </div>
            <div className="bg-gray-200 w-6 h-6 rounded-lg flex justify-center items-center text-sm">
              {item.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
