import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Award, Clock, Shield } from 'lucide-react';
import Navbar from './Navbar';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Placeholder images - replace with your actual Images object
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1600&auto=format&fit=crop',
      title: 'Premium Liquor Collection',
      subtitle: 'Curated Excellence for the Distinguished Palate',
      ctaText: 'Explore Collection'
    },
    {
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1600&auto=format&fit=crop',
      title: 'Spirits That Define Moments',
      subtitle: 'Crafted for Connoisseurs, Made for Memories',
      ctaText: 'Shop Premium'
    },
    {
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&auto=format&fit=crop',
      title: 'Elevate Every Occasion',
      subtitle: 'From Celebration to Sophistication',
      ctaText: 'Discover Now'
    }
  ];

  // Auto-slide every 6 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Add your Navbar component here when integrating into your project */}
      <Navbar />
      
      {/* Slides Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slides[activeSlide].image}
              alt={slides[activeSlide].title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay - darker for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            {/* Side Gradient for extra depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-5xl mx-auto px-4 lg:px-8 w-full">
              <div className="max-w-3xl lg:place-self-center">
                {/* Title - Font: Playfair Display or similar elegant serif */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-3xl font-light text-white mb-4 md:mb-6 leading-tight"
                  style={{ fontFamily: 'serif' }}
                >
                  {slides[activeSlide].title}
                </motion.h1>

                {/* Subtitle - Font: Light sans-serif */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg md:text-xl lg:text-xl text-gray-200 font-light mb-8 md:mb-12 leading-relaxed"
                >
                  {slides[activeSlide].subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="group px-8 py-4 bg-white text-black rounded-lg font-normal text-base hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl">
                    <span>{slides[activeSlide].ctaText}</span>
                    <ChevronRight 
                      size={20} 
                      className="group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </button>
                  
                  <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-normal text-base hover:bg-white hover:text-black transition-all duration-300 shadow-xl">
                    View Catalog
                  </button>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-12 md:mt-16 flex flex-wrap gap-6 md:gap-8"
                >
                  <div className="flex items-center space-x-2 text-white/90">
                    <Award size={20} />
                    <span className="text-sm font-light">Premium Selection</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/90">
                    <Clock size={20} />
                    <span className="text-sm font-light">Fast Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/90">
                    <Shield size={20} />
                    <span className="text-sm font-light">Secure Shopping</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === activeSlide
                ? 'w-12 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Navigation Arrows - Desktop Only */}
      <button
        onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 text-white"
        aria-label="Previous slide"
      >
        <ChevronRight size={24} className="rotate-180" />
      </button>
      
      <button
        onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 text-white"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Decorative Curved Bottom Edge */}
      <div 
        className="absolute -bottom-13 left-0 right-0 h-32 md:h-40 pointer-events-none"
        style={{
          background: 'white',
          maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 1440 100%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath fill=%27black%27 d=%27M0,50 Q360,0 720,50 Q1080,100 1440,50 L1440,100 L0,100 Z%27/%3E%3C/svg%3E")',
          maskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          maskPosition: 'bottom',
          WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 1440 100%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath fill=%27black%27 d=%27M0,50 Q360,0 720,50 Q1080,100 1440,50 L1440,100 L0,100 Z%27/%3E%3C/svg%3E")',
          WebkitMaskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'bottom',
        }}
      />
    </div>
  );
};

export default Hero;