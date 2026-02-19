import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-40">
      <input
        type="text"
        placeholder="Search"
        className="w-full h-8 rounded-full border border-white/15 bg-white/8 pl-8 pr-3 py-2 text-xs text-white placeholder:text-white/60 outline-none backdrop-blur-sm transition-colors duration-300 focus:border-amber-200/45 focus:bg-white/12"
      />

      <div className="absolute left-2 top-1/2 -translate-y-1/2 text-white/70">
        <Search size={14} />
      </div>
    </div>
  );
};

export default SearchBar;
