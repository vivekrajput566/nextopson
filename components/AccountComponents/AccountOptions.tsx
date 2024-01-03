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
import { RiEdit2Fill } from "react-icons/ri";


const optionStyle = "flex items-center lg:gap-x-3 gap-x-2  lg:text-sm text-xs font-semibold py-5  cursor-pointer border-b border-b-[#EEF0F5]";

const AccountOptions = () => {
    const params = useSearchParams();
const currTab = params.get("tab");
  return (
    <>
    <div className="sm:block  hidden w-[100%] filter-border  h-full  ">
        {/* <div><h1 className='text-xl font-bold'>My Account</h1></div> */}
      {/* top section  */}
      <div className={`flex flex-col  border border-[#EEF0F5] `}>
      {/* <div className="flex flex-col gap-2  bg-primary px-3 py-5 ">
        <div className="flex justify-center relative  rounded-full bg-white px-3 py-3">
          <div className="flex  items-center lg:gap-3 gap-1 relative w-full  rounded-full">
        <div className='rounded-full p-1 border border-[#EEEEEE]'>
              <div className="h-[62px] w-[62px] rounded-full  z-10">
                <Image
                  src={profilePic}
                  alt=""
                  height={1000}
                  width={1000}
                  className="h-[100%] w-[100%] object-fill  rounded-full"
                />
              </div>
              </div>
              <div className='' >
                <h3 className='text-base font-bold text-black'>Hello, Arjun Rawat</h3>
                <p className='text-[#555555] lg:text-sm text-xs  overflow-wrap break-word' >rajun.rawat@gmail.com</p>
              </div>
             
          </div>
        </div>
       
      
      </div> */}
        <div className="flex flex-col items-center mt-5 mb-7">
          <div className="border border-[#EEEEEE] rounded-full p-2 mb-2">
            <div className=" rounded-full h-[110px] w-[110px] border border-primary relative">
              {/* <Image
                src={(isClient && userData?.dP) || constant.errImage}
                alt=""
                width={1000}
                height={1000}
                style={{ aspectRatio: "auto", width: "110px", height: "110px" }}
                className="rounded-full"
              /> */}
              <div className="absolute bottom-0 right-0">
                <input
                  placeholder="Destination Image"
                  type="file"
                  accept="image/*"
                  // onChange={async (e) => {
                  
                  //   await uploadTask(e.target.files[0]);
                  // }}
                  id="Destination-Image"
                  className="w-full hover:cursor-pointer   outline-none px-[10px] py-[7px] hidden rounded-md "
                />
                {/* <label htmlFor='Destination-Image' className='hover:cursor-pointer '>v</label> */}
                <label
                  htmlFor="Destination-Image"
                  className="hover:cursor-pointer h-[30px] w-[30px] rounded-full border border-[#EEEEEE] bg-white flex justify-center items-center"
                >
                  <RiEdit2Fill className="text-primary text-xl" />
                </label>
              </div>
            </div>
          </div>
          <h5 className="text-secondary font-semibold text-sm mb-1">
          
            Arjun Rawat
          </h5>
          <h6 className="text-[#555555] font-medium text-sm">
            {/* {isClient && userData?.email} */}
            rajun.rawat@gmail.com
          </h6>
        </div>
      <div className=" flex flex-col    px-5">
        {/* option  */}
        <Link href={{ pathname: "/account", query: { tab: "my-profile" } }}   
        className={`${optionStyle} border-t border-t-[#EEF0F5] ${currTab === "my-profile" ? "text-primary" : "text-black"} `}>
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