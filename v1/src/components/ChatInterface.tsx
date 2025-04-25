import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { Send, Loader2 } from 'lucide-react'; // Using lucide-react for icons

// Define the structure for a chat message
interface Message {
  role: 'user' | 'assistant';
  content: string;
  pdfUrl?: string; // Optional PDF URL for user messages
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null); // Ref for scrolling

  const backendUrl = "https://esgai-backend-ewdvhyhde7gzcdcn.southindia-01.azurewebsites.net/chat"; // Changed back to deployed backend URL

  // Scroll to bottom effect
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInput.trim()) return; // Don't send empty messages

    const newUserMessage: Message = { role: 'user', content: userInput };
    const currentUserInput = userInput; // Store before clearing
    const userMessageIndex = messages.length; // Index for potential PDF URL

    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setUserInput('');
    setIsLoading(true);
    setError(null);

    try {
      const payload: { user_prompt: string; conversation_id?: string } = {
        user_prompt: currentUserInput,
      };
      if (conversationId) {
        payload.conversation_id = conversationId;
      }

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} - ${await response.text()}`);
      }

      const jsonResponse = await response.json();

      const aiMessageContent = jsonResponse.response || "Sorry, no response was generated.";
      const newConversationId = jsonResponse.conversation_id || null;
      const pdfUrl = jsonResponse.agents_conv_pdf_url || null;

      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        // Add PDF URL to the specific user message if available
        if (pdfUrl && updatedMessages[userMessageIndex]?.role === 'user') {
          updatedMessages[userMessageIndex] = { ...updatedMessages[userMessageIndex], pdfUrl: pdfUrl };
        }
        // Add the assistant's response
        updatedMessages.push({ role: 'assistant', content: aiMessageContent });
        return updatedMessages;
      });


      setConversationId(newConversationId);

    } catch (err: any) {
      setError(err.message || "An error occurred while fetching the response.");
      // Optionally remove the user message or add an error indicator
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[460px] w-[900px] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
      {/* Chat header */}
      <div className="bg-emerald-600 text-white p-2 flex items-center gap-3 flex-shrink-0">
        <img src="/ai/image/icon.png" alt="ESGai Logo" className="w-10 h-10 rounded-lg" />
        <h3 className="font-semibold">ESGai Demo (HPCL and IOCL companies only)</h3>
      </div>

      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 rounded-lg max-w-[70%] ${message.role === 'user' ? 'bg-emerald-100 text-emerald-900' : 'bg-gray-200 text-gray-800'}`}>
              <p className="whitespace-pre-wrap">{message.content}</p>
              {message.role === 'user' && message.pdfUrl && (
                <a
                  href={message.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline mt-1 block"
                >
                  researched info⬇️
                </a>
              )}
            </div>
          </div>
        ))}
        {/* Loader */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="p-3 rounded-lg bg-gray-200 text-gray-800">
              <Loader2 className="h-5 w-5 animate-spin text-emerald-600" />
            </div>
          </div>
        )}
        {/* Error message */}
        {error && (
          <div className="flex justify-start">
            <div className="p-3 rounded-lg bg-red-100 text-red-700 max-w-[70%]">
              <p className="font-semibold">Error:</p>
              <p className="whitespace-pre-wrap">{error}</p>
            </div>
          </div>
        )}
        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-gray-200 p-3 bg-white flex-shrink-0">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your message here"
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-md disabled:opacity-50 ${isLoading ? 'cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;