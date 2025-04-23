import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

interface ChatResponse {
    response: string;
    conversation_id: string;
    agents_conv_pdf_url?: string;
}

const ChatUI: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [conversationId, setConversationId] = useState<string | null>(null);
    const [pdfUrls, setPdfUrls] = useState<Record<number, string>>({});
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Backend URL (same as in ff.py)
    const WEBHOOK_URL = "https://deploy-dana-production.up.railway.app/chat";

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!input.trim()) return;

        const userMessage = input;
        const messageIndex = messages.length;

        // Add user message to chat
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setInput('');
        setIsLoading(true);

        // Build payload including conversation_id if available
        const payload: any = { user_prompt: userMessage };
        if (conversationId) {
            payload.conversation_id = conversationId;
        }

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const data: ChatResponse = await response.json();

                // Add assistant response to chat
                setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);

                // Update conversation ID
                if (data.conversation_id) {
                    setConversationId(data.conversation_id);
                }

                // Store PDF URL if available
                if (data.agents_conv_pdf_url) {
                    setPdfUrls(prev => ({ ...prev, [messageIndex]: data.agents_conv_pdf_url! }));
                }
            } else {
                const errorText = await response.text();
                setMessages(prev => [...prev,
                { role: 'assistant', content: `Error: ${response.status} - ${errorText}` }
                ]);
            }
        } catch (error) {
            setMessages(prev => [...prev,
            { role: 'assistant', content: `Network error: ${error}` }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[460px] w-[900px] bg-white rounded-xl shadow-xl border border-gray-200">
            {/* Chat header */}
            <div className="bg-emerald-600 text-white p-2 rounded-t-xl flex items-center gap-3">
                <img src="/ai/image/icon.png" alt="ESGai Logo" className="w-10 h-10 rounded-lg" />
                <h3 className="font-semibold">ESGai Demo (HPCL and IOCL companies only)</h3>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg ${message.role === 'user'
                            ? 'bg-emerald-100 text-emerald-900'
                            : 'bg-gray-100 text-gray-900'
                            }`}>
                            <div className="whitespace-pre-wrap">{message.content}</div>

                            {/* Show PDF link if available */}
                            {message.role === 'user' && pdfUrls[index] && (
                                <a
                                    href={pdfUrls[index]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-600 hover:underline mt-2 block"
                                >
                                    researched info⬇️
                                </a>
                            )}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Loading indicator */}
            {isLoading && (
                <div className="px-4 py-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-emerald-600 mx-auto"></div>
                </div>
            )}

            {/* Input form */}
            <form onSubmit={handleSubmit} className="p-2 border-t border-gray-200 flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your message here"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-emerald-600 text-white rounded-lg p-2 hover:bg-emerald-700 disabled:opacity-50"
                >
                    <Send size={20} />
                </button>
            </form>
        </div>
    );
};

export default ChatUI; 