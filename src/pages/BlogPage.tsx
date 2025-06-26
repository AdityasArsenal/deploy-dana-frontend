import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BlogList from '../components/blog/BlogList';

export interface WordPressPost {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

const WP_API = 'https://blog.esgai.space/wp-json/wp/v2/posts?per_page=12&_embed&excerpt_length=15';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(WP_API)
      .then((res) => res.json())
      .then((data: WordPressPost[]) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load posts:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-black text-white">Loading…</div>;
  if (!posts.length) return <div className="min-h-screen flex items-center justify-center bg-black text-white">No posts found.</div>;

  const summaries = posts.map((p) => {
    const embedded = p._embedded?.['wp:featuredmedia'];
    let imageUrl = '/blog/fallback-image.png'; // Default fallback

    if (embedded && embedded.length > 0) {
      const sourceUrl = embedded[0].source_url;
      // Prepend domain if URL is relative (starts with /wp-content)
      if (sourceUrl && sourceUrl.startsWith('/wp-content')) {
        imageUrl = `https://blog.esgai.space${sourceUrl}`;
      } else if (sourceUrl) {
        imageUrl = sourceUrl; // Assume it's an absolute URL
      }
    }

    return {
      id: p.id,
      title: p.title.rendered,
      excerpt: p.excerpt.rendered,
      image: imageUrl,
      date: p.date,
      link: p.link,
    };
  });

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navigation />
      <main className="flex-grow container mx-auto p-4 pt-24">
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
        <BlogList posts={summaries} />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;