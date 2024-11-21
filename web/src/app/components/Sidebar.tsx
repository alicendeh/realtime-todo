import React from "react";
import { BiLogoAlgolia, BiDotsHorizontal, BiPlus } from "react-icons/bi";
import { Todo } from "./TodoItem";
import { motion } from "framer-motion";

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

  // Animation variants for items sliding in
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div className="h-screen bg-[#F9F9F9] px-4 py-5 text-darkBlue-500">
      {/* Header Section */}
      <motion.div
        className="flex items-center space-x-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="bg-slate-950 w-14 h-14 rounded-lg text-white flex justify-center items-center">
          <BiLogoAlgolia size={40} />
        </div>
        <div>
          <p className="font-semibold text-lg">Flex.To.Do</p>
          <p className="text-gray-500">Easy todos with friends</p>
        </div>
      </motion.div>

      {/* Summary Section */}
      <motion.div
        className="mt-10"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <p className="text-darkBlue-500 text-2xl font-bold">Summary</p>
        {SideBarItems.map((item, index) => (
          <motion.div
            key={item.title}
            className={`flex items-center mt-5 gap-2 justify-between px-2 ${
              index === 0 && `bg-gray-200 rounded-lg p-2`
            }`}
            custom={index} // Pass index to stagger animation
            variants={itemVariants}
          >
            <div className="flex items-center">
              <div className="flex gap-1 text-darkBlue-500">
                <p>{item.icon}</p>
                <p>{item.title}</p>
              </div>
            </div>
            <div
              className={`${
                index === 0 ? "bg-white" : "bg-gray-200"
              } w-6 h-6 rounded-lg flex justify-center items-center text-sm`}
            >
              {item.count}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Coming Soon Section */}
      <motion.div
        className="mt-40"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <p className="text-darkBlue-500 text-2xl font-bold">Coming soon</p>
        {upcomingFeatures.map((item, index) => (
          <motion.div
            key={item.title}
            className="flex items-center mt-5 gap-2 justify-between"
            custom={index} // Pass index for stagger
            variants={itemVariants}
          >
            <div className="flex items-center">
              <div className="flex gap-1 text-darkBlue-500 items-center">
                <motion.div
                  className={`w-5 h-5 rounded-lg border-2 ${item.color}`}
                />
                <p>{item.title}</p>
              </div>
            </div>
            <BiDotsHorizontal color="gray" />
          </motion.div>
        ))}
      </motion.div>

      {/* Suggest Features */}
      <motion.div
        className="flex mt-6 items-center"
        whileHover={{ scale: 1.1 }}
      >
        <BiPlus size={20} /> <p>Suggest new features</p>
      </motion.div>
    </div>
  );
};

export default SideBar;

const upcomingFeatures = [
  { title: "Live tracking", color: "border-[#D48EFC]" },
  { title: "All participants", color: "border-[#1F85F8]" },
  { title: "Identification", color: "border-[#24B7A9]" },
];
