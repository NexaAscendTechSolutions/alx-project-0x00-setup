import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className,
}) => {
  const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const shapeClasses: Record<NonNullable<ButtonProps["shape"]>, string> = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  return (
    <button
      className={`bg-blue-500 text-white font-medium hover:bg-blue-600 transition 
                  ${sizeClasses[size]} ${shapeClasses[shape]} ${
        className || ""
      }`}>
      {title}
    </button>
  );
};

export default Button;
