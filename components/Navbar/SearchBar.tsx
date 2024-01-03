

"use client";
import React, { useState } from 'react';
import { IoChevronDownOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdOutlineMyLocation } from "react-icons/md";

const data = [
  { name: "Buy" },
  { name: "Rent" },
  { name: "Sell" },
  { name: "Invest" },
  { name: "Commercial" },
  { name: "Other" },
  { name: "More" }
];

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState("Buy");

  const handleTabClick = (name:any) => {
    setActiveTab(name);
  };
  

  return (
    <div className='py-10'>
      <div className={`md:w-[70%] w-[90%] mx-auto bg-white   rounded-md`}>
        <div className={`flex justify-between  border-b border-b-[#F5F5F5] md:px-5 px-3 `}>
          {data.map((item, idx) => {
            return (
              <div
              key={idx}
              onClick={() => handleTabClick(item.name)}
              className={`cursor-pointer text-[#555555] font-medium py-5 sm:text-sm text-xs md:text-base ${
                activeTab === item.name
                  ? "border-b-[3px] border-b-primary text-black"
                  : ""
              }`}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div className='flex md:flex-row flex-col items-center md:justify-between  md:px-5 px-3'>
          <div className={`md:w-fit w-full border-r border-r-[#F5F5F5] pr-5 text-gray-500 flex items-center gap-1 md:py-5 py-3 border border-[red]`}>
            <h4 className={`md:text-base text-sm font-medium`}>All Residential</h4>
            <div>
              <IoChevronDownOutline className={`text-gray-600 text-base mt-1`} />
            </div>
          </div>
          <div className={' flex  gap-3 items-center  2xl:w-[60%] md:w-[50%] w-[100%] '}>
            <FiSearch className={`text-gray-500 text-xl`}/>
            <input type="text" placeholder='Search here...' className='outline-0 w-[100%] text-sm md:py-0 py-4'/>
          </div>
         <div className={'md:w-fit w-full flex md:justify-start justify-between  gap-3 items-center  '}>
           <div className={'flex  gap-1 items-center  '}>
            <div><MdOutlineMyLocation /></div>
            <h5 className='font-semibold text-base'>Near me</h5>
          </div>
          <button className={`bg-primary text-white px-5 py-2 text-base font-semibold rounded-md`}>
            Search
          </button></div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
