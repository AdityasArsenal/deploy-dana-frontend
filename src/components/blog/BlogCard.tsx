import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

interface BlogCardProps {
  post: Post;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`}>
      <Card className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-black hover:border-primary/50 glow-effect-sm  transition-all duration-300 group">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover rounded-lg mb-5 group-hover:scale-105 transition-transform duration-300"
        />
        <h2 className="text-2xl font-bold mb-2 text-2xl font-bold mb-2 hover:bg-gradient-to-r from-primary to-electric-blue bg-clip-text hover:text-transparent transition-all duration-300">
          {post.title}
        </h2>
        <p className="text-muted-foreground text-base mb-3">{post.excerpt}</p>
        <p className="text-xs text-primary/70">{new Date(post.date).toLocaleDateString()}</p>
      </Card>
    </Link>
  );
};

export default BlogCard;