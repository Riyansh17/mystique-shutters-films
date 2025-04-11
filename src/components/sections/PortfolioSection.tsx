"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '../shared/animations';
import { PortfolioItem } from '../shared/types';

export default function PortfolioSection() {
  // Sample portfolio items
  const portfolioItems: PortfolioItem[] = [
    { id: 1, title: 'Urban Landscapes', category: 'Photography', imageUrl: '/images/portfolio1.png', path: '/stories/urban-landscapes' },
    { id: 2, title: 'Wedding Stories', category: 'Photography', imageUrl: '/images/portfolio2.png', path: '/stories/wedding-stories' },
    { id: 3, title: 'Fashion Editorial', category: 'Photography', imageUrl: '/images/portfolio3.png', path: '/stories/fashion-editorial' },
    { id: 4, title: 'Cinematic Short', category: 'Film', imageUrl: '/images/portfolio4.png', path: '/films/cinematic-short' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl font-bold mb-6">Featured Works</motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-700 max-w-2xl mx-auto">
            Explore our curated collection of photographic stories and cinematic experiences, each crafted with precision and artistic vision.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group relative rounded-lg overflow-hidden h-80"
            >
              
              <div className="w-full h-full bg-gray-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-sm font-medium opacity-75">{item.category}</span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <Link href={item.path} className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <Link
            href="/stories"
            className="inline-block border border-black text-black hover:bg-black hover:text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Explore All Works
          </Link>
        </motion.div>
      </div>
    </section>
  );
}