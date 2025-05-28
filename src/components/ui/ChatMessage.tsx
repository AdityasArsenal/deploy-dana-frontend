import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';

export interface MessageSource {
    title: string;
    url: string;
}

export interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
    sources?: MessageSource[];
    timestamp?: Date;
}

interface ChatMessageProps {
    message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    const isUser = message.sender === 'user';

    if (isUser) {
        return (
            <div className="border-b border-gray-200 dark:border-gray-800 pb-3 mb-4 w-full font-sans">
                <div className="text-xs md:text-sm font-medium text-white">
                    {message.text}
                </div>
            </div>
        );
    }

    return (
        <div className="article-body mb-10 w-full font-sans text-sm">
            <div className="prose dark:prose-invert w-full prose-sm">
                {message.text}
            </div>

            {message.sources && message.sources.length > 0 && (
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                    <p className="font-semibold text-xs text-gray-400 mb-1.5">Sources:</p>
                    <ul className="space-y-0.5">
                        {message.sources.map((source, index) => (
                            <li key={index} className="text-xs">
                                <a
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline"
                                >
                                    {source.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ChatMessage; 