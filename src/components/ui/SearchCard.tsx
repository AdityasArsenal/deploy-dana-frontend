import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Search, X, Settings, Globe, Clipboard, Mic, AArrowUp, ArrowUp } from 'lucide-react';

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
        <Card className="mb-3 font-sans shadow-xl">
            <CardContent className="p-0">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center rounded-t-lg overflow-hidden">
                        <div className="flex-1 relative">
                            <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <Search size={15} />
                            </div>
                            <Input
                                placeholder="Ask anything..."
                                className="pl-8 text-sm rounded-none border-none bg-transparent text-white placeholder-gray-400 font-sans h-10"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex px-2 py-1.5 border-t border-gray-800 justify-between">
                        <div className="flex items-center gap-1.5">
                            <Button variant="ghost" size="sm">
                                <Settings size={14} />
                            </Button>
                            <Button variant="ghost" size="sm">
                                <Globe size={14} />
                            </Button>
                            <Button variant="ghost" size="sm">
                                <Clipboard size={14} />
                            </Button>
                            <Button variant="ghost" size="sm">
                                <Mic size={14} />
                            </Button>
                            <Button variant="ghost" size="sm">
                                <ArrowUp size={14} />
                            </Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}