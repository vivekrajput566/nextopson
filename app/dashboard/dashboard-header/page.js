'use client'
import React from 'react'
import { CiBellOn } from "react-icons/ci";
import { FiAlignLeft } from "react-icons/fi";
import SideBarMenu from './../sideBarMenu/page';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';


function DashboardHeader() {

   
  
  return (
    <>

    
    <div className='flex justify-between items-center px-6 py-4 pt-4 shadow-md  '>

      <div className='lg:hidden'>
         
       <SideBarMenu />

       </div>

       <div className='hidden lg:block'>
         
       <div className="company-name-logo-body text-2xl font-semibold whitespace-nowrap text-black">

Dashboard

</div>

       </div>
        

        

        <div className=' w-1/2 hidden md:block'>

        <form>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only ">
        Search
      </label>
      <div className="relative w-full" >
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block outline-none border-2 w-full p-4 ps-10 text-sm text-gray-900 border border-gray-500 rounded-lg "
          placeholder="Search Into Dashboard"
          required
        />
       
      </div>
    </form>
        </div>


        <div className='relative flex gap- '>

        <CiBellOn  size={30}/>
        <span className=" flex absolute right-0 ">
            
        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
        </span>

        </div>

        

    </div>
    
    
    </>
  )
}

export default DashboardHeader