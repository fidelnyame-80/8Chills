import React from 'react'
import { Images } from '../assets/Images'
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react'
import { useRef } from "react";
import { motion } from "framer-motion";


const Body = () => {
  const scrollContainerRef = useRef(null);
  
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const products = [
    {
      name: "JOHNNIE WALKER BLACK LABEL",
      price: "$42.00",
      image: Images.blackLabel,   // ← change path
    },
    {
      name: "CLASE AZUL REPOSADO",
      price: "$169.00",
      image: Images.claseAzul,
    },
    {
      name: "HENNESSY XO",
      price: "$219.00",
      image: Images.henessy,
    },
    {
      name: "DON JULIO 1942",
      price: "$189.00",
      image: Images.donJulio,
    },
  ];
 return (
  <>
    <div className='w-[] h-full relative'>

      <div className='mt-10'>
        <div className=''>
          <motion.h2
            className='mx-2 uppercase text-[1.5rem] font-[700] text-stone-700 mb-5 ml-43'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.8 }}
          >
            The best Liquor deals in Accra
            <hr className='w-45' />
          </motion.h2>
        </div>

        <div>
          <motion.p
            className='text-stone-700 mx-15'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.8 }}
          >
            Discover Accra's most trusted source for premium liquor. From top-shelf classics to rare finds, we deliver quality, authenticity, and unbeatable value every single time.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.8 }}
      >
        <div className='text-stone-800 place-self-center mt-10 text-2xl font-[600]'>
          DISCOVER
        </div>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-4 py-12 lg:scale-90">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT CARD – HENNESSY */}
          <motion.div 
            className="relative w-full overflow-hidden bg-gradient-to-br from-amber-950 via-amber-900 to-black text-white shadow-2xl aspect-[4/5] md:aspect-auto h-[30rem]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative p-6 p-8 flex flex-col justify-between h-full">
              <div>
                <h2 className="mt-3 lg:mt-1 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  LIVE YOUR MOMENT
                </h2>
                <p className="mt-6 sm:mt-6 text-md sm:text-base opacity-90 leading-relaxed w-25 lg:w-40 lg:text-xl">
                  An exclusive discovery for every unique occasion
                </p>
              </div>

              <button className="mt-8 sm:mt-10 px-6 sm:px-8 py-3 border border-white/60 rounded-full text-sm uppercase tracking-wider hover:bg-white/10 transition">
                Discover the collection
              </button>
            </div>

            <img
              src={Images.henessy}
              alt="Hennessy bottle"
              className="absolute bottom-30 right-2 w-44 h-50 lg:w-60 lg:h-60 -translate-x-1 lg:mr-5 drop-shadow-2xl object-contain pointer-events-none object-cover mr-1 lg:mb-2"
            />
          </motion.div>

          {/* RIGHT CARD – JOHNNIE WALKER BLACK LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <div className="relative w-full overflow-hidden bg-gradient-to-tr from-black via-slate-900 to-neutral-800 text-white shadow-2xl aspect-[4/5] md:aspect-auto h-[30rem]">
              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-medium">Staff Pick</p>
                  <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    BLACK<br />LABEL
                  </h2>
                  <p className="mt-6 sm:mt-6 text-md sm:text-base opacity-90 leading-relaxed w-23 lg:w-40">
                    The iconic blend of over 40 whiskies, aged 12 years. Rich, smoky, unforgettable.
                  </p>
                </div>

                <button className="mt-8 sm:mt-10 flex items-center gap-3 text-sm uppercase tracking-wider hover:gap-5 transition-all duration-300">
                  Shop now
                  <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                    <ArrowRight className="w-4 h-4 text-black" />
                  </span>
                </button>
              </div>

              <img
                src={Images.blackLabel}
                alt="Johnnie Walker Black Label"
                className="absolute bottom-30 right-2 w-44 h-50 lg:w-60 -translate-x-1 drop-shadow-2xl object-contain pointer-events-none object-cover mr-1"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full overflow-hidden bg-gray-50 py-12">
        <div className="max-w-7xl lg:max-w-2xl mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-2xl sm:text-3xl font-light tracking-widest text-gray-800 mb-10 text-center sm:text-left"
          >
            FEATURED PRODUCTS
          </motion.h2>

          <div className="w-full bg-white py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">

              {/* Section Title */}
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-12 md:mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.1 }}
              >
                Popular Liquor
              </motion.h2>

              {/* Carousel Container */}
              <div className="relative">
                {/* Left Button */}
                <button
                  onClick={() => scroll("left")}
                  className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition"
                  aria-label="Previous products"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Right Button */}
                <button
                  onClick={() => scroll("right")}
                  className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition"
                  aria-label="Next products"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Products */}
                <div
                  ref={scrollContainerRef}
                  className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <div className="flex gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">

                    {/* Product 1 - Black Label */}
                    <div className="shrink-0 w-[85%] sm:w-[70%] md:w-auto snap-center">
                      <div className="bg-gray-50 rounded-lg p-6 group hover:shadow-xl transition-shadow duration-300">
                        <div className="aspect-3/4 bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                          <img
                            src={Images.blackLabel}
                            alt="Johnnie Walker Black Label"
                            className="w-full h-full object-contain p-4"
                          />
                        </div>
                        <h3 className="text-sm md:text-base font-light text-gray-800 mb-2 text-center">
                          Johnnie Walker Black Label
                        </h3>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-normal text-gray-900">GHC 450</p>
                          <button className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                            <ShoppingCart size={16} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Product 2 - Clase Azul */}
                    <div className="shrink-0 w-[85%] sm:w-[70%] md:w-auto snap-center">
                      <div className="bg-gray-50 rounded-lg p-6 group hover:shadow-xl transition-shadow duration-300">
                        <div className="aspect-3/4 bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                          <img
                            src={Images.claseAzul}
                            alt="Clase Azul Reposado"
                            className="w-full h-full object-contain p-4"
                          />
                        </div>
                        <h3 className="text-sm md:text-base font-light text-gray-800 mb-2 text-center">
                          Clase Azul Reposado
                        </h3>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-normal text-gray-900">GHC 1200</p>
                          <button className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                            <ShoppingCart size={16} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Product 3 - Hennessy XO */}
                    <div className="shrink-0 w-[85%] sm:w-[70%] md:w-auto snap-center">
                      <div className="bg-gray-50 rounded-lg p-6 group hover:shadow-xl transition-shadow duration-300">
                        <div className="aspect-3/4 bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                          <img
                            src={Images.henessy}
                            alt="Hennessy XO"
                            className="w-full h-full object-contain p-4"
                          />
                        </div>
                        <h3 className="text-sm md:text-base font-light text-gray-800 mb-2 text-center">
                          Hennessy XO
                        </h3>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-normal text-gray-900">GHC 2800</p>
                          <button className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                            <ShoppingCart size={16} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Product 4 - Don Julio */}
                    <div className="shrink-0 w-[85%] sm:w-[70%] md:w-auto snap-center">
                      <div className="bg-gray-50 rounded-lg p-6 group hover:shadow-xl transition-shadow duration-300">
                        <div className="aspect-3/4 bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                          <img
                            src={Images.donJulio}
                            alt="Don Julio 1942"
                            className="w-full h-full object-contain p-4"
                          />
                        </div>
                        <h3 className="text-sm md:text-base font-light text-gray-800 mb-2 text-center">
                          Don Julio 1942
                        </h3>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-normal text-gray-900">GHC 1800</p>
                          <button className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                            <ShoppingCart size={16} />
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Mobile Dots */}
              <div className="flex md:hidden justify-center gap-2 mt-6">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </>
)
}

        export default Body;