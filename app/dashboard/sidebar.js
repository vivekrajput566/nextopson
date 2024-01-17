'use client'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { CiUser } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import Image from 'next/image';
import { FiAlignLeft } from "react-icons/fi";

function Sidebar() {
    
    

  return (

    <>
    <div className='sidebar-content-body flex  w-full  h-full bg-slate-900'>

        <div className='sidebar-content flex-col  w-full '>


            <div className="company-name-logo-body flex items-center gap-4 justify-start p-4 pt-0 text-2xl lg:text-4xl font-semibold whitespace-nowrap text-white">

             NextOpson

            </div>

            <div className='user-details p-4 flex gap-4 w-full items-center border-b-2 border-slate-500 '>

                <div className='user-icon-body'>
                <Image
                        className="object-cover rounded-lg  "
                        src="/dashboard/agent.png"
                        alt=""
                        width={25} 
                        height={25} 
                        
                        />

                </div>

                <div className='user-name-body text-xl text-white capitalize'>

                        vivek rajput

                </div>

                 
            </div>

            <div className='menu-data text-white flex-col whitespace-nowrap  '>

                

            <Link href='/dashboard/home' >
                <div className='home-body flex items-center gap-4 justify-start   p-4 hover:bg-white hover:text-black'>
                    <div className='home-icon'>
                            
                     <Image
                        className="object-cover rounded-lg  "
                        src="/dashboard/home.png"
                        alt=""
                        width={25} 
                        height={25} 
                        
                        />
                    </div>
                    <div className='home-icon-name font-semibold  text-md'>
                        Home

                    </div>

                </div>

                </Link>

                <Link href='/dashboard/new-listing-form' >
                <div className='home-body flex items-center gap-4 justify-start   p-4 hover:bg-white hover:text-black'>
                    <div className='home-icon'>
                            
                    <Image
                        className="object-cover rounded-lg  "
                        src="/dashboard/Create Listing.png"
                        alt=""
                        width={25} 
                        height={25} 
                        
                        />
                    </div>
                    <div className='home-icon-name font-semibold  text-md'>
                        Create Listing

                    </div>

                </div>
                </Link>

                <Link href='/dashboard/your-listings' >
                <div className='home-body flex items-center gap-4 justify-start   p-4 hover:bg-white hover:text-black'>
                    <div className='home-icon'>
                            
                    <Image
                        className="object-cover rounded-sm  "
                        src="/dashboard/list.png"
                        alt=""
                        width={25} 
                        height={25} 
                        
                        />
                        
                    </div>
                    <div className='home-icon-name font-semibold  text-md'>
                       Your Listings

                    </div>

                </div>
                </Link>


                <Link href='/dashboard/payments' >
                <div className='home-body flex items-center gap-4 justify-start   p-4 hover:bg-white hover:text-black'>
                    <div className='home-icon'>
                            
                    <Image
                        className="object-cover rounded-sm  "
                        src="/dashboard/payment.png"
                        alt=""
                        width={25} 
                        height={25} 
                        
                        />
                    </div>
                    <div className='home-icon-name font-semibold  text-md'>
                       Payment

                    </div>

                </div>
                </Link>


                <Link href='/dashboard/notification' >
                <div className='home-body flex items-center gap-4 justify-start   p-4 hover:bg-white hover:text-black'>
                    <div className='home-icon'>
                            
                    <Image
                        className="object-cover rounded-sm "
                        src="/dashboard/notification.png"

                        alt=""
                        width={25} 
                        height={25} 
                        
                        />
                    </div>
                    <div className='home-icon-name font-semibold  text-md'>
                       Notification

                    </div>

                </div>
                </Link>


                <Link href='/dashboard/support' >                
                <div className='home-body flex items-center gap-4 justify-start   p-4 hover:bg-white hover:text-black'>
                    <div className='home-icon'>
                            
                    <Image
                        className="object-cover rounded-sm "
                        src="/dashboard/support.png"
                        alt=""
                        width={25} 
                        height={25} 
                        
                        />
                    </div>
                    <div className='home-icon-name font-semibold  text-md'>
                      Support

                    </div>

                </div>
                </Link>
                


                

            </div>
            


        </div>




    </div>

    </>
  )
}

export default Sidebar