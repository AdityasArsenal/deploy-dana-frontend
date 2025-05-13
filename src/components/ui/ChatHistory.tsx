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
        <div className="w-full px-8 font-sans mt-10">
            {messages.length === 0 ? (
                <div className="text-center text-gray-400 py-20 font-sans">
                    <h2 className="text-2xl font-semibold mb-2">Welcome to the Conversation</h2>
                    <p>Start by typing a message below</p>
                </div>
            ) : (
                <div className="w-full font-sans">
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
