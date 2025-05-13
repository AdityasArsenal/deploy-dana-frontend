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
            <div className="border-b border-gray-200 dark:border-gray-800 pb-4 mb-6 w-full font-sans">
                <div className="text-xl md:text-2xl font-bold text-white">
                    {message.text}
                </div>
            </div>
        );
    }

    return (
        <div className="article-body mb-12 w-full font-sans">
            <div className="prose dark:prose-invert w-full">
                <p className="text-base leading-relaxed text-white whitespace-pre-wrap">
                    {message.text}
                </p>
            </div>

            {message.sources && message.sources.length > 0 && (
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <p className="font-semibold text-sm text-gray-400 mb-2">Sources:</p>
                    <ul className="space-y-1">
                        {message.sources.map((source, index) => (
                            <li key={index} className="text-sm">
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