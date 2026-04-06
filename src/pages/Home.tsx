import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { NEWS_ARTICLES, CATEGORIES } from '@/src/data/news';
import { NewsCard, SponsorBanner } from '@/src/components/Layout';
import { ChevronRight, TrendingUp, Zap, Star } from 'lucide-react';

export const Home = () => {
  const featuredArticle = NEWS_ARTICLES[0];
  const latestNews = NEWS_ARTICLES.slice(1, 5);
  const trendingNews = NEWS_ARTICLES.slice(2, 6);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 relative group overflow-hidden rounded-sm news-card-shadow">
          <Link to={`/news/${featuredArticle.slug}`}>
            <img 
              src={featuredArticle.image} 
              alt={featuredArticle.title} 
              className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-news-red text-white text-[10px] font-accent font-black uppercase px-3 py-1 rounded tracking-widest">
                  {CATEGORIES.find(c => c.slug === featuredArticle.category)?.name || featuredArticle.category.replace('-', ' ')}
                </span>
                <span className="text-gray-300 text-[10px] font-accent font-bold uppercase tracking-widest">
                  {new Date(featuredArticle.date).toLocaleDateString('en-MY', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-serif font-black text-white leading-tight mb-4 group-hover:text-casino-gold transition-colors">
                {featuredArticle.title}
              </h1>
              <p className="text-gray-300 text-sm md:text-base max-w-2xl line-clamp-2 font-sans mb-6">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-2 text-white text-xs font-accent font-black uppercase tracking-widest group/btn">
                Read Full Story <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-2 border-b-2 border-news-red pb-2">
            <TrendingUp className="text-news-red w-5 h-5" />
            <h2 className="text-xl font-serif font-black uppercase tracking-tight">Trending Now</h2>
          </div>
          {trendingNews.map((news, idx) => (
            <Link key={news.id} to={`/news/${news.slug}`} className="group flex gap-4 items-start py-2 border-b border-gray-100 last:border-0">
              <span className="text-3xl font-serif font-black text-gray-200 group-hover:text-news-red transition-colors">0{idx + 1}</span>
              <div>
                <h3 className="text-sm font-serif font-bold text-dark-gray leading-tight group-hover:text-news-red transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <span className="text-[10px] font-accent font-bold text-gray-400 uppercase tracking-widest mt-1 block">
                  {CATEGORIES.find(c => c.slug === news.category)?.name || news.category.replace('-', ' ')}
                </span>
              </div>
            </Link>
          ))}
          <div className="mt-auto bg-gray-50 p-6 rounded-sm border border-gray-200">
            <h3 className="text-sm font-accent font-black uppercase tracking-widest mb-4 flex items-center gap-2">
              <Zap className="text-news-red w-4 h-4" /> Quick Links
            </h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <Link 
                  key={cat.id} 
                  to={`/category/${cat.slug}`}
                  className="bg-white border border-gray-200 px-3 py-1.5 rounded text-[10px] font-accent font-bold uppercase tracking-widest hover:border-news-red hover:text-news-red transition-all"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="mb-16">
        <div className="flex justify-between items-end mb-8 border-b-2 border-gray-100 pb-4">
          <div className="flex items-center gap-2">
             <Star className="text-casino-gold w-6 h-6 fill-casino-gold" />
             <h2 className="text-3xl font-serif font-black tracking-tight">Latest Updates</h2>
          </div>
          <Link to="/category/genting" className="text-xs font-accent font-bold text-news-red uppercase tracking-widest hover:underline">
            View All News
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestNews.map(news => (
            <NewsCard key={news.id} article={news} />
          ))}
        </div>
      </section>

      {/* Sponsored Banner */}
      <SponsorBanner />

      {/* More News Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif font-black tracking-tight mb-8 border-b-2 border-gray-100 pb-4">More Stories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {NEWS_ARTICLES.slice(4, 8).map(news => (
            <NewsCard key={news.id} article={news} horizontal />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 rounded-sm p-12 text-center border border-gray-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-black mb-4">Stay Ahead of the Game</h2>
          <p className="text-gray-600 mb-8 font-sans">
            Join over 50,000 readers who receive our daily digest of Malaysia's casino news, exclusive promotions, and industry analysis.
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-white border border-gray-300 rounded px-6 py-3 focus:outline-none focus:border-news-red font-sans"
            />
            <button className="bg-news-red text-white px-10 py-3 rounded font-accent font-black uppercase text-sm tracking-widest hover:bg-red-700 transition-colors shadow-lg">
              Subscribe Now
            </button>
          </div>
          <p className="text-[10px] text-gray-400 mt-4 font-accent font-medium uppercase tracking-widest">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  );
};
