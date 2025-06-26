import React from 'react';
import parse from 'html-react-parser';
import { Card } from '../ui/Card';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  image,
  date,
  link,
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block"
  >
    <Card className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-black hover:border-primary/50 glow-effect-sm transition-all duration-300">
      <img
        src={image}
        alt={parse(title) as string}
        className="w-full h-48 object-cover rounded-lg mb-5 group-hover:scale-105 transition-transform duration-300"
      />
      <h2 className="text-2xl font-bold mb-2 hover:bg-gradient-to-r from-primary to-electric-blue bg-clip-text hover:text-transparent transition-all duration-300">
        {parse(title)}
      </h2>
      <div className="text-muted-foreground text-base mb-3">
        {parse(excerpt)}
      </div>
      <p className="text-xs text-primary/70">
        {new Date(date).toLocaleDateString()}
      </p>
    </Card>
  </a>
);

export default BlogCard;
