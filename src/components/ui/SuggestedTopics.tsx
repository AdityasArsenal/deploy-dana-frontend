import { Button } from './Button';
import { Globe, Heart, FileText, BarChart2, Plane } from 'lucide-react';

export function SuggestedTopics() {
    return (
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
            <Button variant="secondary" className="text-gray-200">
                <Globe size={16} className="mr-2" />
                Current Events
            </Button>

            <Button variant="secondary" className="text-gray-200">
                <Heart size={16} className="mr-2" />
                Health
            </Button>

            <Button variant="secondary" className="text-gray-200">
                <FileText size={16} className="mr-2" />
                Summarize
            </Button>

            <Button variant="secondary" className="text-gray-200">
                <BarChart2 size={16} className="mr-2" />
                Analyze
            </Button>

            <Button variant="secondary" className="text-gray-200">
                <Plane size={16} className="mr-2" />
                Travel
            </Button>
        </div>
    );
}