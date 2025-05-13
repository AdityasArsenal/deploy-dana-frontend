import { Button } from './Button';

export function Footer() {
    return (
        <div className="border-t border-gray-800 p-4 flex justify-center">
            <div className="flex gap-6 text-gray-400 text-sm">
                <Button variant="link" className="p-0">Pro</Button>
                <Button variant="link" className="p-0">Enterprise</Button>
                <Button variant="link" className="p-0">API</Button>
                <Button variant="link" className="p-0">Blog</Button>
                <Button variant="link" className="p-0">Careers</Button>
                <Button variant="link" className="p-0">Store</Button>
                <Button variant="link" className="p-0">Finance</Button>
                <Button variant="link" className="p-0 flex items-center">
                    English <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1"><path d="M6 9l6 6 6-6" /></svg>
                </Button>
            </div>
        </div>
    );
}