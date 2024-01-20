"use client"
import React from 'react'
import Image from 'next/image'
import { IoCreateOutline } from "react-icons/io5";
import '../../globals.css'
import Link from 'next/link';
import { GrView } from "react-icons/gr";
import { FaRegBuilding } from "react-icons/fa";
import { TbClick } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";


function Home() {



  return (

        <>
            <div className='flex flex-col justify-center items-center h-fit'>
            <div className="grid grid-cols-1 gap-2 w-[95%] sm:grid-cols-2 sm:gap-2 xl:grid-cols-4 2xl:gap-7.5 text-black">
            
                 <div className="box-shadow-class rounded-2xl  transition delay-100 hover:scale-105 border  bg-[#DCBFFF] py-6 px-10 md:px-20 shadow-md outline-4  ">
                <div className="flex h-11.5 w-11.5 px-4 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <GrView size={40} color="blue"/>
                </div>

                <div className="mt-4 flex items-center justify-center ">
                    <div>
                    <h4 className="text-title-md text-center text-xl font-bold text-black  ">
                        400K
                    </h4>
                    <span className="text-sm font-medium">Total Impression</span>
                    </div>

                
                </div>
                </div>



                <div className="rounded-2xl  border border-stroke transition-all delay-100 hover:scale-105 bg-[#AEDEFC] py-6 px-20 box-shadow-class  outline-2 ">
                <div className="flex h-11.5 w-11.5 px-4 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <TbClick size={40} color="blue" />
                </div>

                <div className="mt-4 flex items-center justify-center">
                    <div>
                    <h4 className="text-title-md text-center text-xl font-bold text-black ">
                        200K
                    </h4>
                    <span className="text-sm font-medium">Total Clicks</span>
                    </div>

                
                </div>
                </div>



                <div className="rounded-2xl  border border-stroke transition-all delay-100 hover:scale-105 bg-[#A4BC92] py-6 px-20 box-shadow-class  outline-2 ">
                <div className="flex h-11.5 w-11.5 px-4 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <FaRegBuilding  size={40} color="blue"/>
                </div>

                <div className="mt-4 flex items-center justify-center">
                    <div>
                    <h4 className="text-title-md text-center text-xl font-bold text-black ">
                        135
                    </h4>
                    <span className="text-sm font-medium">Total  Listing</span>
                    </div>

                
                </div>
                </div>



                <div className="rounded-2xl  border border-stroke transition-all delay-100 hover:scale-105 bg-[#FAAB78] py-6 px-20 box-shadow-class  outline-2 ">
                <div className="flex h-11.5 w-11.5 px-4 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <FaRegQuestionCircle size="40" color="blue"/>
                </div>

                <div className="mt-4 flex items-center justify-center">
                    <div>
                    <h4 className="text-title-md text-center text-xl font-bold text-black ">
                        400K
                    </h4>
                    <span className="text-sm font-medium">Total Enquiry</span>
                    </div>

                
                </div>
                </div>


    
            
            
            </div>


             <div className='border-2 border-t-1 border-l-1 rounded-xl border-b-[12px] border-r-[6px] border-black p-10 w-[98%] sm:w-3/4 m-10 flex flex-col items-center gap-8  justify-center'>

                <div className='flex justify-center text-2xl text-center text'>
                    Create New Listing For Your Next Property
                </div>

            <Link href='/dashboard/new-listing-form' >
            <button className='border-2 flex justify-center items-center gap-2 border-blue-500 font-semibold  text-blue-500 transition  delay-75 ease-in-out   hover:bg-blue-500 hover:text-white rounded-2xl  p-10  pt-5 pb-5 w-60  text-xl'>
            <IoCreateOutline size={30} />  Click Here
            </button>
            </Link>

            </div>

            </div>


           


            

        </>


  )
}

export default Home

