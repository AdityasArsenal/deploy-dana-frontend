import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BlogList from '../components/blog/BlogList';
import blogData from '../data/blogs.json';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navigation />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-5 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-primary font-medium">Insights & Updates</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-primary to-electric-blue bg-clip-text text-transparent">
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Insights, news, and updates from the ESGai team
          </p>
        </div>
        <section className="relative">
          <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-primary/10 to-electric-blue/10 blur-2xl opacity-70"></div>
          <div className="relative z-10">
            <BlogList posts={blogData} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;