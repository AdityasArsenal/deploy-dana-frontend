import { Button } from './Button';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';
import { Search, Settings, Database, Leaf } from 'lucide-react';

export function Sidebar() {
    return (
        <div className="flex flex-col items-center w-30 border-r border-gray-800 bg-black font-sans">
            {/* Top Logo */}
            <div className="p-4">
                <Button
                    variant="ghost"
                    className="w-16 h-39 flex flex-col items-center justify-center text-gray-400 font-sans"
                >
                    <Leaf strokeWidth={3} size={35} color="green" />
                </Button>

            </div>

            <div className="flex flex-col items-center gap-0 mt-5">
                {/* "+" Button */}
                <Button
                    variant="ghost"
                    className="w-12 h-16 rounded-full text-gray-400 hover:bg-gray-700 flex items-center justify-center font-sans"
                >
                    <span className="text-4xl">+</span>
                </Button>
            </div>

            <div className="flex flex-col items-center space-y-1 mt-10">
                {/* Home */}
                <Button
                    variant="ghost"
                    className="min-h-[85px] flex flex-col items-center justify-center px-2 text-gray-400 font-sans"
                >
                    <Search strokeWidth={1} size={25} />
                    <span className="text-xs font-bold mt-1">Home</span>
                </Button>

                {/* Sectors */}
                <Button
                    variant="ghost"
                    className="min-h-[85px] flex flex-col items-center justify-center px-2 text-gray-400 font-sans"
                >
                    <Database strokeWidth={1} size={25} />
                    <span className="text-xs font-bold mt-1">Sectors</span>
                </Button>

                {/* Settings */}
                <Button
                    variant="ghost"
                    className="min-h-[85px] flex flex-col items-center justify-center px-2 text-gray-400 font-sans"
                >
                    <Settings strokeWidth={1} size={25} />
                    <span className="text-xs font-bold mt-1">Settings</span>
                </Button>
            </div>

            {/* Bottom Section */}
            <div className="mt-auto mb-4">
                <div className="flex flex-col items-center gap-6">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src="/ai/image/team/aditya.jpg" alt="Profile" />
                        <AvatarFallback>AD</AvatarFallback>
                    </Avatar>

                    <Button variant="ghost" className="w-12 h-12 text-gray-400 flex items-center justify-center font-sans">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    );
}