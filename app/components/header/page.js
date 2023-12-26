'use client'
import React, { useEffect } from 'react'
import { FiAlignLeft } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { useSpring, animated } from 'react-spring';
import { FaBuilding } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";

import { MdPrivacyTip } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { RemoveLayout } from '../remove-layout';





function Header() {

    const removeLayout =RemoveLayout();
    if(!removeLayout){
        return null;
    }

    const [showMenu, setShowMenu] = useState(false);
    const [deviceHeight,setDeviceHeight] = useState(0);
    const [active, setShowMenuActive] = useState("hidden");
   

    const menuAnimation = useSpring({
       width: showMenu ? '20%' : '0%' ,
       height: deviceHeight,
       position:'absolute',
       background:'white',
       display: showMenu ? 'block' : 'none',
    });
    

    useEffect(() => {
  setDeviceHeight(window.innerHeight);
}, []);
   
    const closeMenu = () => {
       setShowMenu(false);
       console.log("closemenu here...")
       document.body.style.overflowY = 'auto';
    };
   
    const openMenu = () => {

        if(showMenu){
            closeMenu();
            return;
        }
        
        setShowMenuActive("block")
       setShowMenu(true);
       document.body.style.overflowY = 'hidden';
    };

    

  return (
   
    <>
    <div style={{position:'relative'}}>
    <div className="header-body  bg-black flex justify-between px-10 py-4 items-center">

    <div className="menu-logo-body flex gap-10  items-center">

    <div className="header-menu-body text-white " onClick={openMenu}>
    
    <FiAlignLeft size={30}/>

    </div>

    <div className="company-name-logo-body text-2xl font-semibold whitespace-nowrap text-white">

            NextProperty

    </div>

    </div>

    <div className="header-list-body flex">

    <ul className="flex space-x-8 text-md font-medium text-white">
        <li>
          <a href="#for-tenants">For Tenants</a>
        </li>
        <li>
          <a href="#for-tenantss">For Buyers</a>
        </li>
        <li>
          <a href="#for-tenantsss">For Owners</a>
        </li>
        <li>
          <a href="#for-tenantssss">For Dealers</a>
        </li>


    </ul>

    </div>


    <div className="post-property-body">
    <button className="bg-blue-700 hover:bg-white hover:text-black text-white font-md py-1 px-5 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
  POST PROPERTY
</button>

    </div>
    <div className="user-login-body text-white flex items-center justify-center space-x-2">
       <div>
       <FaRegUser />
     </div>
    <div >

    Login/Signup
    </div>
       

    </div>



</div>


 
    
      
      <animated.div style={{...menuAnimation}} className="shadow-xl" id="menu-body"   >
        
        <div onClick={closeMenu} className='text-black p-1  flex justify-end'>
        <IoClose  size={30}/>
        </div>

        <div className='menu-data text-black flex-col whitespace-nowrap '>

            <div className='home-body flex items-center gap-8 justify-start pl-3'>
            <div className='home-icon'>
                    
            <IoMdHome  size={30} />
            </div>
            <div className='home-icon-name font-semibold  text-md'>
                Home

            </div>

            </div>


            <div className='home-body flex items-center gap-8 justify-start pl-3 mt-6'>
            <div className='home-icon'>
                    
            <FaBuilding  size={30} />
            </div>
            <div className='home-icon-name font-semibold  text-md'>
                List Property

            </div>

            </div>
            

            <div className='home-body flex items-center gap-8 justify-start pl-3 mt-6'>
            <div className='home-icon'>
                    
            <MdPrivacyTip  size={30} />
            </div>
            <div className='home-icon-name font-semibold text-md'>
                Privacy Policy

            </div>

            </div>

           

            <div className='home-body flex items-center gap-8 justify-start pl-3 mt-6'>
            <div className='home-icon'>
                    
            <IoDocumentText size={30} />
            </div>
            <div className='home-icon-name font-semibold text-md'>
                About Us

            </div>

            </div>

            <div className='home-body flex items-center gap-8 justify-start pl-3 mt-6'>
            <div className='home-icon'>
                    
            <FaListAlt size={30} />
            </div>
            <div className='home-icon-name font-semibold text-md'>
                Your Listing

            </div>

            </div>


            <div className='home-body flex items-center gap-8 justify-start pl-3 mt-6'>
            <div className='home-icon'>
                    
            <IoLogIn size={30} />
            </div>
            <div className='home-icon-name font-semibold text-md'>
                Login

            </div>

            </div>

        

        </div>

    
      </animated.div>
     
    
 


    </div>
</>

  )

  
}

export default Header