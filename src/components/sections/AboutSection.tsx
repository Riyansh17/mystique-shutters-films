"use client";
import { useRef, useEffect } from 'react';
import Link from 'next/link';

export default function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Autoplay the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay to make text more readable */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
            Passion Behind the Lens
          </h2>
          <p className="text-gray-100 text-lg mb-8">
            At Mystique Shutters Films, we capture the essence of every moment, 
            creating timeless visual stories that evoke emotion.
          </p>
          <Link
            href="/about"
            className="inline-block bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-md font-medium transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}