import React, { useEffect, useRef } from 'react';
import { Sidebar } from '@/components/ui/Sidebar'; // Reuse from PerplexityUI
// import { Footer } from '@/components/ui/Footer';   // Reuse from PerplexityUI
import ChatHistory from '@/components/ui/ChatHistory';
import { SearchCard } from '@/components/ui/SearchCard'; // We'll modify this next
import { Message } from '@/components/ui/ChatMessage';

interface ChatUIProps {
    messages: Message[];
    isLoading: boolean;
    onSend: (text: string) => void;
}

export function ChatUI({ messages, isLoading, onSend }: ChatUIProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom whenever messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    return (
        <div className="flex h-screen w-full bg-black text-white font-sans">
            {/* Sidebar on the left */}
            <Sidebar />
            {/* Main content area */}
            <div className="flex-1 flex flex-col">
                {/* Chat content with fixed layout */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Chat history with overflow scrolling */}
                    <div className="flex-1 overflow-y-auto">
                        <ChatHistory messages={messages} isLoading={isLoading} />
                        <div ref={messagesEndRef} />
                    </div>
                    {/* Input area fixed at the bottom */}
                    <div className="p-4 bg-black">
                        <SearchCard onSend={onSend} />
                    </div>
                </div>
                {/* Footer at the bottom */}
                {/* <Footer /> */}
            </div>
        </div>
    );
}