import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import blogData from '../data/blogs.json';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find((post) => post.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center text-foreground">Post Not Found</h1>
          <Link
            to="/blog"
            className="block text-center text-primary hover:text-primary/80"
          >
            Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navigation />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          to="/blog"
          className="text-white hover:text-primary transition duration-300"
        >
          &larr; Back to Blog
        </Link>
        <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-primary/30 glow-effect-sm p-8 mt-6 transition-all duration-300">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-electric-blue bg-clip-text text-transparent">
            {post.title}
          </h1>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-6 border border-primary/20"
          />
          <p className="text-sm text-primary/70 mb-6">{new Date(post.date).toLocaleDateString()}</p>
          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                h2: ({ node, ...props }) => <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground" {...props} />,
                p: ({ node, ...props }) => <p className="text-lg text-muted-foreground mb-6 leading-relaxed" {...props} />,
                strong: ({ node, ...props }) => <strong className="font-semibold text-foreground/90" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc space-y-3 my-6 ml-6" {...props} />,
                li: ({ children }) => <li className="text-lg text-muted-foreground leading-relaxed">{children}</li>,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;