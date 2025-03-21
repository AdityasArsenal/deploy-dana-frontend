import React from 'react';
import { Brain } from 'lucide-react';

const ChatInterface: React.FC = () => {
  return (
    <div className="flex flex-col h-[600px] bg-white rounded-xl shadow-xl border border-gray-200">
      {/* Chat header */}
      <div className="bg-emerald-600 text-white p-4 rounded-t-xl flex items-center gap-3">
        <Brain className="w-6 h-6" />
        <h3 className="font-semibold">ESGai Research Assistant</h3>
      </div>
      
      {/* Embedded chat interface */}
      <div className="flex-1 w-full h-full">
        <iframe 
          src="https://499a-103-211-17-197.ngrok-free.app"
          className="w-full h-full border-0"
          title="ESGai Chat Interface"
          allow="microphone"
        />
      </div>
    </div>
  );
};

export default ChatInterface;