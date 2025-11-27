import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Images } from '../assets/Images';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import ShopNowButton from './ShopNow';
import { useState } from 'react';
import Navbar from './Navbar';

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <>
        <div className='relative w-full h-[100vh]'>
             {/* Navbar inside hero */}
            <div className="absolute top-0 left-0 w-full z-30 ">
                <Navbar />
            </div>
            <Swiper
                modules={[Autoplay, Pagination]}
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                autoplay={{ delay: 10000 }}
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                className="w-full h-[100vh] lg:h-[100vh]"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img src={Images.hero1} alt="hero1" className='w-full h-[100vh] absolute inset-0 object-cover z-0' />

                        {/* dark overlay */}
                        <div className="absolute inset-0 w-full h-[100vh] bg-black/35 "></div>

                        <div className='absolute w-full h-35 lg:h-10 bg-black/60 blur-xl mt-[15rem] lg:mt-[12rem] '></div>


                        {/* <div className='absolute inset-0 text-[3rem] place-self-center mt-40 text-white mx-10'>
                        <p className=''>
                            Welcome to <span className='font-[600] ml-10 bg-blue-400 text-black '>8Chills</span> Liquor Store
                        </p>
                        </div> */}

                        <div className=' bg-black/10'>
                            <TypeAnimation
                                key={activeSlide}
                                sequence={[
                                    'Welcome to 8Chills Liquor Store',
                                    3000,
                                    'Premium Liquor, made for you', 3000
                                ]}
                                wrapper="span"
                                speed={50}
                                className='absolute   uppercase inset-0 text-white flex lg:place-self-center text-[2.2rem] ml-15  lg:text-[1.8rem] my-[15rem] font-[600] place-self-center lg:my-50 lg:text-[2rem] z-0'
                                repeat={false}
                            />
                        </div>

                        <div className='absolute inset-0 z-0 mt-5 lg:mt-[20rem] place-self-center mt-[30rem]'>
                            <ShopNowButton bg={Images.buttonBg} />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative '>
                        <img src={Images.hero2} alt="" className='absolute inset-0 h-[100vh] w-full object-cover' />

                        {/* dark overlay */}
                        <div className="absolute inset-0 w-full h-[100vh] bg-black/25 "></div>

                        <div className='absolute'>
                            <motion.p
                                key={activeSlide}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                                className="text-white text-3xl mx-6 mt-[20rem] lg:text-3xl lg:mt-[15rem] lg:ml-50 place-self-center  "

                            >
                                Liquor for Every Mood, Moment & Madness.
                            </motion.p>

                        </div>


                        <div className='absolute inset-0 z-0 mt-5 lg:mt-[20rem] place-self-center mt-[30rem]'>
                            <ShopNowButton bg={Images.button2bg} />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative'>
                        <img src={Images.hero3} alt="" className='absolute inset-0 h-[100vh] w-full object-cover' />
                        {/* dark overlay */}
                        <div className="absolute inset-0 w-full h-[100vh] bg-black/25 "></div>

                        <div className='absolute'>
                            <motion.p
                                key={activeSlide}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                                className="text-white text-3xl mx-6 mt-[20rem] lg:text-3xl lg:mt-[15rem] lg:ml-[25rem] place-self-center "

                            >
                                Sip Better. Live Better.
                                
                                </motion.p>

                        </div>


                        <div className='absolute inset-0 z-0 mt-5 lg:mt-[20rem] place-self-center mt-[30rem] animate-bounce'>
                            <ShopNowButton bg={Images.buttonBg} />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

            <div 
    className="absolute inset-x-0 top-[39rem] lg:hidden z-10 h-56 lg:h-30 pointer-events-none "
    style={{
    background: 'white', // ← still match your next section’s background
    maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 1440 180%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath fill=%27black%27 d=%27M0,100 Q90,70 200,105 Q320,140 460,95 Q600,60 740,110 Q880,145 1020,100 Q1160,65 1300,115 L1440,125 L1440,180 L0,180 Z%27/%3E%3Cpath fill=%27none%27 stroke=%27%23332%27 stroke-width=%2740%27 opacity=%270.15%27 d=%27M0,100 Q90,70 200,105 Q320,140 460,95 Q600,60 740,110 Q880,145 1020,100 Q1160,65 1300,115 L1440,125%27 stroke-linecap=%22round%22/%3E%3C/svg%3E")',
    maskSize: '100% 100%',
    maskRepeat: 'no-repeat',
    maskPosition: 'bottom',
      // Optional: soft blurred edge
      maskMode: 'alpha',
      WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 1200 120%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M0,0 Q300,80 600,40 Q900,0 1200,80 L1200,120 L0,120 Z%27 fill=%27black%27/%3E%3C/svg%3E")',
    }}
  />
  {/* <div className='lg:absolute absolute lg:bg-black/80 bg-black/80 lg:z-10 z-10 lg:w-full w-full lg:h-5 h-5 lg:blur-xl blur-xl lg:top-100 top-175'></div> */}
        </div>
            
        </>
    )
}

export default Hero