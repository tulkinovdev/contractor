import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

const stats = [
  { value: '350+', label: 'Projects Done' },
  { value: '12Y', label: 'Experience' },
  { value: '400+', label: 'Happy Clients' },
  { value: '98%', label: 'Success Rate' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

        {/* Orange accent lines */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#ff6b35]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff6b35]/50 via-[#ff6b35]/20 to-transparent" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-28 pb-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="w-8 h-px bg-[#ff6b35]" />
              <span className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase">
                Award Winning Contractors
              </span>
              <div className="w-2 h-2 rounded-full bg-[#ff6b35] pulse-dot" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-barlow font-bold text-6xl md:text-7xl lg:text-8xl text-white leading-[0.92] mb-6"
            >
              We Build
              <br />
              <span className="text-gradient">Exceptional</span>
              <br />
              <span className="italic font-normal">Structures</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl"
            >
              From concept to completion, we deliver outstanding construction and contracting services that stand the test of time. Excellence in every project, on time, within budget.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="btn-glow group inline-flex items-center gap-2 bg-gradient-orange text-white font-semibold text-sm px-8 py-4 rounded-sm hover:opacity-90 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
              </a>

              <a
                href="#portfolio"
                className="group inline-flex items-center gap-3 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-[#ff6b35]/50 flex items-center justify-center transition-colors duration-300 relative overflow-hidden">
                  <Play size={14} fill="currentColor" className="ml-0.5" />
                  <div className="absolute inset-0 bg-[#ff6b35]/0 group-hover:bg-[#ff6b35]/10 transition-colors duration-300 rounded-full" />
                </div>
                View Our Work
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 bg-[#ff6b35] divide-x divide-white/20">
            {stats.map((stat, i) => (
              <div key={i} className="px-6 py-5 text-center group hover:bg-white/10 transition-colors duration-300">
                <div className="font-barlow font-bold text-3xl text-white">{stat.value}</div>
                <div className="text-white/80 text-xs font-medium tracking-wider mt-0.5 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 flex justify-center py-6"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/30 hover:text-white/60 cursor-pointer transition-colors"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
