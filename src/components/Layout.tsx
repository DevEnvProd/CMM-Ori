import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronRight, Facebook, Twitter, Instagram, Youtube, Newspaper } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { CATEGORIES, NEWS_ARTICLES } from '@/src/data/news';

export const BreakingTicker = () => {
  const breakingNews = NEWS_ARTICLES.slice(0, 3);
  
  return (
    <div className="bg-breaking-red text-white py-2 overflow-hidden relative h-10 flex items-center">
      <div className="absolute left-0 top-0 bottom-0 bg-black px-4 flex items-center z-10 font-accent font-bold text-xs italic">
        BREAKING NEWS
      </div>
      <motion.div 
        animate={{ x: [1000, -2000] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap pl-32"
      >
        {breakingNews.map((news) => (
          <Link key={news.id} to={`/news/${news.slug}`} className="hover:underline font-medium">
            {news.title} • 
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-4 border-b border-gray-100">
          <div className="hidden md:flex gap-4 text-xs font-accent font-semibold text-gray-500 uppercase tracking-widest">
            <span>{new Date().toLocaleDateString('en-MY', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="text-news-red">Kuala Lumpur, Malaysia</span>
          </div>
          
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-news-red p-1.2 rounded">
               <Newspaper className="text-white w-8 h-8" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-serif font-black tracking-tighter text-news-red">CMM</span>
              <span className="text-[10px] font-accent font-bold text-casino-gold tracking-[0.2em] mt-0.5">EST. 2026</span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to="/about" className="hidden md:block bg-news-red text-white px-4 py-2 text-xs font-accent font-bold rounded hover:bg-red-700 transition-colors uppercase tracking-wider">
              Advertise
            </Link>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="hidden md:flex justify-center gap-8 py-3">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/category/${cat.slug}`}
              className={cn(
                "text-xs font-accent font-bold uppercase tracking-widest hover:text-news-red transition-colors relative py-1",
                location.pathname === `/category/${cat.slug}` ? "text-news-red after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-news-red" : "text-gray-700"
              )}
            >
              {cat.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {CATEGORIES.map((cat) => (
                <Link 
                  key={cat.id} 
                  to={`/category/${cat.slug}`}
                  className="text-sm font-accent font-bold uppercase tracking-widest text-gray-700 hover:text-news-red py-2 border-b border-gray-50"
                >
                  {cat.name}
                </Link>
              ))}
              <Link to="/about" className="text-sm font-accent font-bold uppercase tracking-widest text-news-red py-2">
                About Us / Advertise
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-200 p-4 shadow-xl z-40"
          >
            <div className="container mx-auto max-w-2xl flex gap-2">
              <input 
                type="text" 
                placeholder="Search news, games, Genting updates..." 
                className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-news-red font-sans"
                autoFocus
              />
              <button className="bg-news-red text-white px-6 py-2 rounded font-accent font-bold uppercase text-xs tracking-wider">
                Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-news-red p-1 rounded">
                 <Newspaper className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-black tracking-tighter text-white">CMM</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Malaysia's premier news source for casino industry updates, Genting Highlands news, and game releases. Berita kasino Malaysia. Terkini dan dipercayai.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-accent font-bold uppercase tracking-widest mb-6 text-casino-gold">Categories</h4>
            <ul className="flex flex-col gap-3">
              {CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.slug}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-accent font-bold uppercase tracking-widest mb-6 text-casino-gold">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">Editorial Standards</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">Advertise</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-accent font-bold uppercase tracking-widest mb-6 text-casino-gold">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Get the latest casino news delivered to your inbox.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border-none rounded px-4 py-2 text-sm focus:ring-1 focus:ring-news-red outline-none"
              />
              <button className="bg-news-red text-white py-2 rounded text-xs font-accent font-bold uppercase tracking-wider hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 CMM. All rights reserved. 18+ Play Responsibly.
          </p>
          <div className="flex gap-6 text-gray-500 text-xs">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface NewsCardProps {
  article: any;
  horizontal?: boolean;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, horizontal = false }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn(
        "bg-white news-card-shadow rounded-sm overflow-hidden group border border-gray-100 h-full",
        horizontal ? "flex flex-col md:flex-row" : "flex flex-col"
      )}
    >
      <Link to={`/news/${article.slug}`} className={cn("block overflow-hidden", horizontal ? "md:w-1/3" : "w-full")}>
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </Link>
      <div className={cn("p-5 flex flex-col", horizontal ? "md:w-2/3" : "w-full")}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-accent font-bold text-news-red uppercase tracking-widest bg-red-50 px-2 py-0.5 rounded">
            {CATEGORIES.find(c => c.slug === article.category)?.name || article.category.replace('-', ' ')}
          </span>
          <span className="text-[10px] font-accent font-medium text-gray-400 uppercase tracking-widest">
            {new Date(article.date).toLocaleDateString('en-MY', { month: 'short', day: 'numeric' })}
          </span>
        </div>
        <Link to={`/news/${article.slug}`}>
          <h3 className="text-xl font-serif font-bold text-dark-gray leading-tight mb-3 group-hover:text-news-red transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4 font-sans leading-relaxed">
          {article.excerpt}
        </p>
        <Link to={`/news/${article.slug}`} className="mt-auto flex items-center gap-1 text-xs font-accent font-bold text-news-red uppercase tracking-widest group/link">
          Read Full Story <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export const SponsorBanner = () => {
  return (
    <div className="bg-gradient-to-r from-news-red to-red-900 text-white p-8 rounded-sm my-12 relative overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <div className="inline-block bg-casino-gold text-black text-[10px] font-accent font-black uppercase px-2 py-1 rounded mb-4 tracking-widest">
            SPONSORED PARTNER
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-black mb-4 leading-tight">
            PLATINUM CASINO <br />
            <span className="text-casino-gold">MALAYSIA'S #1 CHOICE</span>
          </h2>
          <p className="text-red-100 max-w-md mb-6 font-sans">
            Experience world-class gaming with exclusive bonuses for CMM readers. Get RM 888 Welcome Bonus today.
          </p>
          <a 
            href="https://example.com/platinum-casino" 
            target="_blank" 
            className="inline-block bg-white text-news-red px-8 py-3 rounded font-accent font-black uppercase text-sm tracking-widest hover:bg-casino-gold hover:text-black transition-all shadow-lg"
          >
            Play Now at Platinum Casino
          </a>
        </div>
        <div className="hidden lg:block">
          <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center border-4 border-casino-gold/30 animate-pulse">
            <div className="text-center">
              <span className="block text-5xl font-serif font-black text-casino-gold">VIP</span>
              <span className="block text-xs font-accent font-bold tracking-widest">EXCLUSIVE</span>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 -top-20 w-60 h-60 bg-black/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <BreakingTicker />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
