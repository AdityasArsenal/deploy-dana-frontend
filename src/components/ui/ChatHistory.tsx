// src/components/chat/ChatHistory.tsx
import React from 'react';
import ChatMessage, { Message } from './ChatMessage';
import TypingLoader from './TypingLoader';

interface ChatHistoryProps {
    messages: Message[];
    isLoading: boolean;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages, isLoading }) => {
    return (
        <div className="w-full h-full font-sans text-xs">
            {messages.length === 0 ? (
                <div className="text-center text-gray-400 py-20 font-sans px-4">
                    <h2 className="text-lg font-semibold mb-2">Welcome to the Conversation</h2>
                    <p className="text-xs">Start by typing a message below</p>
                </div>
            ) : (
                <div className="w-full h-full font-sans overflow-y-auto px-4 py-2 text-xs">
                    {messages.map((msg) => (
                        <ChatMessage key={msg.id} message={msg} />
                    ))}
                    {isLoading && (
                        <div className="mt-4">
                            <TypingLoader />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChatHistory;
