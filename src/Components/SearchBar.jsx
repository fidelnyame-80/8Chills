import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <>
      <div className="relative w-50">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 bg-white/10 text-white rounded-full pl-10 pr-3 py-2 outline-none " 
        />
        
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70">
          <Search size={18} />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
