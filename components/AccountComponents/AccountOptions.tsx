"use client";
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { useRouter, useSearchParams } from "next/navigation";
// import profilePic from "../../images/Ellipse 77 (1).svg"
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { AiOutlineMessage } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { IoStarOutline } from "react-icons/io5";
import { PiTerminalWindow } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa6";
import { IoBookmarkOutline } from "react-icons/io5";

const optionStyle = "flex items-center lg:gap-x-3 gap-x-2  lg:text-sm text-xs font-semibold py-5  cursor-pointer border-b border-b-[#EEF0F5]";

const AccountOptions = () => {
    const params = useSearchParams();
const currTab = params.get("tab");
  return (
    <>
    <div className="sm:block  hidden w-[100%] filter-border  h-full  ">
        {/* <div><h1 className='text-xl font-bold'>My Account</h1></div> */}
      {/* top section  */}
      <div className={`flex flex-col `}>
      <div className="flex flex-col gap-2  bg-primary px-3 py-5 ">
        <div className="flex justify-center relative  rounded-full bg-white px-3 py-3">
          <div className="flex  items-center lg:gap-3 gap-1 relative w-full  rounded-full">
        <div className='rounded-full p-1 border border-[#EEEEEE]'>
              <div className="h-[62px] w-[62px] rounded-full  z-10">
                {/* <Image
                  src={profilePic}
                  alt=""
                  height={1000}
                  width={1000}
                  className="h-[100%] w-[100%] object-fill  rounded-full"
                /> */}
              </div>
              </div>
              <div className='' >
                <h3 className='text-base font-bold text-black'>Hello, Arjun Rawat</h3>
                <p className='text-[#555555] lg:text-sm text-xs  overflow-wrap break-word' >rajun.rawat@gmail.com</p>
              </div>
              {/* <div className=''>
  <h3 className='text-base font-bold text-black'>
    <span style={{ display: 'block', overflowWrap: 'break-word' }}>
      Hello, Arjun Rawat
    </span>
  </h3>
  <p className='text-[#555555] lg:text-sm text-xs '>
    <span style={{ display: 'block', overflowWrap: 'break-word' }}>
      rajun.rawat@gmail.com
    </span>
  </p>
</div> */}
          </div>
        </div>
       
      
      </div>
      <div className=" flex flex-col   border border-[#EEF0F5] px-5">
        {/* option  */}
        <Link href={{ pathname: "/account", query: { tab: "my-profile" } }}   
        className={`${optionStyle} ${currTab === "my-profile" ? "text-primary" : "text-black"} `}>
            <div>
              <RiUser3Line className="flaticon-user text-xl" />
            </div>
            <div>Profile Info</div>
        </Link>
       
       
       
        <Link href={{ pathname: "/account", query: { tab: "saved-properties" } }}   
        className={`${optionStyle} ${currTab === "my-wishlist" ? "text-primary" : "text-black"} `}>
            <div>
            <IoBookmarkOutline className="flaticon-user text-xl"/>
              {/* <GoHeart className="flaticon-user text-xl" /> */}
            </div>
            <div>Saved Properties</div>
        </Link>
       
        <Link href={{ pathname: "/account", query: { tab: "subscriptions" } }}   
        className={`${optionStyle} ${currTab === "subscriptions" ? "text-primary" : "text-black"} `}>
            <div>
              <GoBell className="flaticon-user text-xl" />
            </div>
            <div>Subscriptions</div>
        </Link>
       
        <div    
        className={`${optionStyle} ${currTab === "rate-us" ? "text-primary" : "text-black"} `}>
            <div>
            <IoStarOutline className="flaticon-user text-xl"/>
            </div>
            <div>Rate Us</div>
        </div>
        <Link href={{ pathname: "/account", query: { tab: "terms-and-policies" } }}   
        className={`${optionStyle} ${currTab === "terms-and-policies" ? "text-primary" : "text-black"} `}>
            <div>
            <PiTerminalWindow className="flaticon-user text-2xl"/>
            </div>
            <div>Terms and Policies</div>
        </Link>
        <Link href={{ pathname: "/account", query: { tab: "help-and-support" } }}   
        className={`${optionStyle} ${currTab === "help-and-support" ? "text-primary" : "text-black"} `}>
            <div>
              <AiOutlineMessage className="flaticon-user text-xl" />
            </div>
            <div>Help and Support</div>
        </Link>
       
       
      
       
     
        <button  className={` ${optionStyle}`}>
          <div><GrLogout className="flaticon-user text-xl"/></div>
          {/* <FlatIcon className="flaticon-exit text-2xl" /> */}
          <div>Log Out</div>
        </button>
      </div>
      </div>
    </div>
  </>
  )
}

export default AccountOptions