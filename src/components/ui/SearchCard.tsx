import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Search, Globe, Clipboard, Mic, Plus, ArrowUp } from 'lucide-react';

// Extend the Window interface for SpeechRecognition
interface IWindow extends Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
}
declare var window: IWindow;

interface SearchCardProps {
    onSend: (text: string, file?: File) => void;
}

export function SearchCard({ onSend }: SearchCardProps) {
    const [query, setQuery] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [isRecording, setIsRecording] = useState(false);
    const recognitionRef = useRef<any | null>(null);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = 'en-US';

            recognitionRef.current.onresult = (event: any) => {
                const transcript = event.results[event.results.length - 1][0].transcript;
                setQuery(prevQuery => prevQuery + transcript);
                setIsRecording(false);
            };

            recognitionRef.current.onerror = (event: any) => {
                console.error('Speech recognition error', event.error);
                alert(`Speech recognition error: ${event.error}`);
                setIsRecording(false);
            };

            recognitionRef.current.onend = () => {
                if (isRecording) {
                    // Potentially restart or handle error, for now, just set isRecording to false
                    // setIsRecording(false);
                }
            };
        } else {
            console.warn('Speech Recognition API not supported in this browser.');
        }

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.abort();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [query]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim() || selectedFile) {
            onSend(query.trim(), selectedFile || undefined);
            setQuery('');
            setSelectedFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const allowedTypes = [
                'application/pdf',
                'application/vnd.ms-excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'image/jpeg',
                'image/png',
                'image/gif',
                'text/xml',
                'application/xml'
            ];
            if (allowedTypes.includes(file.type)) {
                setSelectedFile(file);
                console.log('File selected:', file.name);
            } else {
                alert('Invalid file type. Please select a PDF, Excel, image, or XML file.');
                setSelectedFile(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
            }
        }
    };

    const handlePlusClick = () => {
        fileInputRef.current?.click();
    };

    const handlePasteFromClipboard = async () => {
        if (navigator.clipboard && navigator.clipboard.readText) {
            try {
                const text = await navigator.clipboard.readText();
                setQuery(prevQuery => prevQuery + text);
            } catch (err) {
                console.error('Failed to read clipboard contents: ', err);
                alert('Failed to read from clipboard.');
            }
        } else {
            alert('Clipboard API not available in this browser.');
        }
    };

    const handleMicClick = () => {
        if (!recognitionRef.current) {
            alert('Speech Recognition API not supported or not initialized.');
            return;
        }

        if (isRecording) {
            recognitionRef.current.stop();
            setIsRecording(false);
        } else {
            try {
                recognitionRef.current.start();
                setIsRecording(true);
            } catch (error) {
                console.error("Error starting speech recognition: ", error);
                alert("Could not start microphone. Please check permissions and try again.");
                setIsRecording(false);
            }
        }
    };

    return (
        <Card className="mb-3 font-sans shadow-xl">
            <CardContent className="p-0">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col-reverse items-start rounded-t-lg overflow-hidden">
                        <div className="flex-1 relative w-full">
                            <div className="absolute left-2.5 top-3 text-gray-400 z-10">
                                <Search size={15} />
                            </div>
                            <textarea
                                ref={textareaRef}
                                placeholder="Ask anything..."
                                className="w-full pl-8 pr-3 py-2.5 text-sm border-none bg-transparent text-white placeholder-gray-400 font-sans resize-none overflow-y-auto min-h-[40px] max-h-[200px] focus:outline-none"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                rows={1}
                            />
                            {selectedFile && (
                                <div className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-300 bg-gray-700 px-2 py-0.5 rounded">
                                    {selectedFile.name}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex px-1.5 py-1.5 border-t border-gray-800">
                        <div className="flex items-center gap-0 w-full">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                                accept=".pdf,.xls,.xlsx,.jpeg,.jpg,.png,.gif,.xml"
                            />
                            <div className="relative group inline-block">
                                <Button variant="ghost" size="sm" type="button">
                                    <Plus size={14} />
                                </Button>
                                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                    coming soon
                                </span>
                            </div>
                            <div className="relative group inline-block">
                                <Button variant="ghost" size="sm" type="button">
                                    <Globe size={14} />
                                </Button>
                                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                    coming soon
                                </span>
                            </div>
                            <Button variant="ghost" size="sm" onClick={handlePasteFromClipboard} type="button">
                                <Clipboard size={14} />
                            </Button>
                            <div className="relative group inline-block">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    type="button"
                                    className={isRecording ? 'text-red-500' : ''}
                                >
                                    <Mic size={14} />
                                </Button>
                                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                    coming soon
                                </span>
                            </div>
                            <Button
                                className="ml-auto bg-green-600 text-white hover:bg-green-400 rounded-md hover:text-black-800 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                                variant="ghost"
                                size="sm"
                                type="submit"
                            >
                                <ArrowUp size={14} />
                            </Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
