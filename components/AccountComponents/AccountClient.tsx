"use client"
import React from 'react'
import AccountOptions from './AccountOptions'
import Image from "next/image";
import { useRouter, useSearchParams } from 'next/navigation'

import bannerImage from "../../images/homeBanner.png";
import ProfileInfo from './ProfileInfo';


import Help from './Help';
import Subscriptions from './Subscriptions';
import AccountOptionsMobile from './AccountOptionsMobile';
import SavedProperties from './SavedProperties';

const AccountClient = () => {
    const params = useSearchParams()
  const currTab = params.get("tab")
  console.log('currTab',currTab);
  
  return (
    <>
    
    <div className='px-body flex flex-col  md:pb-20 pb-5 relative z-10 '>
        <div className='  md:py-12 py-6 flex flex-col md:gap-7 gap-4'>
     <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold '>My Account</h1>
<div className={`flex w-[100%] md:flex-row flex-col gap-y-6  xl:gap-x-16 gap-x-7`}>
     <div className={`xl:w-[25%] md:w-[35%] w-[100%]`}>
     {/* <h1 className='text-xl font-bold'>My Account</h1> */}
      <AccountOptions />
      <AccountOptionsMobile/>
      </div>
      {currTab === "my-profile" && <ProfileInfo />}
      {currTab === "saved-properties" && <SavedProperties />}
      {/* {currTab === "my-order" && <MyOrders />} */}
      {/* {currTab === "address" && <Address/>} */}
      {currTab === "help-and-support" && <Help/>}
      {currTab === "subscriptions" && <Subscriptions/>}
      {/* {currTab === "my-wallet" && <MyWallet/>} */}
      {/* {currTab === "family" && <Family/>} */}
      </div>
      </div>
    </div>
  </>
  )
}

export default AccountClient