"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { fadeInUp, staggerContainer } from '../shared/animations';

export default function HeroSection() {
    // For the scroll-based zoom effect
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // Transform the scale based on scroll position
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // For the image slider
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const heroImages = [
        "/images/home.png",
        "/images/home1.png",
        "/images/home2.png",
        "/images/home3.png"
    ];

    // Auto-rotate images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={sectionRef} className="h-screen relative flex items-center justify-center overflow-hidden">
            {/* Background Image Slider */}
            <div className="absolute inset-0 z-0">
                {heroImages.map((image, index) => (
                    <motion.div
                        key={image}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: index === currentImageIndex ? 1 : 0,
                            scale: index === currentImageIndex ? 1 : 1.05
                        }}
                        transition={{
                            opacity: { duration: 1.5, ease: "easeInOut" },
                            scale: { duration: 6, ease: "easeOut" }
                        }}
                        className="absolute inset-0"
                    >
                        <motion.img
                            src={image}
                            alt={`Hero background ${index + 1}`}
                            className="w-full h-full object-cover"
                            style={{ scale }}
                        />
                    </motion.div>
                ))}

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-50" />
                <motion.div
                    className="absolute inset-0 bg-black/50"
                    style={{ opacity }}
                />
            </div>

            {/* Image transition indicators */}
            {/*<div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
         {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "w-8 bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))} 
      </div>*/}

            {/* Hero Content 
            <motion.div
                className="container mx-auto px-4 relative z-10 text-center"
                style={{ opacity }}
            >
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
            </motion.div> */}

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white z-20"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    );
}