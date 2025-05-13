import React from 'react';

const TypingLoader: React.FC = () => {
    return (
        <div className="inline-flex items-center space-x-2 py-2 text-gray-500">
            <span className="text-sm italic">AI assistant is writing</span>
            <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: '300ms' }}></div>
            </div>
        </div>
    );
};

export default TypingLoader; 