"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '../shared/animations';

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Remarkable?</motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-700 mb-8">
            Whether you're planning a special event, need professional portraits, or have a commercial project in mind, we'd love to hear from you and bring your vision to life.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              href="/enquiry"
              className="inline-block bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}