import React from 'react'
import { IoBagCheckOutline } from "react-icons/io5";
import { LiaUserCircleSolid } from "react-icons/lia";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import NavCategories from './NavCategories';
import Link from 'next/link';


const dummyDta=[
    // {icon:<IoBagCheckOutline/>,heading:"Become A Member",text:"Additional 10% off on stays"},
{icon:<HiOutlineBuildingOffice />,heading:"List Your Property",text:"Trusted by 5000 Corporates"},
{icon:<IoCallOutline />,heading:"0124-6201611",text:"Call us to Book now"}]

const NavbarClient = () => {
  return (
    <div className=''>
        <div className={`px-body flex items-center justify-between `}>
            <Link href={"/"}>
        <button className={` text-black px-6 py-2.5 rounded-md text-3xl font-semibold`}>NEXTOPSON</button>
        </Link>
        <div className={`flex items-center`}>
            {dummyDta.map((item:any,idx:number)=>{
                return  <div key={idx} className='flex items-center  py-3.5  px-8 gap-x-3 border-r border-r-[#BFBFBF]'>
                <div className={`text-2xl font-normal`}>{item.icon}</div>
                <div className={`flex flex-col `}>
                    <h2 className='text-sm font-semibold'>{item.heading}</h2>
                    <p className='text-[#999999] text-xs'>{item.text}</p>
                </div>
            </div>
            })}
            <div className={`flex items-center gap-x-3  px-8`}>
                <div><FaUserCircle className={`text-2xl`}/></div>
                <h2 className={`text-sm font-semibold`}>Login/Signup</h2>
            </div>
           </div>
        </div>
        <NavCategories/>
    </div>
  )
}

export default NavbarClient