import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const achievements = [
  { icon: Award, label: 'Industry Awards', value: '24+' },
  { icon: Users, label: 'Team Members', value: '180+' },
  { icon: Clock, label: 'Years Experience', value: '12' },
  { icon: CheckCircle, label: 'Projects Completed', value: '350+' },
];

const features = [
  'Licensed & Fully Insured Operations',
  'On-Time Project Delivery Guaranteed',
  'Premium Material Quality Standards',
  'Expert Team of Certified Contractors',
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="py-28 bg-[#0a0a0a] relative overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff6b35]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <div className="w-8 h-px bg-[#ff6b35]" />
          <span className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase">About Us</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="relative">
              {/* Orange frame accent */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-l-2 border-t-2 border-[#ff6b35] z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-[#ff6b35] z-10" />

              <div className="overflow-hidden rounded-sm aspect-[4/5]">
                <motion.img
                  src="/images/about-img.jpg"
                  alt="Professional contractor"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute bottom-8 -right-6 bg-[#ff6b35] text-white px-6 py-4 rounded-sm shadow-2xl"
              >
                <div className="font-barlow font-bold text-4xl leading-none">12</div>
                <div className="text-white/80 text-xs font-medium tracking-wider uppercase">Years of<br />Excellence</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-barlow font-bold text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              A Team of Reliable &
              <br />
              <span className="text-gradient">Experienced</span>
              <br />
              Contractors
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/50 text-base leading-relaxed mb-8"
            >
              With over a decade of experience in the construction industry, BuildCraft Pro has established itself as a leader in delivering high-quality contracting services. Our team of skilled professionals brings passion, precision, and expertise to every project.
            </motion.p>

            {/* Feature list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="space-y-3 mb-10"
            >
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#ff6b35]/15 border border-[#ff6b35]/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={12} className="text-[#ff6b35]" />
                  </div>
                  <span className="text-white/70 text-sm font-medium">{f}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/3 border border-white/8 rounded-sm p-4 group hover:border-[#ff6b35]/40 hover:bg-[#ff6b35]/5 transition-all duration-300"
                >
                  <item.icon size={20} className="text-[#ff6b35] mb-2" />
                  <div className="font-barlow font-bold text-2xl text-white">
                    {inView ? (
                      <span>{item.value}</span>
                    ) : '0'}
                  </div>
                  <div className="text-white/40 text-xs font-medium tracking-wide uppercase mt-0.5">{item.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 text-white font-semibold text-sm"
              >
                <span className="bg-gradient-orange px-6 py-3 rounded-sm group-hover:opacity-90 transition-opacity btn-glow">
                  Meet Our Team
                </span>
                <span className="text-white/50 group-hover:text-white transition-colors">Learn more →</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
