import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { SiteSettingsProvider } from '@/lib/SiteSettingsContext';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import ProjectDetail from '@/pages/ProjectDetail';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import About from '@/pages/About';
import Showroom from '@/pages/Showroom';
import Contact from '@/pages/Contact';
import BlogList from '@/pages/BlogList';
import BlogDetail from '@/pages/BlogDetail';
import NotFound from '@/pages/NotFound';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projecten" element={<Projects />} />
        <Route path="/projecten/:slug" element={<ProjectDetail />} />
        <Route path="/diensten" element={<Services />} />
        <Route path="/diensten/:slug" element={<ServiceDetail />} />
        <Route path="/over-ons" element={<About />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <SiteSettingsProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </SiteSettingsProvider>
    </Router>
  );
}
