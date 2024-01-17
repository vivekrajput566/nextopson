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
import Sidebar from '../sidebar';





function SideBarMenu(props) {

  //const { openMenu } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [deviceHeight,setDeviceHeight] = useState(0);
  const [active, setShowMenuActive] = useState("hidden");
 

  const menuAnimation = useSpring({
     width: showMenu ? '80%' : '0%' ,
     height: deviceHeight,
     position:'absolute',
     top:'0',
     left:'0',
     zIndex:'10',
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

<div className="menu-logo-body flex gap-2  items-center">

<div className="header-menu-body text-black " onClick={openMenu}>

<FiAlignLeft size={30}/>

</div>

<div className="company-name-logo-body text-2xl font-semibold whitespace-nowrap text-black">

        Dashboard

</div>

</div>


<animated.div style={{...menuAnimation}} className="shadow-xl bg-[#0f172a]" id="menu-body"   >
        


<div className='menu-data text-black flex-col whitespace-nowrap '>

<div onClick={closeMenu} className='text-white p-1  flex justify-end'>
<IoClose  size={30}/>
</div>
    <Sidebar />
   



</div>


</animated.div>

</>

)


}


export default SideBarMenu