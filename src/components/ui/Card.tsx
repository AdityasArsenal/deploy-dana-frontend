import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-2xl border border-gray-800 bg-gray-900 text-gray-100 shadow-xl ${className}`}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div ref={ref} className={`p-0 ${className}`} {...props} />
    );
  }
);
CardContent.displayName = "CardContent";

export { Card, CardContent };