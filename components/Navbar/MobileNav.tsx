"use client";
// import { useScrollDirection } from "@/utils/useScroll";
import Image from "next/image";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import SideMenu from "./SideMenu";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../images/newLogo3.jpg"
import Link from "next/link";

const MobileNav = () => {
//   const isScrolled = useScrollDirection();
//   const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div
      className={`md:hidden  flex items-center justify-between px-body  w-full min-h-[70.97px] bg-[#0d0d0d]`}
    >
       <button
        onClick={() => {
          document.body.classList.add("no-scroll");
          // dispatch(openSideMenu());
          setIsSidebarOpen(true);
        }}
      >
        <AiOutlineMenu className={"text-2xl text-white"}/>
        {/* Menu */}
      </button>
      <div className=" gap-3 flex items-center">
        <div className="">
          {/* <Image
            src={require("../../images/logo.png")}
            alt="logo"
            className="w-full h-full object-contain"
          /> */}
        <Link href={"/"} className=' '>
          <div className="w-20  flex items-center justify-center">
            
            <Image src={logo} alt="logo " className='w-[100%] h-[100%] '/> 
            </div>
            {/* <button className={` text-black px-6 py-2.5 rounded-md lg:text-3xl text-2xl font-semibold`}>NEXTOPSON</button> */}
            </Link>
        </div>
      </div>
     

      {isSidebarOpen && (
        <SideMenu
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}
    </div>
  );
};

export default MobileNav;
