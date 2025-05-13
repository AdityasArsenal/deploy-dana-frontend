import React, { forwardRef } from 'react';

interface ScrollAreaProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
}

const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
    ({ children, className = '', ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`overflow-auto ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

ScrollArea.displayName = 'ScrollArea';

export { ScrollArea }; 