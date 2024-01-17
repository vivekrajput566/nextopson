

"use client";
import React, { useState } from 'react';
import { IoChevronDownOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdOutlineMyLocation } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import Link from 'next/link';


const data = [
  { name: "Buy" },
  { name: "Rent" },
  { name: "Sell" },
  { name: "Commercial" },
];

const searchDummyData=[
  {id:1,name:"ayush"},
  {id:2,name:"sonal"},
  {id:3,name:"nitin"},
  {id:4,name:"sweety"},
  {id:5,name:"saloni"},
  {id:6,name:"neha"},
  {id:7,name:"jyoti"},
  {id:8,name:"joy"},
  {id:9,name:"harsh"},
  {id:10,name:"seema"},
  {id:11,name:"sfgfdg"},
  {id:12,name:"deeksha"},
  {id:13,name:"priyanshi"}
]

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState("Buy");
  const [searchResults, setSearchResults] = useState([])

  const [searchedTerm, setSearchedTerm] = useState("")
  const [isSearchResult, setIsSearchResults] = useState(false)
  const [isNoResultVisible, setIsNoResultVisible] = useState(false);


  const handleTabClick = (name:any) => {
    setActiveTab(name);
  };

  const renderSearchResults = (searchTerm: any) => {
    // console.log("searchTerm",searchTerm);
    if (searchTerm && searchDummyData && searchDummyData.length > 0) {
      const res: any = searchDummyData.filter((item: any, idx: number) => {
        if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return item;
        }
      });
      setIsSearchResults(true);
      setSearchResults(res);
      setIsNoResultVisible(res.length === 0);
    } else {
      setIsSearchResults(false);
      setSearchResults([]);
      setIsNoResultVisible(false);
    }
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
          <div className={`md:w-fit w-full border-r border-r-[#F5F5F5] pr-5 text-gray-500 flex items-center gap-1 md:py-5 py-3 `}>
            <h4 className={`md:text-base text-sm font-medium`}>All Residential</h4>
            <div>
              <IoChevronDownOutline className={`text-gray-600 text-base mt-1`} />
            </div>
          </div>
          <div className={' flex relative gap-3 items-center  2xl:w-[60%] md:w-[50%] w-[100%]  '}>
            <div className={`flex relative gap-3 items-center  w-[100%]`}>
            <FiSearch className={`text-gray-500 text-xl`}/>
            <input
             value={searchedTerm}
             onChange={(e) => {
               setSearchedTerm(e.target.value)
               renderSearchResults(e.target.value)
             }} 
            type="text" 
            placeholder='Search here...' 
            className='outline-0 w-[100%] text-sm md:py-0 py-4'/>
          </div>
          {searchedTerm &&
              <div onClick={() => setSearchedTerm("")} className="flex items-center justify-center cursor-pointer">
                <RxCross1 className=" text-[red] text-base" />
              </div>
            }
          {searchedTerm && isSearchResult && searchResults && searchResults.length > 0 &&
              <div className="max-h-[300px]  overflow-y-scroll shadow-xl flex flex-col gap-2   absolute -left-7 top-[42px]  rounded-sm z-10 bg-white  w-[100%]">
                {
                  searchResults && searchResults.length > 0 && searchResults.map((item: any, idx: any) => {
                    return <Link href={`/all-properties`}
                    onClick={()=>console.log("clicked")
                    }
                    key={idx}
                      // onClick={async () => onTagHandler(item)}
                      className="text-sm bg-white w-full py-1.5   cursor-pointer border-t border-t-gray-200  px-6">
                      {item.name}
                    </Link>
                  })
                }
              </div>
            }
            {searchedTerm && isNoResultVisible && (
              <div className=" absolute -left-7 top-[42px] px-3 py-3 rounded-sm z-10 bg-white shadow-xl  w-[100%] text-sm  ">
                No results found with &#8223;{searchedTerm}&#8221;
              </div>
            )}
          </div>

         <div className={'md:w-fit w-full flex md:justify-start justify-between  gap-3 items-center   mb-3 '}>
           <div className={'flex  gap-1 items-center  '}>
            <div><MdOutlineMyLocation /></div>
            <h5 className='font-semibold sm:text-base text-sm'>Near me</h5>
          </div>
          <button className={`bg-primary text-white px-5 py-2 sm:text-base text-sm font-semibold rounded-md`}>
            Search
          </button></div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
