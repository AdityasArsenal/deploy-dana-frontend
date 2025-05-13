import React, { useState, useEffect } from 'react';
import { ChatUI } from '@/components/ChatUII';
import { Message } from '@/components/ui/ChatMessage';

const ChatPage: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     // Initial greeting from AI
    //     setMessages([
    //         {
    //             id: 'initial-greeting',
    //             text: 'Hello! How can I help you with ESG insights today?',
    //             sender: 'ai',
    //             timestamp: new Date(),
    //         },
    //     ]);
    // }, []);

    const handleSendMessage = async (text: string) => {
        const userMessage: Message = {
            id: `user-${Date.now()}`,
            text,
            sender: 'user',
            timestamp: new Date(),
        };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setIsLoading(true);

        try {
            // Simulated AI response (replace with actual backend call as needed)
            setTimeout(() => {
                const aiResponse: Message = {
                    id: `ai-${Date.now()}`,
                    text: `The Lucide React icons weren't getting bigger when you increased the number in the size={} prop because the Button component has fixed dimensions that were constraining the icons.
In Lucide React, the size prop sets the default width and height of the icon, but when an icon is placed inside a component with fixed dimensions or CSS constraints (like the Button component), those parent constraints can override the icon's size.
I fixed it by:
Removing the size={} prop and using Tailwind's width and height utility classes (h-6 w-6) instead
This approach directly applies CSS classes to the SVG elements, which takes precedence over any size constraints from the parent Button
The h-6 w-6 classes set both height and width to 1.5rem (24px), making the icons larger. You can adjust these values (h-7 w-7, h-8 w-8, etc.) to make them even bigger if needed.
: "${text}".`,
                    sender: 'ai',
                    timestamp: new Date(),
                    sources: [
                        { title: 'Example Source', url: 'https://example.com' },
                    ],
                };
                setMessages((prevMessages) => [...prevMessages, aiResponse]);
                setIsLoading(false);
            }, 1500 + Math.random() * 1500);
        } catch (error) {
            console.error('Error fetching AI response:', error);
            const errorResponse: Message = {
                id: `ai-error-${Date.now()}`,
                text: 'Sorry, something went wrong. Please try again.',
                sender: 'ai',
                timestamp: new Date(),
            };
            setMessages((prevMessages) => [...prevMessages, errorResponse]);
            setIsLoading(false);
        }
    };

    return (
        <ChatUI
            messages={messages}
            isLoading={isLoading}
            onSend={handleSendMessage}
        />
    );
};

export default ChatPage;