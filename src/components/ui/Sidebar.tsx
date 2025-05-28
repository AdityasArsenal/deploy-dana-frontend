import { Button } from './Button';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';
import { Search, Settings, Database, Leaf, Plus, Download } from 'lucide-react';

interface SidebarProps {
    pdfUrl?: string | null;
    onResetSession?: () => void;
    onRefreshPage?: () => void;
}

export function Sidebar({ pdfUrl, onResetSession, onRefreshPage }: SidebarProps) {
    return (
        <div className="flex items-center justify-between w-full h-14 px-5 border-b border-gray-800 bg-black font-sans">
            {/* Left Section: Logo and main navigation icons */}
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
                    className="w-auto h-auto flex items-center justify-center px-2 py-1.5 text-gray-400 hover:bg-gray-700 rounded-md"
                >
                    <Search strokeWidth={2} size={23} />
                    <span className="text-xs font-medium ml-1.5">Home</span>
                </Button>
                <Button
                    variant="ghost"
                    className="w-auto h-auto flex items-center justify-center px-2 py-1.5 text-gray-400 hover:bg-gray-700 rounded-md"
                >
                    <Database strokeWidth={2} size={23} />
                    <span className="text-xs font-medium ml-1.5">Sectors</span>
                </Button>
                <Button
                    variant="ghost"
                    className="w-auto h-auto flex items-center justify-center px-2 py-1.5 text-gray-400 hover:bg-gray-700 rounded-md"
                >
                    <Settings strokeWidth={2} size={23} />
                    <span className="text-xs font-medium ml-1.5">Settings</span>
                </Button>
            </div>

            {/* Right Section: Avatar and Download-like button */}
            <div className="flex items-center gap-2">
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
                    <AvatarImage src="/ai/image/team/aditya.jpg" alt="Profile" />
                    <AvatarFallback>AD</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
}