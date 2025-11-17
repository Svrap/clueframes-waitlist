import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full px-4 py-3 rounded-full bg-white text-gray-900 placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg ${className}`}
      {...props}
    />
  );
}
