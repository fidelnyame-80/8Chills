import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const menuItems = [
    { item: 'HOME', path: '/' },
    { item: 'SHOP', path: '/shop' },
    { item: 'ABOUT', path: '/about' },
  ];

  return (
    <div className='flex lg:space-x-20'>
      {menuItems.map(({ item, path }) => (
        <Link 
          key={path} 
          to={path} 
          className='text-white/70 hover:text-white transition'
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
