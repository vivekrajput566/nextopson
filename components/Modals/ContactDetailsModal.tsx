"use client"
import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Loader from '../loader/Loader';



const ContactDetailsModal = ({setIsContactDetails,personalDetails}:any) => {
    console.log(personalDetails,"from modal");

  
    
    const [isDetails,setIsDetails]=useState(false)
    
    return (
       <>
       <div className="h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.7)] fixed top-0 left-0  flex justify-center items-center z-30">
            <div className="xl:w-[35%] md:w-[50%] w-[90%] sm:w-[70%] h-auto   sm:px-5  py-5 flex flex-col justify-end gap-y-3 min-h-30">
                <div className="w-full flex justify-between items-center cursor-pointer">
                    <h4 className='text-white md:text-xl sm:text-base text-sm font-semibold'>You are requesting to view advertisers details</h4>
                    <button
                    onClick={()=>setIsContactDetails(false)}
                     className="  rounded-full flex justify-center items-center cursor-pointer">
                        <RxCross2 className=" font-bold sm:text-2xl text-xl text-white "/>
                    </button>
                </div>
               {  personalDetails?<div className="flex flex-col gap-y-2 w-full h-auto bg-white   sm:px-5 px-3 py-5  ">
                    {!(personalDetails?.username==="null")&&
                    <div className='flex items-center gap-1'>
                    <h4 className='sm:text-base text-sm font-semibold'>Name :</h4>
                    <h4 className='text-gray-600 font-medium sm:text-base text-sm'>{personalDetails?.username}</h4>
                    </div>}
                    <div className='flex items-center gap-1'>
                    <h4 className='sm:text-base text-sm font-semibold'>Address:</h4>
                    <h4 className='text-gray-600 font-medium sm:text-base text-sm'>{personalDetails?.address}</h4>
                    </div>
                    {/* {contactno} */}
                    {/* {personalDetails?.contactno==="null"} */}
                    <div className='flex items-center gap-1'>
                    <h4 className='sm:text-base text-sm font-semibold'>Phone number :</h4>
                    <h4 className='text-gray-600 font-medium sm:text-base text-sm'>{personalDetails?.contactno==="null"?personalDetails?.mobileno:personalDetails?.contactno}</h4>
                    </div>
                    {/* <h4>sonal123@gmail.com</h4>
                    <h4>1234567890</h4>
                    <h4>dfds fdgd dgd dfg</h4> */}
                </div>
                 :
             <div className=' bg-white min-h-[100px] flex items-center justify-center'><Loader/></div>
              
                }

            </div>
        </div>
        
        {/* <div className='border border-[red]'><Loader/></div>
        } */}
       </>
    )
}

export default ContactDetailsModal