import React from 'react'

const Menu = () => {
    const menuItems = ['HOME','SHOP','ABOUT']
    return (
        <>
        <div className='flex lg:space-x-20 '>
{menuItems.map((item) =>(
    <p key={item} className='text-white/70'>
        {item}
    </p>
))}
        </div>
        </>)
}

export default Menu