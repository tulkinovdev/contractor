import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-bg.jpg"
          alt="Construction background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />
        <div className="absolute inset-0 bg-[#ff6b35]/10" />
      </div>

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #ff6b35 0, #ff6b35 1px, transparent 0, transparent 50%)`,
          backgroundSize: '10px 10px',
        }}
      />

      {/* Orange side bar */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-orange" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-px bg-[#ff6b35]" />
              <span className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase">Limited Slots Available</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-barlow font-bold text-5xl lg:text-6xl text-white leading-tight mb-4"
            >
              Ready to Pull
              <br />
              the Trigger?
              <br />
              <span className="text-gradient">Get a Quote Today.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/60 text-base leading-relaxed"
            >
              Don't let your vision wait. Our expert team is ready to bring your construction project to life with unmatched quality and precision. Contact us now for a free consultation.
            </motion.p>
          </div>

          {/* Right — Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row lg:flex-col gap-4 flex-shrink-0"
          >
            <a
              href="#contact"
              className="group btn-glow inline-flex items-center justify-center gap-2 bg-gradient-orange text-white font-bold text-sm px-10 py-4 rounded-sm hover:opacity-90 transition-all duration-300 whitespace-nowrap"
            >
              Get A Quote
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="tel:+1234567890"
              className="group inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 text-white font-semibold text-sm px-10 py-4 rounded-sm transition-all duration-300 whitespace-nowrap backdrop-blur-sm"
            >
              <Phone size={15} className="text-[#ff6b35]" />
              Call Us Now
            </a>
          </motion.div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 pt-10 border-t border-white/10 flex flex-wrap gap-8 items-center justify-center lg:justify-start"
        >
          {['Licensed & Insured', 'BBB Accredited', 'LEED Certified', 'ISO 9001:2015', '5-Star Rated'].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-white/50 hover:text-white/70 transition-colors">
              <div className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full" />
              <span className="text-xs font-semibold tracking-wider uppercase">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
