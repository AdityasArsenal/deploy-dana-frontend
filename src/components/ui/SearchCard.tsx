import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Search, X, Settings, Globe, Clipboard, Mic } from 'lucide-react';

interface SearchCardProps {
    onSend: (text: string) => void;
}

export function SearchCard({ onSend }: SearchCardProps) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSend(query.trim());
            setQuery(''); // Clear input after sending
        }
    };

    return (
        <Card className="mb-4 font-sans shadow-2xl drop-shadow-2xl shadow-pulse">
            <CardContent className="p-0">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center rounded-t-2xl overflow-hidden">
                        <div className="flex-1 relative">
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <Search size={18} />
                            </div>
                            <Input
                                placeholder="Ask anything..."
                                className="pl-10 text-base rounded-none border-none bg-transparent text-white placeholder-gray-400 font-sans"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex px-3 py-2 border-t border-gray-800 justify-between">
                        <div className="flex items-center gap-2">
                            <Button type="submit" variant="secondary" size="sm" className="px-4 py-1 font-sans">
                                <Search size={16} className="mr-1" />
                                Send
                            </Button>
                            {/* Optional: Keep or remove additional buttons */}
                            <Button type="button" variant="ghost" size="sm" className="px-4 py-1 font-sans">
                                <X size={14} className="mr-1" />
                                Research
                            </Button>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                                <Settings size={16} />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Globe size={16} />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Clipboard size={16} />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Mic size={16} />
                            </Button>
                            {/* Custom icon button */}
                            <Button variant="default" size="icon" className="text-white">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M2 12h2M14 2v2M10 2v6M7 22h10M12 22v-4M22 12h-2M19 15l-3 3M19 9l-3-3M5 9l3-3M5 15l3 3"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}