"use client"
import React from 'react'
import { PiUsersThreeThin } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";


const Members = () => {
  return (
   <>
     <div className='flex justify-center text-black '>
   <div className='listing-data-body   bg-[#f3f5f7]   rounded-md flex flex-col gap-10 justify-center w-full p-10'>
    <div className='listing-data-body-heading justify-center text-3xl  flex  font-bold '> 
  Some Numbers That Matters 
    </div>
        <div className='listing-data-section flex   justify-evenly items-center '>
            <div className="listing-data bg-purple-300	 flex flex-col justify-center items-center  p-10 rounded-xl">
                <div className='content-logo bg-transparent'>
                <PiUsersThreeThin size={200} />
                </div>
                <div className='content-no text-4xl font-semibold blackspace-nowrap dark:text-black'>
                    150,000+
                </div>
                <div className='content-name text-xl  blackspace-nowrap dark:text-black'>
                    Community Members
                </div>
            </div>
            <div className="listing-data bg-green-300 flex flex-col justify-center items-center  p-10 rounded-xl">
                <div className='content-logo'>
                <FaRegBuilding size={200} />
                </div>
                <div className='content-no text-4xl font-semibold blackspace-nowrap dark:text-black'>
                    49,000+
                </div>
                <div className='content-name text-xl font-semibold blackspace-nowrap dark:text-black'>
                    Properties Listed Today
                </div>
            </div>
            <div className="listing-data flex bg-yellow-300 flex-col justify-center items-center p-10 rounded-xl">
                <div className='content-logo'>
                <PiUsersThreeThin size={200} />
                </div>
                <div className='content-no text-4xl font-semibold blackspace-nowrap dark:text-black'>
                    150,000+
                </div>
                <div className='content-name text-xl font-semibold blackspace-nowrap dark:text-black'>
                    Community Members
                </div>
            </div>
        </div>
   </div>
    </div></>
  )
}

export default Members