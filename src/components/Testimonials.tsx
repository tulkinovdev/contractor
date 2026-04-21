import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael Rodriguez',
    role: 'CEO, Rodriguez Properties',
    image: '/images/team1.jpg',
    rating: 5,
    text: 'BuildCraft Pro delivered our commercial complex 2 weeks ahead of schedule without compromising a single element of quality. Their team is a true partner in every sense of the word. Outstanding communication throughout the entire project.',
    project: 'Skyline Tower Complex',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Director, Urban Development Co.',
    image: '/images/team2.jpg',
    rating: 5,
    text: 'The attention to detail and commitment to excellence that BuildCraft Pro brings to every project is unmatched. They transformed our vision into reality and exceeded every expectation we had. Truly exceptional team.',
    project: 'Urban Loft Renovation',
  },
  {
    id: 3,
    name: 'David Thompson',
    role: 'VP Construction, TechCorp',
    image: '/images/team1.jpg',
    rating: 5,
    text: 'We have worked with many contractors over the years, but BuildCraft Pro stands head and shoulders above the rest. Their professionalism, expertise, and dedication to delivering on promises sets them apart.',
    project: 'Tech Campus Phase II',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-28 bg-[#0a0a0a] relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-px bg-[#ff6b35]" />
            <span className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase">Testimonials</span>
            <div className="w-8 h-px bg-[#ff6b35]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-barlow font-bold text-5xl lg:text-6xl text-white leading-tight"
          >
            What Our Clients Say
            <br />
            <span className="text-gradient">About Our Work</span>
          </motion.h2>
        </div>

        {/* Testimonial slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-[#111] border border-white/8 rounded-sm p-10 lg:p-14 overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote size={80} className="text-[#ff6b35]" />
            </div>

            {/* Orange accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ff6b35] to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-[#ff6b35] fill-[#ff6b35]" />
                  ))}
                </div>

                <p className="text-white/70 text-lg leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#ff6b35]/30">
                      <img
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{testimonials[current].name}</div>
                      <div className="text-white/40 text-xs mt-0.5">{testimonials[current].role}</div>
                    </div>
                  </div>
                  <div className="text-[10px] font-bold tracking-wider uppercase text-[#ff6b35]/60 border border-[#ff6b35]/20 px-3 py-1.5 rounded-full">
                    {testimonials[current].project}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-sm border border-white/15 hover:border-[#ff6b35]/50 hover:bg-[#ff6b35]/10 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 h-2 bg-[#ff6b35]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-sm border border-white/15 hover:border-[#ff6b35]/50 hover:bg-[#ff6b35]/10 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
