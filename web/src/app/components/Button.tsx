import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  className?: string;
};

const Button = ({ title, className, ...props }: ButtonProps) => {
  return (
    <div>
      <button
        className={`px-4 py-2 text-white rounded-lg transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 active:scale-95 ${
          className || ""
        }`}
        {...props}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
