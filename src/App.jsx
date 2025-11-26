import React from 'react'
import Hero from './Components/Hero'
import { Images } from './assets/Images'
import Body from './Components/Body'
import Testimonials from './Components/Testimonials'
import Newsletter from './Components/Newsletter'
import Footer from './Components/Footer'


const App = () => {
  return (
<>

<div className='relative overflow-x-hidden'>
<div className='relative'>
  <div className="absolute z-100 "
     >
    <img src={Images.bodyImg} alt="" className='w-[12rem] h-[12rem] translate-y-[42rem] object-cover lg:hidden -translate-x-3' />
</div>
<Hero />
<Body />
<Testimonials />
<Newsletter />
<Footer/>
</div>




</div>

</>

  )
}

export default App