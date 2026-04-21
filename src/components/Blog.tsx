import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Clock, Tag } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: '12 Designer Tricks for Picking the Perfect Home Color Palette',
    excerpt: 'Discover professional secrets that interior designers use to create harmonious and stunning color schemes for any space.',
    category: 'Interior Design',
    readTime: '5 min read',
    date: 'Dec 15, 2024',
    image: '/images/news1.jpg',
  },
  {
    id: 2,
    title: 'Paint Trends 2025: Colors You Need for the Ultimate Wonder Wall',
    excerpt: 'Stay ahead of the curve with the most anticipated paint colors and finishes that will define residential design in 2025.',
    category: 'Trends',
    readTime: '4 min read',
    date: 'Dec 10, 2024',
    image: '/images/project2.jpg',
  },
  {
    id: 3,
    title: 'Clever DIY Home Improvements You Can Do During the Weekend',
    excerpt: 'Maximize your home value with these smart, budget-friendly improvements that make a huge visual impact without a full renovation.',
    category: 'DIY Tips',
    readTime: '6 min read',
    date: 'Dec 5, 2024',
    image: '/images/project3.jpg',
  },
  {
    id: 4,
    title: '5 Mind-Blowing Flooring Ideas to Make Your Home Look Great',
    excerpt: 'From polished concrete to reclaimed wood, explore the most striking flooring options that transform entire spaces dramatically.',
    category: 'Flooring',
    readTime: '3 min read',
    date: 'Nov 28, 2024',
    image: '/images/quality-img.jpg',
  },
];

export default function Blog() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="blog" className="py-28 bg-[#0d0d0d] relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-px bg-[#ff6b35]" />
              <span className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase">Articles & News</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-barlow font-bold text-5xl lg:text-6xl text-white leading-tight"
            >
              Latest From
              <br />
              <span className="text-gradient">Our Knowledge Hub</span>
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            href="#blog"
            className="text-sm font-semibold text-white/60 hover:text-white border border-white/15 hover:border-white/30 px-5 py-2.5 rounded-sm transition-all whitespace-nowrap"
          >
            Browse All Articles
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-[#111] border border-white/8 rounded-sm overflow-hidden hover:border-[#ff6b35]/30 transition-all duration-400 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#ff6b35] text-white text-[9px] font-bold tracking-wider uppercase px-2.5 py-1.5 rounded-full flex items-center gap-1">
                  <Tag size={8} />
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 text-[10px] text-white/30 mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Clock size={10} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-barlow font-bold text-base text-white leading-snug mb-3 group-hover:text-[#ff6b35] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-white/40 text-xs leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-1.5 text-[#ff6b35] text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  Read Article
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
