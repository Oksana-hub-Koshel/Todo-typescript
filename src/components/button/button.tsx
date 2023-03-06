import React from "react";

interface buttonProps {
  children?: string;
  onClick?: () => void;
}

const Button = ({ onClick, children }: buttonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-600 text-orange-100 text-white px-6 rounded hover: backdrop-opacity-100 py-1"
    >
      {children}
    </button>
  );
};

export default Button;
