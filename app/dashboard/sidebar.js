'use client'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { CiUser } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";

function Sidebar() {
    
    

  return (

    <>
    <div className='sidebar-content-body flex border-t-2   border-t-slate-600 w-full border-2 border-black h-full bg-black'>

        <div className='sidebar-content flex-col  w-full '>


            <div className="company-name-logo-body flex justify-center p-4 text-4xl font-semibold whitespace-nowrap dark:text-white">

            NextOpson

            </div>

            <div className='user-details p-4 flex gap-4 w-full items-center border-b-2 border-slate-500'>

                <div className='user-icon-body'>
                <CiUser size={30} color='yellow'/>

                </div>

                <div className='user-name-body text-xl capitalize'>

                        vivek rajput

                </div>

                 
            </div>

            <div className='menu-data text-white flex-col whitespace-nowrap p-4 '>

                

                <div className='home-body flex items-center gap-4 justify-start  mt-6'>
                    <div className='home-icon'>
                            
                    <IoCreateOutline size={30} />
                    </div>
                    <div className='home-icon-name font-semibold  text-2xl'>
                        Create New Listing

                    </div>

                </div>

                <Link href='/dashboard/your-listings' >
                <div className='home-body flex items-center gap-4 justify-start  mt-6'>
                    <div className='home-icon'>
                            
                    <IoCreateOutline size={30} />
                    </div>
                    <div className='home-icon-name font-semibold  text-2xl'>
                        Your Listing

                    </div>

                </div>
                </Link>

                <div className='home-body flex items-center gap-4 justify-start  mt-6'>
                    <div className='home-icon'>
                            
                    <IoCreateOutline size={30} />
                    </div>
                    <div className='home-icon-name font-semibold  text-2xl'>
                        Payments

                    </div>

                </div>

                <div className='home-body flex items-center gap-4 justify-start  mt-6'>
                    <div className='home-icon'>
                            
                    <IoCreateOutline size={30} />
                    </div>
                    <div className='home-icon-name font-semibold  text-2xl'>
                       Notifications

                    </div>

                </div>

                <div className='home-body flex items-center gap-4 justify-start  mt-6'>
                    <div className='home-icon'>
                            
                    <IoCreateOutline size={30} />
                    </div>
                    <div className='home-icon-name font-semibold  text-2xl'>
                        Support

                    </div>

                </div>

                


                

            </div>
            


        </div>




    </div>

    </>
  )
}

export default Sidebar