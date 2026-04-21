import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Office Location',
    value: '1234 Construction Blvd, Los Angeles, CA 90001',
  },
  {
    icon: Phone,
    label: 'Phone Number',
    value: '+1 (234) 567-890',
  },
  {
    icon: Mail,
    label: 'Email Address',
    value: 'info@buildcraftpro.com',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Fri: 8:00 AM – 6:00 PM',
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-28 bg-[#0a0a0a] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase">Get In Touch</span>
            <div className="w-8 h-px bg-[#ff6b35]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-barlow font-bold text-5xl lg:text-6xl text-white leading-tight"
          >
            Start Your Next
            <br />
            <span className="text-gradient">Project With Us</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[#111] border border-white/8 rounded-sm p-5 group hover:border-[#ff6b35]/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff6b35]/20 transition-all duration-300">
                  <item.icon size={18} className="text-[#ff6b35]" />
                </div>
                <div>
                  <div className="text-white/30 text-[10px] font-semibold tracking-wider uppercase mb-1">{item.label}</div>
                  <div className="text-white/80 text-sm font-medium">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-[#111] border border-white/8 rounded-sm p-5">
              <div className="text-white/30 text-[10px] font-semibold tracking-wider uppercase mb-3">Follow Us</div>
              <div className="flex gap-3">
                {['FB', 'TW', 'IG', 'LI'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-white/40 hover:text-white hover:bg-[#ff6b35] hover:border-[#ff6b35] text-xs font-bold transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 bg-[#111] border border-white/8 rounded-sm p-8"
          >
            {/* Accent top */}
            <div className="h-0.5 bg-gradient-to-r from-[#ff6b35] to-transparent -mx-8 -mt-8 mb-8" />

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/40 text-[10px] font-semibold tracking-wider uppercase mb-2">Full Name *</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#ff6b35]/50 focus:bg-[#ff6b35]/5 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-[10px] font-semibold tracking-wider uppercase mb-2">Email Address *</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#ff6b35]/50 focus:bg-[#ff6b35]/5 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/40 text-[10px] font-semibold tracking-wider uppercase mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#ff6b35]/50 focus:bg-[#ff6b35]/5 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-[10px] font-semibold tracking-wider uppercase mb-2">Service Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white/60 text-sm focus:outline-none focus:border-[#ff6b35]/50 focus:bg-[#ff6b35]/5 transition-all duration-300 appearance-none">
                    <option value="" className="bg-[#111]">Select a service</option>
                    <option value="planning" className="bg-[#111]">Project Planning</option>
                    <option value="management" className="bg-[#111]">Project Management</option>
                    <option value="contracting" className="bg-[#111]">General Contracting</option>
                    <option value="interior" className="bg-[#111]">Interior Design</option>
                    <option value="exterior" className="bg-[#111]">Exterior Design</option>
                    <option value="space" className="bg-[#111]">Space Planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/40 text-[10px] font-semibold tracking-wider uppercase mb-2">Project Details *</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#ff6b35]/50 focus:bg-[#ff6b35]/5 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-glow group bg-gradient-orange text-white font-bold text-sm py-4 rounded-sm hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">Send Message & Get Quote</span>
                <Send size={15} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-400 skew-x-12" />
              </button>

              <p className="text-center text-white/20 text-xs">
                By submitting, you agree to our privacy policy. We typically respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
