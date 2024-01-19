"use client"
import React from 'react'
import { IoBagCheckOutline } from "react-icons/io5";
import { LiaUserCircleSolid } from "react-icons/lia";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import NavCategories from './NavCategories';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { MdDashboard } from "react-icons/md";
import logo from "../../images/newLogo2.jpg"
import Image from 'next/image';
import { useScrollDirection } from "../../utils/useScroll";
import FixedNav from './FixedNav';
import { useSession } from "next-auth/react"
import {RemoveLayout} from "../../app/remove-layout"

// import {session}


const dummyDta=[
    // {icon:<IoBagCheckOutline/>,heading:"Become A Member",text:"Additional 10% off on stays"},
{icon:<HiOutlineBuildingOffice />,heading:"List Your Property",text:"Trusted by 5000 Corporates",href:"new-listing-form"},
{icon:<IoCallOutline />,heading:"0124-6201611",text:"Call us to Book now",href:"/#"}]

const NavbarClient = () => {
    const remove=RemoveLayout()
    console.log("remove",remove);
  
    
  const isScrolled = useScrollDirection();
  if(remove){
    return null
  }

  return (
    <div className=''>
        <MobileNav/>
     {isScrolled?
     <FixedNav/>
     :
     <div className=''>
     <div className={`px-body hidden md:flex items-center justify-between  bg-black `}>
         <Link href={"/"} className='w-20 h-10'>
            
     <Image src={logo} alt="logo " className=''/> 
     {/* <button className={` text-black px-6 py-2.5 rounded-md lg:text-3xl text-2xl font-semibold`}>NEXTOPSON</button> */}
     </Link>
     <div className={`flex items-center`}>
         {dummyDta.map((item:any,idx:number)=>{
             return  <Link href={`/dashboard/${item.href}`}
            //  onClick={(e)=>e.preventDefault()}
              key={idx} className='flex items-center  py-3.5  xl:px-8 lg:px-4  px-2 gap-x-3 border-r border-r-[#BFBFBF]'>
             <div className={`text-2xl font-normal text-white`}>{item.icon}</div>
             <div className={`flex flex-col `}>
                 <h2 className='text-sm font-semibold text-white'>{item.heading}</h2>
                 <p className=' text-xs text-white'>{item.text}</p>
             </div>
         </Link>
         })}
         <Link href={"/dashboard"} className='cursor-pointer'>
         <div className={`flex items-center gap-x-3  px-8 cursor-pointer`}>
             <div><MdDashboard className={`text-2xl text-white`}/></div>
             <h2 className={`text-sm font-semibold text-white`}>Dashboard</h2>
         </div>
         </Link>
        </div>
     </div>
     <NavCategories/>
     </div>
     }
    </div>
  )
}

export default NavbarClient