import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Layers, Settings, Building2, Palette, TreePine, LayoutGrid } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Project Planning',
    description: 'Strategic planning and feasibility analysis to set your project up for success from day one.',
    tags: ['Analysis', 'Timeline', 'Budgeting'],
    accent: '#ff6b35',
  },
  {
    icon: Settings,
    title: 'Project Management',
    description: 'End-to-end project oversight ensuring seamless execution, quality control and timely delivery.',
    tags: ['Oversight', 'Quality', 'Delivery'],
    accent: '#ff6b35',
  },
  {
    icon: Building2,
    title: 'General Contracting',
    description: 'Full-service general contracting for commercial, residential, and industrial construction projects.',
    tags: ['Commercial', 'Residential', 'Industrial'],
    accent: '#ff6b35',
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Transforming spaces with innovative interior design that blends aesthetics with functionality.',
    tags: ['Modern', 'Functional', 'Aesthetic'],
    accent: '#ff6b35',
  },
  {
    icon: TreePine,
    title: 'Exterior Design',
    description: 'Creating stunning exterior environments that enhance property value and curb appeal.',
    tags: ['Facade', 'Landscaping', 'Value'],
    accent: '#ff6b35',
  },
  {
    icon: LayoutGrid,
    title: 'Space Planning',
    description: 'Optimizing spatial layouts to maximize efficiency, flow, and functionality in every environment.',
    tags: ['Layout', 'Efficiency', 'Flow'],
    accent: '#ff6b35',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-28 bg-[#0d0d0d] relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div
        className="absolute opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #ff6b35 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-px bg-[#ff6b35]" />
              <span className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase">What We Offer</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-barlow font-bold text-5xl lg:text-6xl text-white leading-tight"
            >
              A Comprehensive
              <br />
              <span className="text-gradient">Set of Services</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex gap-3"
          >
            
            <a href="#portfolio" className="text-white/60 hover:text-white text-sm font-medium border border-white/15 hover:border-white/30 px-5 py-2.5 rounded-sm transition-all duration-300">
              View Portfolio
            </a>
            
            <a href="#contact" className="bg-gradient-orange text-white text-sm font-semibold px-5 py-2.5 rounded-sm btn-glow hover:opacity-90 transition-all duration-300">
              Get Started
            </a>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="service-card group bg-[#111] border border-white/8 rounded-sm p-7 relative overflow-hidden cursor-pointer hover:border-[#ff6b35]/40"
            >
              {/* Background hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/0 group-hover:from-[#ff6b35]/5 group-hover:to-transparent transition-all duration-500" />

              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#ff6b35] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Icon */}
              <div className="relative z-10 w-12 h-12 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-sm flex items-center justify-center mb-5 group-hover:bg-[#ff6b35]/20 group-hover:border-[#ff6b35]/40 transition-all duration-300">
                <service.icon size={22} className="text-[#ff6b35]" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-barlow font-bold text-xl text-white group-hover:text-[#ff6b35] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-white/20 group-hover:text-[#ff6b35] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-0.5"
                  />
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[10px] font-semibold tracking-wider uppercase text-[#ff6b35]/60 border border-[#ff6b35]/20 px-2.5 py-1 rounded-full group-hover:border-[#ff6b35]/40 group-hover:text-[#ff6b35] transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Number */}
              <div className="absolute bottom-5 right-6 font-barlow font-bold text-5xl text-white/3 group-hover:text-white/5 transition-colors duration-300 leading-none select-none">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
