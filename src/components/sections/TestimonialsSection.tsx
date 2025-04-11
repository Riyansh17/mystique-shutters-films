"use client";
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../shared/animations';
import { Testimonial } from '../shared/types';

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Bride',
      quote: 'The way Mystique captured our wedding day was beyond our expectations. Every emotion, every detail was preserved beautifully.',
      avatar: '/images/avatar1.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Fashion Designer',
      quote: 'Working with this team on my collection showcase was a dream. Their eye for detail and ability to tell a story through images is unmatched.',
      avatar: '/images/avatar2.jpg'
    },
    {
      id: 3,
      name: 'Emma Roberts',
      role: 'Marketing Director',
      quote: 'Our brand campaign needed something special, and that exactly what we got. Professional, creative, and incredibly talented.',
      avatar: '/images/avatar3.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl font-bold mb-6">Client Testimonials</motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about their experience working with us.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              className="bg-gray-800 p-8 rounded-lg relative"
            >
              <svg className="text-gray-700 w-12 h-12 absolute top-4 right-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c0 0-0.1 2-2 4-0.3 0.3-0.4 0.7-0.2 1.1s0.5 0.6 0.9 0.6c4.6 0 7.3-4.3 7.3-8.3 0-5.2-2.7-9.4-6-9.4zM20 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c0 0-0.1 2-2 4-0.3 0.3-0.4 0.7-0.2 1.1s0.5 0.6 0.9 0.6c4.6 0 7.3-4.3 7.3-8.3 0-5.2-2.7-9.4-6-9.4z"></path>
              </svg>
              <p className="mb-6 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden mr-4">
                  {/* Placeholder for actual avatar */}
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}