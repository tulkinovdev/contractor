import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, MapPin } from 'lucide-react';

const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Interior'];

const projects = [
  {
    id: 1,
    title: 'Skyline Tower Complex',
    location: 'Los Angeles, CA',
    category: 'Commercial',
    year: '2024',
    image: '/images/project1.jpg',
    area: '45,000 sq ft',
  },
  {
    id: 2,
    title: 'Urban Loft Renovation',
    location: 'New York, NY',
    category: 'Interior',
    year: '2024',
    image: '/images/project2.jpg',
    area: '3,200 sq ft',
  },
  {
    id: 3,
    title: 'Corporate HQ Building',
    location: 'Chicago, IL',
    category: 'Commercial',
    year: '2023',
    image: '/images/project3.jpg',
    area: '82,000 sq ft',
  },
  {
    id: 4,
    title: 'Industrial Warehouse',
    location: 'Houston, TX',
    category: 'Industrial',
    year: '2023',
    image: '/images/cta-bg.jpg',
    area: '120,000 sq ft',
  },
  {
    id: 5,
    title: 'Modern Villa Estate',
    location: 'Miami, FL',
    category: 'Residential',
    year: '2024',
    image: '/images/quality-img.jpg',
    area: '8,500 sq ft',
  },
  {
    id: 6,
    title: 'Tech Campus Phase II',
    location: 'Seattle, WA',
    category: 'Commercial',
    year: '2023',
    image: '/images/about-img.jpg',
    area: '260,000 sq ft',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-28 bg-[#0d0d0d] relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-px bg-[#ff6b35]" />
              <span className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase">Portfolio</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-barlow font-bold text-5xl lg:text-6xl text-white leading-tight"
            >
              Our Project Results
              <br />
              <span className="text-gradient">Speak for Themselves</span>
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            href="#contact"
            className="text-sm font-semibold text-white/60 hover:text-white border border-white/15 hover:border-white/30 px-5 py-2.5 rounded-sm transition-all whitespace-nowrap"
          >
            Browse All Projects
          </motion.a>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold tracking-wider cursor-pointer uppercase px-5 py-2.5 rounded-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-orange text-white'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-sm aspect-[4/3] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={1200}
                  height={900}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Category tag */}
                <div className="absolute top-4 left-4 bg-[#ff6b35] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">
                  {project.category}
                </div>

                {/* Arrow icon */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-white/0 group-hover:bg-[#ff6b35] border border-white/20 group-hover:border-[#ff6b35] rounded-sm flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight size={16} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  <div className="flex items-center gap-1.5 text-white/50 text-xs mb-1.5">
                    <MapPin size={11} className="text-[#ff6b35]" />
                    <span>{project.location}</span>
                    <span className="mx-1">·</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-barlow font-bold text-lg text-white leading-tight">{project.title}</h3>
                  <div className="mt-2 text-[#ff6b35] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100">
                    {project.area} · View Details →
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
