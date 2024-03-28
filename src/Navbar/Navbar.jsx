import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { ReactTyped, Typed } from "react-typed";
const Navbar = () => {
  return (
    <>
      <div className="max-w-[100%] p-3 border-b-[1px] border-gray md:grid grid-cols-8 justify-center sticky top-[0px] bg-white z-10">
        <div>
          <h1 className="text-[35px] font-bold text-[#f8cb46]">blink<span className="text-[#54b226]">it</span></h1>
          
        </div>
        <div className="text-black col-span-2 ">
          <h1 className="font-bold">Delivery in 8 minutes</h1>
          <p className="text-[12px]"> Delhi, India</p>
        </div>
        <div className="col-span-3">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <CiSearch />
            </span>
            <ReactTyped
         strings={[
           "Search 'Rice'...",
          "Search 'Curd'...",
          "Search 'Egg'...",
          "Search 'Bread'...",
          "Search 'Chips'...",
          "Search 'Milk'...",
         ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
    </ReactTyped>
          </label>
        </div>
        <div className="ml-[25px]">
          <h1 className="text-[25px]">Login</h1>
        </div>
        <div >
          <button type="button" className="inline bg-[#0c831f] w-[60%] rounded flex cursor-pointer justify-center align-center font-bold text-white p-2" disabled>
              <BsCart3 className="text-white text-[20px] mr-1 font-bold-800 mt-1" />
                 My Cart
             </button>
           </div>
      </div>
    </>
  );
};

export default Navbar;
