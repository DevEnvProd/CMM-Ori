import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from '@/src/components/Layout';
import { Home } from '@/src/pages/Home';
import { CategoryPage, ArticlePage, AboutPage } from '@/src/pages/ContentPages';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/news/:slug" element={<ArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/search" element={<div className="container mx-auto px-4 py-20 text-center">Search functionality coming soon.</div>} />
          <Route path="*" element={<div className="container mx-auto px-4 py-20 text-center">404 - Page Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

