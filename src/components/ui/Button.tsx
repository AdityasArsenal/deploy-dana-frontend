import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className = "",
    variant = "default",
    size = "default",
    asChild = false,
    ...props
  }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50";

    const variantStyles = {
      default: "bg-teal-500 text-white shadow hover:bg-teal-600",
      destructive: "bg-red-500 text-white shadow-sm hover:bg-red-600",
      outline: "border border-gray-600 bg-transparent shadow-sm hover:bg-gray-800 hover:text-gray-200",
      secondary: "bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-700",
      ghost: "hover:bg-gray-800 hover:text-gray-200 text-gray-400",
      link: "text-gray-400 hover:text-gray-200 underline-offset-4",
    };

    const sizeStyles = {
      default: "h-9 px-4 py-2",
      sm: "h-8 px-3 text-xs",
      lg: "h-10 px-8",
      icon: "h-8 w-8",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    const Comp = asChild ? "span" : "button";

    return (
      <Comp
        className={combinedClassName}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };