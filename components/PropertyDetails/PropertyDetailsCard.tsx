"use client"
import React, { useState } from 'react'
import building from "../../images/aprt01.jpg"
import Image from 'next/image'
import { FaPhoneAlt } from "react-icons/fa";
import ContactDetailsModal from '../Modals/ContactDetailsModal';
import Link from 'next/link';



const PropertyDetailsCard = ({ singleCity }: any) => {
  console.log("PropertyDetailsCard",singleCity);
  
  const [isContactDetails,setIsContactDetails]=useState(false)
  return (
    <div className='flex md:flex-row flex-col gap-x-5 gap-y-3  sm:p-4 p-3 rounded-xl shadow-md'>
<div className='md:w-[40%] w-[100%] h-auto'>
<Image src={building} alt='property-image' className='h-[280px] w-[100%] object-fill  sm:rounded-xl rounded-tl-xl rounded-tr-xl '/>
</div>
<div className='md:w-[60%] w-[100%] flex flex-col justify-between gap-4 '>
  <div className=' flex flex-col gap-4 '>
  <div>
  <h3 className={`font-bold md:text-base text-sm`}>{singleCity?.address}</h3>
  <p className={`text-[#616874] md:text-base text-sm `}>3 BHK Independent Builder Floor in Uday Park, South Delhi</p>
    
  </div>
  <div className={`flex gap-10 items-center  `}>
    <div><h1 className='md:font-semibold font-bold md:text-xl text-lg'>{singleCity?.price}</h1></div>
    <div className={`flex  gap-3 items-center `}>
      <h1 className='md:font-semibold font-bold md:text-xl text-lg'>{singleCity?.bhk?`${singleCity?.bhk}BHK`:""}</h1>
      <p className={`text-[#616874] md:text-lg text-base `}>(3 Baths)</p>
    </div>
  </div>
  <p className={`text-[#616874] md:text-base text-sm `}>The property is a very nice and good location and near the metro station and market. Additional details : Piped gas facility is...</p>
  </div>
  <div className={`flex gap-3 items-center sm:flex-row flex-col `}>
    <Link href={`/product/${singleCity?.productId}`}>
  <button
   className={`sm:w-fit w-full text-primary border border-primary text-base font-semibold px-5 py-2 rounded-md`}>
    View Details
    </button>
    </Link>
  <button
  onClick={()=>setIsContactDetails(true)}

   className={`sm:w-fit w-full flex gap-2 justify-center items-center text-white bg-primary border border-primary text-base font-semibold px-6 py-2 rounded-md`}><FaPhoneAlt /> <span>Contact</span></button>

</div>
</div>
{isContactDetails&&<ContactDetailsModal setIsContactDetails={setIsContactDetails}/>}

    </div>
  )
}

export default PropertyDetailsCard