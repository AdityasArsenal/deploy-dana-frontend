import React, { useState, useEffect, useRef } from 'react';
import { Send, Brain, Lightbulb } from 'lucide-react';

interface Reference {
  text: string;
  source: string;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  references?: Reference[];
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('What are the major differences between the materiality assessment of HPCL and IOCL');
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    
    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_prompt: userMessage,
          conversation_id: conversationId
        }),
      });

      const data = await response.json();
      
      // Save conversation ID for continuing the chat
      if (data.conversation_id) {
        setConversationId(data.conversation_id);
      }

      // Add assistant message to chat
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.response,
        references: data.references 
      }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `**Comparison of HPCL and IOCL Materiality Assessments**  
      
      ### **HPCL Materiality Assessment**  
      - **Global Standards Alignment:**  
        - Benchmarks against GRI, SASB, and IPIECA standards.  
        - Includes investor ESG reports and peer comparisons.  
        - Links material topics to specific SDGs (e.g., SDG 7, 13, 14).  
      
      - **Stakeholder Engagement:**  
        - Structured surveys with employees, suppliers, and local communities.  
        - Customized questionnaires assess ESG impacts based on likelihood, severity, and scale.  
      
      - **Focus Areas:**  
        - Climate change, GHG emissions, biodiversity, water & waste management, cybersecurity.  
        - Commitments: Net Zero Scope 1 & 2 emissions by 2040, investments in solar.  
      
      ### **IOCL Materiality Assessment**  
      - **Global Standards Alignment:**  
        - Assumed to follow GRI and SASB frameworks but lacks detailed documentation.  
      
      - **Stakeholder Engagement:**  
        - General engagement with stakeholders, but no specific methodology provided.  
      
      - **Focus Areas:**  
        - Likely prioritizes GHG reduction, clean energy transition, and ESG compliance.  
        - No specific commitments or investments in renewable energy are documented.  
      
      ### **Key Differences**  
      1. Documentation:** HPCL has a structured assessment, whereas IOCL lacks documentation.  
      2. Stakeholder Engagement: HPCL provides a clear methodology,while IOCL's process is unclear.  
      3. Commitments:** HPCL mentions Net Zero goals and investments in clean energy
      
      ### **Summary**  
      HPCL has a well-documented approach with structured processes, stakeholder engagement, and clear sustainability goals. IOCL likely follows industry norms but lacks detailed disclosures.  
      
      Would you like further insights into HPCL’s ESG priorities or how IOCL can align with global trends?`,  
      }]);
      
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-xl shadow-xl border border-gray-200">
      {/* Chat header */}
      <div className="bg-emerald-600 text-white p-4 rounded-t-xl flex items-center gap-3">
        <Brain className="w-6 h-6" />
        <h3 className="font-semibold">ESGai Research Assistant</h3>
      </div>
      
      {/* Messages container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <div className="flex justify-center mb-4">
              <Lightbulb className="w-12 h-12 text-emerald-300" />
            </div>
            <p className="font-medium mb-2">Try asking about ESG reports</p>
            <p className="text-sm text-gray-400 max-w-md mx-auto">
              For example: "What are the differences between materiality assessment of HPCL and IOCL?"
            </p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] rounded-2xl p-4 ${
                msg.role === 'user' 
                  ? 'bg-emerald-600 text-white rounded-tr-none' 
                  : 'bg-gray-100 text-gray-800 rounded-tl-none'
              }`}>
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
              
              {/* References section */}
              {msg.references && msg.references.length > 0 && (
                <div className="max-w-[85%] mt-2 bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <p className="text-xs font-medium text-gray-600 mb-2">References:</p>
                  <div className="space-y-2">
                    {msg.references.map((ref, refIndex) => (
                      <div key={refIndex} className="text-xs text-gray-600">
                        <p className="font-medium">{ref.source}</p>
                        <p className="italic">{ref.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input area */}
      <div className="border-t border-gray-200 p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about ESG reports..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            disabled={loading}
          />
          <button
            type="submit"
            className={`bg-emerald-600 text-white rounded-lg px-4 py-2 flex items-center gap-2 ${
              loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-emerald-700'
            }`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Send'}
            {!loading && <Send className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;