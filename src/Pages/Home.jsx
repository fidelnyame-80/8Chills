import React from 'react'
import Hero from "../Components/Hero";
import Body from "../Components/Body";             
import Testimonials from "../Components/Testimonials";  
import Newsletter from "../Components/Newsletter";      
import Footer from "../Components/Footer";              

const Home = () => {
  return (
    <div className='bg-zinc-950 text-zinc-100'>
        <div className='relative overflow-x-hidden'>
<div className='relative'>
<Hero />
<Body />
<Testimonials />
<Newsletter />
<Footer/>
</div>
</div>
    </div>
  )
}

export default Home
