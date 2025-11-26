import { Images } from '../assets/Images'
import Menu from './Menu'
import Button from './button'
import { useState } from 'react'
import { Home, Store, Info } from 'lucide-react'
import SearchBar from './SearchBar'


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const menuItems = [
  { label: "Home", icon: Home },
  { label: "Shop", icon: Store },
  { label: "About", icon: Info },
];
    return (
        <>
        <div className='relative'>
<div className='absolute z-20'>
   

<div className='flex space-x-[0rem] lg:space-x-[10rem] lg:mx-20'>
                <div className='mx-5'>
                    {/* logo */}
                    <img src={Images.logo2} alt="" className='w-30 h-25 object-cover lg:w-15 lg:h-20' />
                </div>

                <div className='hidden lg:block md:block place-self-center ml-30'>
                    <Menu />
                </div>

                
            {/* Searchbar */}
            <div className='absolute hidden lg:block ml-[45rem] mt-4.5 '>
                <SearchBar />
            </div>

                {/* hamburger menu */}
                <div className='space-y-1.5  lg:hidden pl-35 pt-8 '
                    onClick={() => setOpen(!open)}
                >
                    <div className={`bg-white/80 rounded w-10 h-1 ${open ? 'rotate-[45deg]  transform translate-y-3 duration-300 transition-all' : ''}`}></div>
                    <div className={`bg-white/80 rounded w-10 h-1  ${open ? 'opacity-0' : 'opacity-100'}`}></div>
                    <div className={`bg-white/80 rounded w-10 h-1 ${open ? 'rotate-[-45deg]  transform -translate-y-2 duration-300 transition-all ' : ''}`}></div>


                </div>



                
            </div>
            {/* hamMenu items */}
            <div className={`bg-white lg:hidden md:hidden shadow-xl  flex flex-col w-50 px-6 transform translate-x-12 place-self-end py-4 text-xl ${open ? 'opacity' : 'hidden'}`}>
                <div className={` `}>
                <div className=''
                    onClick={() => setOpen(!open)}
                >
                     {menuItems.map(({ label, icon: Icon }) => (
      <p key={label} className="flex items-center gap-3 py-3">
        <Icon size={18} className="text-black" />
        {label}
      </p>
    ))}
                </div>
            </div>
            </div>

            

            
        </div>
             {/* <div className='absolute w-full h-20 lg:h-15 mt-2 backdrop-blur lg:bg-white/25 z-10 rounded-full bg-white/20'></div> */}

        </div>
        
            
        </>
    )
}

export default Navbar