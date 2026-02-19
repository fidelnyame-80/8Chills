import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuItems = [
    { item: "HOME", path: "/" },
    { item: "SHOP", path: "/shop" },
    { item: "ABOUT", path: "/about" },
  ];

  return (
    <nav className="flex items-center lg:space-x-7">
      {menuItems.map(({ item, path }) => (
        <Link
          key={path}
          to={path}
          className="group relative text-[0.62rem] tracking-[0.16em] text-white/80 transition-colors duration-300 ease-out hover:text-white"
        >
          {item}
          <span className="pointer-events-none absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-amber-200/55 transition-transform duration-[320ms] ease-out group-hover:scale-x-100"></span>
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
