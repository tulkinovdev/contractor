import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import ScrollToTop from './components/ScrollToTop';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const CTA = lazy(() => import('./components/CTA'));
const Quality = lazy(() => import('./components/Quality'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Blog = lazy(() => import('./components/Blog'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <main id="main" className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <Suspense fallback={<div className="py-28"></div>}>
        <About />
        <Services />
        <CTA />
        <Quality />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
      </Suspense>
      <ScrollToTop />
    </main>
  );
}
