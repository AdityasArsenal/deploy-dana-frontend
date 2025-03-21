import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "secondary";
  children: React.ReactNode;
}

export const Button = ({
  size = "md",
  variant = "default",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  let baseClass = "font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50";

  // Adjust size
  if (size === "sm") {
    baseClass += " text-sm px-3 py-1.5";
  } else if (size === "lg") {
    baseClass += " text-lg px-6 py-3";
  } else {
    baseClass += " text-base px-4 py-2";
  }

  // Adjust variant
  if (variant === "outline") {
    baseClass += " border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary";
  } else if (variant === "secondary") {
    baseClass += " bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary";
  } else {
    baseClass += " bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary shadow-md hover:shadow-lg";
  }

  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;