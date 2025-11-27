import React from 'react'
import { Images } from '../assets/Images'
import { Marquee } from '../assets/Marquee'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";


const Body = () => {
  
  const marqueeImages = [
    { src: Marquee.celebration, label: 'celebration' },
    { src: Marquee.celebration2, label: 'celebration' },
    { src: Marquee.vodka, label: 'vodka' },
    { src: Marquee.whisky1, label: 'whisky' }
  ]

  const shuffledMarquee = [...marqueeImages].sort(() => Math.random() - 0.5);

  const marqueeItems = [...shuffledMarquee, ...shuffledMarquee]

  const x = useMotionValue(0);
const controls = useAnimation();
const containerRef = useRef(null);

useEffect(() => {
  let isPaused = false;

  const startScrolling = () => {
    if (isPaused) return;

    controls.start({
      x: -1920,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 160,
          ease: "linear",
        },
      },
    });
  };

  const pause = () => {
    isPaused = true;
    controls.stop();
  };

  const resume = () => {
    isPaused = false;
    startScrolling();
  };

  // Start it
  startScrolling();

  const el = containerRef.current;
  if (!el) return;

  // Desktop hover
  el.addEventListener("mouseenter", pause);
  el.addEventListener("mouseleave", resume);

  // Mobile touch — NOW WORKS 100%
  el.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Critical: stops page scroll
    pause();
  }, { passive: false });

  el.addEventListener("touchmove", (e) => {
    e.preventDefault(); // Keeps it paused while finger moves
  }, { passive: false });

  el.addEventListener("touchend", resume);
  el.addEventListener("touchcancel", resume);

  return () => {
    el.removeEventListener("mouseenter", pause);
    el.removeEventListener("mouseleave", resume);
    el.removeEventListener("touchstart", pause);
    el.removeEventListener("touchmove", pause);
    el.removeEventListener("touchend", resume);
    el.removeEventListener("touchcancel", resume);
  };
}, [controls]);

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
      <div className=' w-[] h-full relative '  >

        <div className='mt-10  '>
          <div className=''>
            <motion.h2
              className='mx-2 uppercase text-[1.5rem] font-[700] text-stone-700 mb-5 ml-43'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.8 }} >
              The best Liquor deals in Accra

              <hr className='w-45' />
            </motion.h2>



          </div>

          <div >
            <motion.p
              className='text-stone-700 mx-15'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.8 }}>
              Discover Accra’s most trusted source for premium liquor. From top-shelf classics to rare finds, we deliver quality, authenticity, and unbeatable value every single time.
            </motion.p>
          </div>
        </div>

        <motion.div
        initial={{opacity:0, y: 50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.8, ease: 'easeOut'}}
        viewport={{once:false, amount: 0.8}}
        >
          <div className='text-stone-800 place-self-center mt-10 text-2xl font-[600] '>
            DISCOVER
          </div>
        </motion.div>


        <div className="w-full max-w-7xl  mx-auto px-4 py-12 lg:scale-90">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* LEFT CARD – HENNESSY */}
            <motion.div className="relative w-full overflow-hidden  bg-gradient-to-br from-amber-950 via-amber-900 to-black text-white shadow-2xl 
                    aspect-[4/5] md:aspect-auto h-[30rem]"
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
                className="absolute bottom-30 right-2 w-44 h-50 lg:w-60 lg:h-60 -translate-x-1 lg:mr-5   drop-shadow-2xl object-contain pointer-events-none object-cover mr-1 lg:mb-2"
              />
            </motion.div>


            {/* RIGHT CARD – JOHNNIE WALKER BLACK LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <div className="relative w-full overflow-hidden bg-gradient-to-tr from-black via-slate-900 to-neutral-800 text-white shadow-2xl 
                    aspect-[4/5] md:aspect-auto h-[30rem]">
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
                    <span className=" flex items-center justify-center w-8 h-8 bg-white rounded-full">
                      <ArrowRight className="w-4 h-4 text-black" />
                    </span>
                  </button>
                </div>

                <img
                  src={Images.blackLabel}
                  alt="Johnnie Walker Black Label"
                  className="absolute bottom-30 right-2 w-44 h-50 lg:w-60 -translate-x-1   drop-shadow-2xl object-contain pointer-events-none object-cover mr-1"
                />
              </div>
            </motion.div>
          </div>

        </div>

        {/* <motion.div className='mx-10 mt-10 overflow-x-hidden'
        initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.8 }}
        >
         <motion.div
         className='flex gap-2'
         animate={{x:['0%', '-100%']}} 
         transition={{repeat: Infinity, duration: 30, ease: 'linear'}}
         >
          {marqueeItems.map((item,i)=>(
            <div
            key={i}
            className="relative w-64 h-40 shrink-0  overflow-hidden"
          >
            <img
            key={i}
            src={item.src}
            alt={item.label}
            className='w-full h-full object-cover'/>
            <motion.div
            className="absolute inset-0 flex items-center justify-center bg-stone-700/70 text-stone-200 font-semibold text-xl"
            key={i}
            >
              {item.label}
            </motion.div>
          </div>))}
         </motion.div>
         
        </motion.div> */}

        
<div className="w-full overflow-hidden bg-gray-50 py-12 ">
  <div className="max-w-7xl lg:max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2
     initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
    className="text-2xl sm:text-3xl font-light tracking-widest text-gray-800 mb-10 text-center sm:text-left">
      FEATURED PRODUCTS
    </motion.h2>

    {/* This container handles pause on hover & touch */}
    <div 
     onMouseEnter={() => document.querySelector('.animate-marquee')?.classList.add('paused')}
  onMouseLeave={() => document.querySelector('.animate-marquee')?.classList.remove('paused')}
  onTouchStart={() => document.querySelector('.animate-marquee')?.classList.add('paused')}
  onTouchEnd={() => document.querySelector('.animate-marquee')?.classList.remove('paused')} >
      <div className="flex gap-6 sm:gap-8 lg:gap-12 animate-marquee">
        {/* Original + duplicate for seamless loop */}
        {[...products, ...products].map((product, index) => (
          <div key={index} className="flex-shrink-0 w-64 sm:w-72 lg:w-80">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 sm:h-[480px] object-cover rounded-xl"
            />
            <p className="mt-4 text-center text-sm sm:text-base font-medium text-gray-700">
              {product.name}
            </p>
            <p className="text-center text-lg sm:text-xl font-light text-gray-900">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Add this CSS once in your global CSS or <style> tag */}
  <style jsx global>{`
    @keyframes marquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 10s linear infinite;
    }
    .paused {
      animation-play-state: paused !important;
    }
  `}</style>
</div>




      </div>
    </>
  )
}

export default Body