"use client"
import React from 'react'
import { PiUsersThreeThin } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";


const Members = () => {
  return (
   <>
     <div className='flex justify-center text-black  '>
   <div className='listing-data-body px-body  bg-[#f3f5f7]   rounded-md flex flex-col sm:gap-10 gap-5 justify-center w-full md:py-10 py-5'>
    <div className='listing-data-body-heading justify-center  md:text-3xl sm:text-2xl text-xl flex  font-bold '> 
  Some Numbers That Matters 
    </div>
    <div className='listing-data-section grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-y-8 gap-y-4 md:w-[80%] w-[100%]  md:mx-auto md:gap-x-32 gap-x-5 '>

        {/* <div className='listing-data-section flex md:flex-row flex-col  justify-evenly items-center '> */}
            <div className="listing-data bg-purple-300	 flex flex-col justify-center items-center  md:p-10 p-5 rounded-xl">
                <div className='content-logo bg-transparent'>
                <PiUsersThreeThin className={`md:text-[200px] sm:text-[100px] text-[80px] `} />
                </div>
                <div className='content-no md:text-4xl sm:text-2xl text-2xl font-semibold blackspace-nowrap dark:text-black'>
                    150,000+
                </div>
                <div className='content-name md:text-xl text-lg blackspace-nowrap dark:text-black'>
                    Community Members
                </div>
            </div>
            <div className="listing-data bg-green-300 flex flex-col justify-center items-center  md:p-10 p-5 rounded-xl">
                <div className='content-logo'>
                <FaRegBuilding className={`md:text-[200px] sm:text-[100px] text-[80px] `} />
                </div>
                <div className='content-no md:text-4xl sm:text-2xl text-2xl font-semibold blackspace-nowrap dark:text-black'>
                    49,000+
                </div>
                <div className='content-name md:text-xl text-lg font-semibold blackspace-nowrap dark:text-black'>
                    Properties Listed Today
                </div>
            </div>
            <div className="listing-data flex bg-yellow-300 flex-col justify-center items-center md:p-10 p-5 rounded-xl">
                <div className='content-logo'>
                <PiUsersThreeThin className={`md:text-[200px] sm:text-[100px] text-[80px] `} />
                </div>
                <div className='content-no md:text-4xl sm:text-2xl text-2xl font-semibold blackspace-nowrap dark:text-black'>
                    150,000+
                </div>
                <div className='content-name md:text-xl text-lg font-semibold blackspace-nowrap dark:text-black'>
                    Community Members
                </div>
            </div>
        </div>
   </div>
    </div></>
  )
}

export default Members