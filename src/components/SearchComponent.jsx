import React from 'react';
import { IoClose } from "react-icons/io5"; 

const SearchComponent = ({ setSearchOpen }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
      <div className="absolute top-4 right-4">
        <IoClose 
          className="w-8 h-8 text-white cursor-pointer" 
          onClick={() => setSearchOpen(false)} 
        />
      </div>
      <div className="text-center">
        <input
          type="text"
          placeholder="Search here....."
          className="bg-transparent border-b-2 border-gray-500 text-4xl text-white placeholder-gray-500 outline-none"
        />
      </div>
    </div>
  );
};

export default SearchComponent;
