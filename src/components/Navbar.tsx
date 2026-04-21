import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  {
    label: 'Services', href: '#services',
    children: ['Project Planning', 'Management', 'General Contracting', 'Interior Design']
  },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-orange rounded-sm flex items-center justify-center relative overflow-hidden">
              <span className="font-barlow font-800 text-white text-lg leading-none">B</span>
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
            </div>
            <div>
              <span className="font-barlow font-bold text-xl text-white tracking-wide">BUILD</span>
              <span className="font-barlow font-bold text-xl text-[#ff6b35] tracking-wide">CRAFT</span>
              <div className="text-[9px] text-white/40 tracking-[0.2em] font-medium -mt-0.5">PROFESSIONAL</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 hover-underline"
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                </a>

                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-48 bg-[#141414] border border-white/10 rounded-lg overflow-hidden shadow-2xl"
                    >
                      {link.children.map((child) => (
                        <a
                          key={child}
                          href="#services"
                          className="block px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-[#ff6b35]/10 border-l-2 border-transparent hover:border-[#ff6b35] transition-all duration-200"
                        >
                          {child}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200">
              <Phone size={15} className="text-[#ff6b35]" />
              <span className="font-medium">+1 (234) 567-890</span>
            </a>
            <a
              href="#contact"
              className="btn-glow bg-gradient-orange text-white text-sm font-semibold px-6 py-2.5 rounded-sm hover:opacity-90 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Get A Quote</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white rounded-sm bg-white/5 hover:bg-[#ff6b35]/20 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-y-0 right-0 z-40 w-72 bg-[#0d0d0d] border-l border-white/10 flex flex-col pt-20 pb-8 px-6"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-base font-medium text-white/70 hover:text-white border-b border-white/5 hover:pl-2 transition-all duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto">
              <a
                href="#contact"
                className="block text-center bg-gradient-orange text-white font-semibold py-3 rounded-sm"
                onClick={() => setMobileOpen(false)}
              >
                Get A Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
