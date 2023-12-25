'use client'
import React, { useState } from 'react'
import { MdLocationSearching } from "react-icons/md";


function SearchBox() {


        const [showStates, setShowStates]= useState(false);

        const showStatesCall=()=>{

            if(showStates){
                hideStatesCall();
                return;
            }    
            setShowStates(true);


        }
        const hideStatesCall=()=>{

            setShowStates(false);

        }
        


  return (
    <>
    
    <div className="search-box-body flex justify-center bg-black pt-10 pb-10 mb-10 pt-20">

        <div className="search-box w-8/12 flex ">

            

        <div id="dropdown" className={` ${showStates? 'block': 'hidden'} z-10 absolute mt-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pune</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delhi</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bangalore</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kolkata</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Chennai</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mumbai</a>
            </li>
      </ul>
    </div>

    <button
      id="dropdownDefaultButton"
        onClick={showStatesCall}
      className="text-white p-4 w-48 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg rounded-r-none text-md px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
      type="button"
    >
     Select State
      <svg
        className="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
            

            <input type="Search" className='w-2/4 h-16 rounded-lg p-4 outline-none rounded-l-none rounded-r-none text-lg font-semibold border-black text-black placeholder-black' placeholder='Search Properties Here..' />

        <div className='flex justify-center items-center bg-white w-60 text-black rounded-l-none rounded-md'>
        <MdLocationSearching  style={{color:'black'}} size={30}/>
        <div className='pl-3'>Near Me
        </div>
        </div>
      
      
        </div>

    </div>
    
    </>
  )
}

export default SearchBox