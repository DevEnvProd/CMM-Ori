import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { NEWS_ARTICLES, CATEGORIES } from '@/src/data/news';
import { NewsCard, SponsorBanner } from '@/src/components/Layout';
import { ChevronRight, Filter } from 'lucide-react';

export const CategoryPage = () => {
  const { slug } = useParams();
  const category = CATEGORIES.find(c => c.slug === slug);
  const articles = NEWS_ARTICLES.filter(a => a.category === slug);

  if (!category) return <div className="container mx-auto px-4 py-20 text-center">Category not found.</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-news-red pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-accent font-bold text-news-red uppercase tracking-widest mb-2">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span>Categories</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight uppercase">
            {category.name}
          </h1>
        </div>
        <div className="flex items-center gap-4 mt-6 md:mt-0">
          <span className="text-xs font-accent font-bold text-gray-400 uppercase tracking-widest">
            {articles.length} Articles Found
          </span>
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded text-xs font-accent font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {articles.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      {articles.length === 0 && (
        <div className="py-20 text-center bg-gray-50 rounded-sm border border-gray-200">
          <p className="text-gray-500 font-serif italic text-xl">No articles found in this category yet.</p>
        </div>
      )}

      <SponsorBanner />

      <section className="mt-20">
        <h2 className="text-2xl font-serif font-black tracking-tight mb-8 border-b-2 border-gray-100 pb-4 uppercase">Other Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.filter(c => c.slug !== slug).map(cat => (
            <Link 
              key={cat.id} 
              to={`/category/${cat.slug}`}
              className="bg-white border border-gray-200 p-6 rounded-sm text-center hover:border-news-red hover:shadow-lg transition-all group"
            >
              <h3 className="text-xs font-accent font-black uppercase tracking-widest group-hover:text-news-red">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export const ArticlePage = () => {
  const { slug } = useParams();
  const article = NEWS_ARTICLES.find(a => a.slug === slug);
  const relatedArticles = NEWS_ARTICLES.filter(a => a.category === article?.category && a.slug !== slug).slice(0, 3);

  if (!article) return <div className="container mx-auto px-4 py-20 text-center">Article not found.</div>;

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Link to={`/category/${article.category}`} className="bg-news-red text-white text-[10px] font-accent font-black uppercase px-3 py-1 rounded tracking-widest">
            {CATEGORIES.find(c => c.slug === article.category)?.name || article.category.replace('-', ' ')}
          </Link>
          <span className="text-gray-400 text-[10px] font-accent font-bold uppercase tracking-widest">
            {new Date(article.date).toLocaleDateString('en-MY', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif font-black text-dark-gray leading-tight mb-8 tracking-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 mb-10 border-y border-gray-100 py-4">
          <div className="w-10 h-10 bg-news-red rounded-full flex items-center justify-center text-white font-serif font-black">CM</div>
          <div className="flex flex-col">
            <span className="text-sm font-accent font-black uppercase tracking-widest">CMM Editorial Team</span>
            <span className="text-[10px] font-accent font-bold text-gray-400 uppercase tracking-widest">5 MIN READ • UPDATED 2 HOURS AGO</span>
          </div>
        </div>

        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-[400px] md:h-[500px] object-cover rounded-sm mb-12 news-card-shadow"
          referrerPolicy="no-referrer"
        />

        <div className="prose prose-lg max-w-none font-sans text-gray-700 leading-relaxed mb-16">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {article.isSponsored && (
          <div className="bg-red-50 border-l-4 border-news-red p-8 mb-16 rounded-r-sm">
            <h4 className="text-news-red font-accent font-black uppercase tracking-widest text-xs mb-2">SPONSORED CONTENT</h4>
            <p className="text-gray-700 font-sans italic mb-6">
              This article was brought to you by {article.sponsorName}. CMM maintains strict editorial independence, but we partner with trusted brands to bring you the best offers.
            </p>
            <a 
              href={article.affiliateLink} 
              target="_blank" 
              className="inline-block bg-news-red text-white px-8 py-3 rounded font-accent font-black uppercase text-sm tracking-widest hover:bg-red-700 transition-colors shadow-lg"
            >
              Visit {article.sponsorName}
            </a>
          </div>
        )}

        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-serif font-black tracking-tight mb-8 uppercase">Related Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map(rel => (
              <NewsCard key={rel.id} article={rel} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-serif font-black mb-8 border-b-4 border-news-red pb-6 uppercase tracking-tight">About CMM</h1>
        
        <div className="prose prose-lg font-sans text-gray-700 leading-relaxed space-y-8">
          <p className="text-xl font-serif italic text-news-red">
            "Berita kasino Malaysia. Terkini dan dipercayai."
          </p>
          
          <p>
            Founded in 2026, CMM has quickly established itself as Malaysia's premier independent news source for the casino and integrated resort industry. We provide authoritative, fast, and professional coverage of everything from Genting Highlands updates to international gaming trends.
          </p>

          <h2 className="text-3xl font-serif font-black text-dark-gray mt-12 mb-4">Our Mission</h2>
          <p>
            Our mission is to empower players and industry professionals with accurate, timely, and unbiased information. We believe in transparency and responsible gaming, ensuring our readers have the best possible experience in Malaysia's vibrant gaming landscape.
          </p>

          <h2 className="text-3xl font-serif font-black text-dark-gray mt-12 mb-4">Editorial Standards</h2>
          <p>
            We adhere to the highest journalistic standards. Our editorial team operates independently from our commercial partners. While we do feature sponsored content and affiliate links, these are always clearly labeled to maintain the trust of our readers.
          </p>

          <div className="bg-gray-50 p-8 rounded-sm border border-gray-200 mt-12">
            <h3 className="text-xl font-serif font-black mb-4 uppercase tracking-tight text-news-red">Advertise With Us</h3>
            <p className="text-sm mb-6">
              CMM offers a range of advertising opportunities for licensed casino operators, game developers, and luxury lifestyle brands.
            </p>
            <ul className="text-sm space-y-2 mb-8">
              <li>• Sponsored News Articles</li>
              <li>• Display Banner Advertising</li>
              <li>• Newsletter Sponsorships</li>
              <li>• Affiliate Partnerships</li>
            </ul>
            <button className="bg-news-red text-white px-8 py-3 rounded font-accent font-black uppercase text-xs tracking-widest hover:bg-red-700 transition-colors">
              Request Media Kit
            </button>
          </div>

          <h2 className="text-3xl font-serif font-black text-dark-gray mt-12 mb-4">Contact Us</h2>
          <p>
            Have a news tip or a question? Reach out to our editorial team at:
            <br />
            <strong className="text-news-red">editorial@casinomy.com.my</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
