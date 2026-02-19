import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1600&auto=format&fit=crop",
      title: "Premium Liquor Collection",
      subtitle: "Curated Excellence for the Distinguished Palate",
      ctaText: "Explore Collection",
    },
    {
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1600&auto=format&fit=crop",
      title: "Spirits That Define Moments",
      subtitle: "Crafted for Connoisseurs, Made for Memories",
      ctaText: "Shop Premium",
    },
    {
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&auto=format&fit=crop",
      title: "Elevate Every Occasion",
      subtitle: "From Celebration to Sophistication",
      ctaText: "Discover Now",
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(timer);
  }, [slides.length]);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event) => setIsDesktop(event.matches);

    setIsDesktop(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const entryOffset = isDesktop ? 10 : 30;
  const entryDuration = isDesktop ? 0.4 : 0.8;

  return (
    <div className="relative w-full h-screen lg:h-[34rem] xl:h-[35rem] overflow-hidden">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0">
            <img
              src={slides[activeSlide].image}
              alt={slides[activeSlide].title}
              className="w-full h-full object-cover lg:contrast-[1.12] lg:brightness-[0.72] lg:saturate-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/58 via-black/36 to-black/72"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:hidden"></div>
            <div className="hidden lg:block absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-black/78 via-black/50 to-transparent"></div>
            <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(0,0,0,0)_18%,rgba(0,0,0,0.38)_100%)]"></div>
            <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 lg:h-36 bg-gradient-to-t from-black/95 via-black/70 to-transparent backdrop-blur-[2px]"></div>
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-6xl mx-auto px-4 lg:px-8 xl:px-10 w-full">
              <div className="max-w-3xl lg:max-w-[36rem] xl:max-w-[38rem] lg:pl-1">
                <motion.div
                  initial={{ opacity: 0, y: entryOffset }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: entryDuration, delay: 0.06, ease: "easeOut" }}
                  className="hidden lg:flex lg:items-center lg:gap-3 lg:mb-4"
                >
                  <span className="text-[0.66rem] uppercase tracking-[0.24em] text-amber-200/80">Curated Reserve</span>
                  <span className="h-px w-12 bg-amber-200/45"></span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: entryOffset }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: entryDuration, delay: 0.1, ease: "easeOut" }}
                  className="text-2xl md:text-5xl lg:text-[3.35rem] xl:text-[3.55rem] font-light lg:font-semibold lg:font-serif text-white mb-4 md:mb-6 lg:mb-5 leading-tight lg:leading-[1.03] lg:tracking-[0.005em]"
                  style={{ fontFamily: "serif" }}
                >
                  {slides[activeSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: entryOffset }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: entryDuration, delay: 0.2, ease: "easeOut" }}
                  className="text-lg md:text-xl lg:text-[0.95rem] text-gray-200 font-light lg:font-normal mb-8 md:mb-12 lg:mb-8 leading-relaxed lg:leading-6 lg:tracking-[0.028em] lg:max-w-[30rem]"
                >
                  {slides[activeSlide].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: entryOffset }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: entryDuration, delay: 0.3, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    to="/Shop"
                    className="btn-arcade group w-fit translate-y-15 lg:translate-y-0 lg:px-10 lg:py-[0.98rem]"
                  >
                    <span>{slides[activeSlide].ctaText}</span>
                    <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === activeSlide
                ? "h-2.5 w-11 bg-amber-100 shadow-[0_0_16px_-6px_rgba(251,191,36,0.85)]"
                : "h-2.5 w-2.5 bg-zinc-100/55 hover:bg-amber-100/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="btn-arcade-icon btn-arcade-icon-sm hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20"
        aria-label="Previous slide"
      >
        <ChevronRight size={18} className="rotate-180" />
      </button>

      <button
        onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
        className="btn-arcade-icon btn-arcade-icon-sm hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={18} />
      </button>

    </div>
  );
};

export default Hero;
