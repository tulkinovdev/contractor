import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';

const points = [
  { icon: Shield, text: '30% savings on material costs through strategic partnerships' },
  { icon: TrendingUp, text: 'Proven track record of 98% on-time project completion' },
  { icon: Zap, text: 'Cutting-edge technology for faster, safer construction' },
  { icon: CheckCircle2, text: 'Zero-compromise quality standards on every project' },
];

export default function Quality() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-28 bg-[#0a0a0a] relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-px bg-[#ff6b35]" />
              <span className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase">Why Choose Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-barlow font-bold text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              An Exceptional
              <br />
              <span className="text-gradient">Quality That</span>
              <br />
              Can't Be Beaten
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/50 text-base leading-relaxed mb-10"
            >
              We combine decades of hands-on experience with innovative methodologies to deliver construction projects that exceed expectations. Our commitment to quality is unwavering.
            </motion.p>

            <div className="space-y-5">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff6b35]/20 group-hover:border-[#ff6b35]/40 transition-all duration-300">
                    <point.icon size={18} className="text-[#ff6b35]" />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed pt-2.5 group-hover:text-white/80 transition-colors duration-300">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Progress bars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 space-y-4"
            >
              {[
                { label: 'Construction Quality', pct: 98 },
                { label: 'Client Satisfaction', pct: 96 },
                { label: 'Project Efficiency', pct: 92 },
              ].map((bar, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-white/60 text-xs font-medium">{bar.label}</span>
                    <span className="text-[#ff6b35] text-xs font-bold">{bar.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-orange rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${bar.pct}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.9 + i * 0.15 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-4 -right-4 w-32 h-32 border-r-2 border-t-2 border-[#ff6b35] z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-l-2 border-b-2 border-[#ff6b35] z-10" />

            <div className="overflow-hidden rounded-sm aspect-square">
              <motion.img
                src="/images/quality-img.jpg"
                alt="Quality construction"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={800}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-[#111] border border-white/10 rounded-sm p-5 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#ff6b35] rounded-sm flex items-center justify-center">
                  <TrendingUp size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-barlow font-bold text-2xl text-white leading-none">100%</div>
                  <div className="text-white/40 text-xs tracking-wide mt-0.5">Projects Delivered</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
