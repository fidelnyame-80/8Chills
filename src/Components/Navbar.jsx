import { Images } from "../assets/Images";
import Menu from "./Menu";
import { useState } from "react";
import { Home, Store, Info } from "lucide-react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", icon: Home, path: "/" },
    { label: "Shop", icon: Store, path: "/Shop" },
    { label: "About", icon: Info, path: "/About" },
  ];

  return (
    <>
      <div className="absolute inset-x-0 top-0 z-30">
        <div className="hidden lg:block px-6 pt-4">
          <div className="mx-auto flex w-full max-w-4xl items-center justify-between rounded-2xl bg-black/20 px-4 py-2 backdrop-blur-md shadow-[0_10px_24px_-18px_rgba(0,0,0,0.75)]">
            <div className="flex h-12 items-center justify-center px-1 pt-[1px]">
              <img src={Images.logo2} alt="8Chills logo" className="h-[2.45rem] w-[2.3rem] object-contain translate-y-[1px]" />
            </div>
            <Menu />
            <SearchBar />
          </div>
        </div>

        <div className="relative lg:hidden">
          <div className="absolute z-20">
            <div className="flex space-x-[0rem]">
              <div className="mx-5">
                <img src={Images.logo2} alt="" className="w-30 h-25 object-cover" />
              </div>

              <div className="space-y-1.5 lg:hidden pl-35 pt-8" onClick={() => setOpen(!open)}>
                <div
                  className={`bg-white/80 rounded w-10 h-1 ${
                    open ? "rotate-[45deg] transform translate-y-3 duration-300 transition-all" : ""
                  }`}
                ></div>
                <div className={`bg-white/80 rounded w-10 h-1 ${open ? "opacity-0" : "opacity-100"}`}></div>
                <div
                  className={`bg-white/80 rounded w-10 h-1 ${
                    open ? "rotate-[-45deg] transform -translate-y-2 duration-300 transition-all" : ""
                  }`}
                ></div>
              </div>
            </div>

            <div
              className={`bg-zinc-900/95 border border-zinc-700 lg:hidden md:hidden shadow-xl flex flex-col w-50 px-6 transform translate-x-12 place-self-end py-4 text-xl text-zinc-100 ${
                open ? "opacity" : "hidden"
              }`}
            >
              <div
                onClick={() => setOpen(!open)}
              >
                {menuItems.map(({ label, icon: Icon, path }) => (
                  <Link key={label} to={path} className="flex items-center gap-3 py-3">
                    <Icon size={18} className="text-zinc-200" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
