import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  className = "",
  disabled,
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg";
  
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 active:scale-95",
    secondary: "bg-white text-gray-900 hover:bg-gray-100 active:scale-95",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : ""
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
