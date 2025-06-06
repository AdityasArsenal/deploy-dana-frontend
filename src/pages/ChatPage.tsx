import React, { useState, useEffect } from 'react';
import { ChatUI } from '@/components/ChatUII';
import { Message } from '@/components/ui/ChatMessage';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Sidebar } from '@/components/ui/Sidebar';

const ChatPage: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [conversationId, setConversationId] = useState<string | null>(null);
    const [currentPdfUrl, setCurrentPdfUrl] = useState<string | null>(null);

    const handleResetSession = () => {
        setMessages([]);
        setConversationId(null);
        setCurrentPdfUrl(null);
        setIsLoading(false); // Also reset loading state if any
        // Optionally, add a greeting message after reset
        // setMessages([
        //     {
        //         id: 'initial-greeting-reset',
        //         text: 'Session reset. How can I help you?',
        //         sender: 'ai',
        //         timestamp: new Date(),
        //     },
        // ]);
    };

    const handlePageRefresh = () => {
        window.location.reload();
    };

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
            const payload: { user_prompt: string; conversation_id?: string } = {
                user_prompt: text,
            };
            if (conversationId) {
                payload.conversation_id = conversationId;
            }

            const response = await fetch('https://esgai-backend-ewdvhyhde7gzcdcn.southindia-01.azurewebsites.net/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`API request failed with status ${response.status} - ${errorText}`);
            }

            const data = await response.json();

            const aiResponseMessage: Message = {
                id: `ai-${Date.now()}`,
                text: data.response || "Sorry, I couldn't get a proper response.",
                sender: 'ai',
                timestamp: new Date(),
                sources: data.sources || [],
                pdfUrl: data.agents_conv_pdf_url || null
            };
            setMessages((prevMessages) => [...prevMessages, aiResponseMessage]);

            if (data.agents_conv_pdf_url) {
                setCurrentPdfUrl(data.agents_conv_pdf_url);
            }

            if (data.conversation_id) {
                setConversationId(data.conversation_id);
            }

        } catch (error) {
            console.error('Error fetching AI response:', error);
            const errorResponse: Message = {
                id: `ai-error-${Date.now()}`,
                text: (error instanceof Error) ? error.message : 'Sorry, something went wrong while fetching the response. Please try again.',
                sender: 'ai',
                timestamp: new Date(),
            };
            setMessages((prevMessages) => [...prevMessages, errorResponse]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
            <div style={{ flexShrink: 0, backgroundColor: 'black', borderBottom: '1px solid #4A4A4A' }}>
                <Sidebar pdfUrl={currentPdfUrl} onResetSession={handleResetSession} onRefreshPage={handlePageRefresh} />
            </div>

            <div style={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
                <PanelGroup direction="horizontal">
                    <Panel defaultSize={30} minSize={30} maxSize={70}>
                        <ChatUI
                            messages={messages}
                            isLoading={isLoading}
                            onSend={handleSendMessage}
                        />
                    </Panel>
                    <PanelResizeHandle style={{ width: '4px', background: '#ccc' }} />
                    <Panel defaultSize={70} minSize={30} maxSize={70}>
                        <iframe
                            title="The loaded one "
                            width="100%"
                            height="100%"

                            src="https://app.powerbi.com/view?r=eyJrIjoiNWI1M2MyZDgtZDJmNi00YmExLWJlODItY2VlOGQzM2Q0ZTQ2IiwidCI6ImI0MzVhMDdkLTE0OTgtNDg1NC05ZTMyLTdjZjY4MmJlOGNmMyJ9"
                            frameBorder="0"
                            allowFullScreen={true}
                            style={{ border: 'none' }}
                        ></iframe>
                    </Panel>
                </PanelGroup>
            </div>
        </div>
    );
};

export default ChatPage;