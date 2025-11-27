import React from 'react';
import { ArrowRight } from 'lucide-react'; // assuming you're using lucide-react
import { Images } from '../assets/Images';

const ShopNowButton = ({bg}) => {
  return (
    <button
      className="relative flex items-center justify-between px-2  bg-cover bg-center text-black font-bold text-lg rounded-xl w-[12rem] h-[3rem] shadow-xl "
      style={{ backgroundImage: `url(${bg})`}} // replace with your image
    >
      {/* Text */}
      <span style={{ fontFamily: 'Lucida Handwriting, cursive', fontWeight:900 }} className='text-[1.2rem] font-[900]'>SHOP NOW</span>

      {/* Arrow */}
      <span className=" flex items-center justify-center w-8 h-8 bg-white rounded-full">
        <ArrowRight className="w-4 h-4 text-black" />
      </span>
    </button>
  );
};

export default ShopNowButton;
