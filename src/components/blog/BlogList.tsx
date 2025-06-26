import React from 'react';
import BlogCard from './BlogCard';

export interface BlogSummary {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  link: string;
}

interface BlogListProps {
  posts: BlogSummary[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {posts.map((post) => (
      <BlogCard key={post.id} {...post} />
    ))}
  </div>
);

export default BlogList;
