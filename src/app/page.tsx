"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  path: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export default function HomePage() {
  // Sample portfolio items
  const portfolioItems: PortfolioItem[] = [
    { id: 1, title: 'Urban Landscapes', category: 'Photography', imageUrl: '/images/portfolio1.png', path: '/stories/urban-landscapes' },
    { id: 2, title: 'Wedding Stories', category: 'Photography', imageUrl: '/images/portfolio2.png', path: '/stories/wedding-stories' },
    { id: 3, title: 'Fashion Editorial', category: 'Photography', imageUrl: '/images/portfolio3.png', path: '/stories/fashion-editorial' },
    { id: 4, title: 'Cinematic Short', category: 'Film', imageUrl: '/images/portfolio4.png', path: '/films/cinematic-short' },
  ];

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
    <>
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full bg-gradient-to-r from-black to-gray-900" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Capturing Moments, Creating Stories
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-200 mb-8"
            >
              Welcome to Mystique Shutters Films, where we transform ordinary moments into extraordinary memories through the art of photography and cinematography.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
            >
              <Link
                href="/stories"
                className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-md font-medium transition-colors"
              >
                View Portfolio
              </Link>
              <Link
                href="/enquiry"
                className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/images/portfolio2.png"
                alt="Background"
                className="w-full h-full object-cover"
              />
              <div className="w-full h-full bg-gray-300" />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Passion Behind the Lens</h2>
              <p className="text-gray-700 mb-6">
                At Mystique Shutters Films, we believe in the power of visual storytelling. Our team of passionate photographers and filmmakers are dedicated to capturing the essence of every moment, creating timeless pieces that evoke emotion and tell your unique story.
              </p>
              <p className="text-gray-700 mb-8">
                With over a decade of experience in the industry, we've had the privilege of working with diverse clients across various genres, from intimate weddings to high-profile fashion editorials and commercial projects.
              </p>
              <Link
                href="/about"
                className="inline-block bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
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

      {/* Testimonials */}
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

      {/* CTA Section */}
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
    </>
  );
}