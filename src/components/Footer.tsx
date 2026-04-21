import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Company: ['About Us', 'Our Team', 'Careers', 'Press & Media', 'Partnerships'],
  Services: ['Project Planning', 'Project Management', 'General Contracting', 'Interior Design', 'Space Planning'],
  'Useful Pages': ['Portfolio', 'Blog & News', 'FAQ', 'Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <footer className="bg-[#080808] border-t border-white/8 relative overflow-hidden" ref={ref}>
      {/* Top pattern */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/40 to-transparent" />

      {/* Background noise */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-gradient-orange rounded-sm flex items-center justify-center">
                <span className="font-barlow font-bold text-white text-lg leading-none">B</span>
              </div>
              <div>
                <span className="font-barlow font-bold text-xl text-white tracking-wide">BUILD</span>
                <span className="font-barlow font-bold text-xl text-[#ff6b35] tracking-wide">CRAFT</span>
                <div className="text-[9px] text-white/30 tracking-[0.2em] font-medium -mt-0.5">PROFESSIONAL</div>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Building exceptional structures since 2012. We bring your construction vision to life with precision, quality, and dedication.
            </p>

            {/* Contact details */}
            <div className="space-y-3">
              {[
                { icon: MapPin, text: '1234 Construction Blvd, Los Angeles, CA' },
                { icon: Phone, text: '+1 (234) 567-890' },
                { icon: Mail, text: 'info@buildcraftpro.com' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/40 hover:text-white/70 transition-colors group">
                  <item.icon size={14} className="text-[#ff6b35] flex-shrink-0" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links], colIdx) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + colIdx * 0.1 }}
            >
              <h3 className="font-barlow font-bold text-sm text-white tracking-widest uppercase mb-5 flex items-center gap-2">
                <div className="w-4 h-px bg-[#ff6b35]" />
                {section}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white flex items-center gap-1.5 group transition-colors duration-200"
                    >
                      <span className="group-hover:text-[#ff6b35] transition-colors">›</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 pt-10 border-t border-white/5"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-barlow font-bold text-xl text-white mb-1">Stay Updated</h3>
              <p className="text-white/40 text-sm">Get the latest construction insights and project updates delivered to your inbox.</p>
            </div>
            <div className="flex gap-0 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 lg:w-72 bg-white/5 border border-white/10 border-r-0 rounded-l-sm px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#ff6b35]/50 transition-all duration-300"
              />
              <button className="btn-glow cursor-pointer bg-gradient-orange text-white text-sm font-semibold px-5 py-3 rounded-r-sm hover:opacity-90 transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
                Subscribe
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2026 BuildCraft Pro. All rights reserved. Crafted with tulkinovdev for excellence.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-white/25 hover:text-white/60 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
