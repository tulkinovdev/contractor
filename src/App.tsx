import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import About from './components/About';
import Services from './components/Services';
import CTA from './components/CTA';
import Quality from './components/Quality';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <About />
      <Services />
      <CTA />
      <Quality />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
