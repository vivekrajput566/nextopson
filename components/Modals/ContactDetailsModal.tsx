"use client"
import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


const ContactDetailsModal = ({setIsContactDetails}:any) => {
    return (
        <div className="h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.7)] fixed top-0 left-0  flex justify-center items-center z-30">
            <div className="xl:w-[35%] md:w-[50%] w-[90%] sm:w-[70%] h-auto   sm:px-5  py-5 flex flex-col justify-end gap-y-3">
                <div className="w-full flex justify-between items-center cursor-pointer">
                    <h4 className='text-white text-xl font-semibold'>You are requesting to view advertisers details</h4>
                    <button
                    onClick={()=>setIsContactDetails(false)}
                     className="  rounded-full flex justify-center items-center cursor-pointer">
                        <RxCross2 className=" font-bold text-2xl text-white "/>
                    </button>
                </div>
                <div className="flex flex-col gap-y-2 w-full h-auto  bg-white  sm:px-5 px-3 py-5  ">
                    <div className='flex items-center gap-1'>
                    <h4 className='text-base font-semibold'>Name :</h4>
                    <h4 className='text-gray-600 font-medium text-base'>Sonal jaswal</h4>
                    </div>
                    <div className='flex items-center gap-1'>
                    <h4 className='text-base font-semibold'>Email :</h4>
                    <h4 className='text-gray-600 font-medium text-base'>sonal123@gmail.com</h4>
                    </div>
                    <div className='flex items-center gap-1'>
                    <h4 className='text-base font-semibold'>Phone number :</h4>
                    <h4 className='text-gray-600 font-medium text-base'>1234567890</h4>
                    </div>
                    {/* <h4>sonal123@gmail.com</h4>
                    <h4>1234567890</h4>
                    <h4>dfds fdgd dgd dfg</h4> */}
                </div>

            </div>
        </div>
    )
}

export default ContactDetailsModal