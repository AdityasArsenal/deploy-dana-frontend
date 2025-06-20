import React from 'react';
import BlogCard from './BlogCard';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  images: string[];
  date: string;
}

interface BlogListProps {
  posts: Post[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-12">
      {posts.map((post) => (
        <BlogCard key={post.id} post={{...post, image: post.images[0]}} />
      ))}
    </div>
  );
};

export default BlogList;