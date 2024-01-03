"use client"
import React from 'react'
import Image from 'next/image'
import building from "../../images/aprt01.jpg"
import { IoStarOutline } from "react-icons/io5";
import Link from 'next/link';

const ProductCard = () => {
  return (
    <Link href={"/product"}>

    <div className='relative'>
        <div className={`absolute top-3 right-3`}><IoStarOutline className={"text-xl text-white font-semibold"}/></div>
         <div className='project-detail-body flex  flex-col  rounded-lg justify-center shadow-md p-1 text-black' >

<div className='project-detail-photos-body '>
        <Image src={building} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='delhi property' className='rounded-md'/>
</div>



<div className='blabla flex flex-col gap-1   justify-start px-2 py-2 '>

<div className='flex flex-col '>
<div className='project-detail-name text-lg font-semibold  '>

    Skyom Apartment 

</div>
<div className='project-detail-content text-gray-500  font-medium text-sm text-light-black '>
   Dwarka SECTOR-10, New DELHI
</div>
<div className='project-detail-content text-gray-500 font-medium text-sm  '>
  2-3BHK
</div>
</div>
<div className='project-detail-content font-semibold text-md text-light-black '>
  10-15L
</div>

</div>


</div>  
    </div>
    </Link>
  )
}

export default ProductCard