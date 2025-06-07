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
                <div className="relative group inline-block">
                    <Button
                        variant="ghost"
                        className="w-auto h-auto flex items-center justify-center px-2 py-1.5 text-gray-400 hover:bg-gray-700 rounded-md"
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
                        className="w-auto h-auto flex items-center justify-center px-2 py-1.5 text-gray-400 hover:bg-gray-700 rounded-md"
                    >
                        <Settings strokeWidth={2} size={23} />
                        <span className="text-xs font-medium ml-1.5">Settings</span>
                    </Button>
                    <span className="absolute -right-1/2 transform -translate-x-1/2 top-full mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Coming soon
                    </span>
                </div>
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
                    <AvatarImage src="/team/aditya.jpg" alt="Profile" />
                    <AvatarFallback>AD</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
}