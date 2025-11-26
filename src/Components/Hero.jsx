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

           {/* Beautiful responsive wave that hides on large screens */}
<div className="lg:hidden pointer-events-none">
  <svg
    viewBox="0 0 1440 320"
    className="w-full h-32 md:h-48 -mb-1"
    preserveAspectRatio="none"
  >
    <path
      fill="#ffffff"   // ← change to your next section's background color
      d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
  </svg>
</div>
  {/* <div className='lg:absolute absolute lg:bg-black/80 bg-black/80 lg:z-10 z-10 lg:w-full w-full lg:h-5 h-5 lg:blur-xl blur-xl lg:top-100 top-175'></div> */}
        </div>
            
        </>
    )
}

export default Hero