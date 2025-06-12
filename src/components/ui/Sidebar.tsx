import { useState } from 'react';
import { Button } from './Button';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';
import { Search, Settings, Database, Leaf, Plus, Download, MessageSquare, Linkedin } from 'lucide-react';
import { Toast } from './Toast';

interface SidebarProps {
    pdfUrl?: string | null;
    onResetSession?: () => void;
    onRefreshPage?: () => void;
}

export function Sidebar({ pdfUrl, onResetSession, onRefreshPage }: SidebarProps) {
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    const [feedbackText, setFeedbackText] = useState('');
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const handleFeedbackClick = () => {
        setShowFeedbackForm(!showFeedbackForm);
    };

    const handleSubmitFeedback = async () => {
        if (feedbackText.trim() !== '') {
            try {
                const response = await fetch('https://esgai-backend-ewdvhyhde7gzcdcn.southindia-01.azurewebsites.net/feedback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ feedback: feedbackText }),
                });
                if (response.ok) {
                    setToast({ message: 'Feedback submitted successfully!', type: 'success' });
                } else {
                    setToast({ message: 'Failed to submit feedback. Please try again.', type: 'error' });
                }
            } catch (error) {
                console.error('Error submitting feedback:', error);
                setToast({ message: 'An error occurred while submitting feedback.', type: 'error' });
            }
            setFeedbackText('');
            setShowFeedbackForm(false);
        }
    };

    const handleChatWithUs = () => {
        window.open('https://www.linkedin.com/company/106447186', '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
            <div className="flex items-center justify-between w-full h-14 px-5 border-b border-gray-800 bg-black font-sans">
                {/* Left Section: Logo and main navigation icons */}
                <div className="flex-1 min-w-0 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div className="flex items-center gap-1.5">
                    <Button
                        variant="ghost"
                        className="w-auto h-auto flex items-center justify-center text-gray-400 p-1.5"
                        onClick={onRefreshPage}
                    >
                        <Leaf strokeWidth={2} size={25} color="green" />
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-auto h-auto rounded-md text-gray-400 hover:bg-gray-700 flex items-center justify-center p-1.5"
                        onClick={onResetSession}
                    >
                        <Plus strokeWidth={3} size={23} />
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-auto h-auto flex items-center justify-center px-2 py-1.5 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md"
                    >
                        <Search strokeWidth={2} size={23} />
                        <span className="text-xs font-medium ml-1.5">Home</span>
                    </Button>
                    <div className="relative group inline-block">
                        <Button
                            variant="ghost"
                            className="w-auto h-auto flex items-center justify-center px-2 py-1.5 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md"
                        >
                            <Database strokeWidth={2} size={23} />
                            <span className="text-xs font-medium ml-1.5">Sectors</span>
                        </Button>
                        <span className="absolute -right-1/2 transform -translate-x-1/2 top-full mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            Coming soon
                        </span>
                    </div>

                    <div className="relative group inline-block">
                        <Button
                            variant="ghost"
                            className="w-auto h-auto flex items-center justify-center px-2 py-1.5 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md"
                        >
                            <Settings strokeWidth={2} size={23} />
                            <span className="text-xs font-medium ml-1.5">Settings</span>
                        </Button>
                        <span className="absolute -right-1/2 transform -translate-x-1/2 top-full mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            Coming soon
                        </span>
                    </div>

                    {/* Chat with us Button */}
                    <div className="relative group inline-block">
                        <Button
                            variant="ghost"
                            onClick={handleChatWithUs}
                            className="w-auto h-auto flex items-center justify-center px-2 py-1.5 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md"
                        >
                            <Linkedin strokeWidth={2} size={23} />
                            <span className="text-xs font-medium py-2 pt-2.5">Chat with us</span>
                        </Button>
                    </div>

                    {/* Feedback Button with Glow */}
                    <div className="relative group inline-block">
                        <Button
                            variant="ghost"
                            onClick={handleFeedbackClick}
                            className="w-auto h-auto flex items-center justify-center px-2 py-1.5 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md animate-pulse-glow"
                        >
                            <MessageSquare strokeWidth={2} size={23} />
                            <span className="text-xs font-medium ml-1.5">Feedback</span>
                        </Button>
                        {showFeedbackForm && (
                            <div className="absolute top-full mt-2 p-4 bg-gray-800 rounded-md shadow-lg" style={{ zIndex: 1001, width: '300px' }}>
                                <textarea
                                    value={feedbackText}
                                    onChange={(e) => setFeedbackText(e.target.value)}
                                    placeholder="Enter your feedback"
                                    className="bg-gray-700 text-white p-2 rounded-md w-full"
                                    rows={4}
                                />
                                <Button onClick={handleSubmitFeedback} className="mt-2 w-full">Submit</Button>
                            </div>
                        )}
                    </div>
                </div>
                </div>

                {/* Right Section: Avatar and Download-like button */}
                <div className="flex items-center gap-2 pl-4">
                    {pdfUrl ? (
                        <a
                            href={pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="w-auto h-auto text-gray-400 flex items-center justify-center p-1.5 hover:bg-gray-700 rounded-md"
                        >
                            <Download strokeWidth={2} size={23} />
                        </a>
                    ) : (
                        <Button
                            variant="ghost"
                            className="w-auto h-auto text-gray-400 flex items-center justify-center p-1.5 hover:bg-gray-700 rounded-md opacity-50 cursor-not-allowed"
                            disabled
                        >
                            <Download strokeWidth={2} size={23} />
                        </Button>
                    )}
                    <Avatar className="h-7 w-7">
                        <AvatarImage src="/team/aditya.jpg" alt="Profile" />
                        <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </>
    );
}