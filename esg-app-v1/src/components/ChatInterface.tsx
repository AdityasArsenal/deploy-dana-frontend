import React, { useState } from 'react';
import { Brain } from 'lucide-react';

const ChatInterface: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col h-[460px] w-[900px] bg-white rounded-xl shadow-xl border border-gray-200">
      {/* Chat header */}
      <div className="bg-emerald-600 text-white p-2 rounded-t-xl flex items-center gap-3">
        <img src="\ai\image\icon.png" alt="ESGai Logo" className="w-10 h-10 rounded-lg" />
        <h3 className="font-semibold">ESGai Demo ()</h3>
      </div>
      
      {/* Embedded chat interface */}
      <div className="flex-1 w-full h-full relative rounded-b-xl overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
          </div>
        )}
        <iframe 
          src="https://dana-test-v-qif0.onrender.com/"
          className="w-full h-full border-0"
          title="ESGai Chat Interface"
          allow="microphone"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

export default ChatInterface;