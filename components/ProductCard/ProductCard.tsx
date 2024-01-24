"use client"
import React from 'react'
import Image from 'next/image'
import building from "../../images/aprt01.jpg"
import { IoStarOutline } from "react-icons/io5";
import Link from 'next/link';
import {constant} from "../../utils/constants"
import { log } from 'console';

const ProductCard = (singleProperty: any) => {
  const url=`${process.env.NEXT_PUBLIC_IMAGE_URL}/productPhotos/${singleProperty?.singleProperty?.images[0]}`
  console.log(url,"url");
  
  console.log(singleProperty,"from card");
  console.log(process.env.NEXT_PUBLIC_API_DOMAIN);
  console.log(process.env.NEXT_PUBLIC_IMAGE_URL);
  
  
  // console.log(process.env.AWS_SECRET_ACCESS_KEY+`/${singleProperty?.singleProperty?.images[0]}`,"img url");
  


  return (

    <Link href={`/product/${singleProperty?.singleProperty?.productId}`}>
      <div className='relative mb-5'>
        {/* <div className={`absolute top-3 right-3`}><IoStarOutline className={"text-xl text-white font-semibold"}/></div> */}
        <div className='project-detail-body flex  flex-col  rounded-lg justify-center shadow-md p-1 text-black' >
          <div className='project-detail-photos-body  md:h-[250px] h-[200px]'>
            <Image 
             src={singleProperty?.singleProperty&&
              singleProperty?.singleProperty?.images?.length>0?
              `${process.env.NEXT_PUBLIC_IMAGE_URL}/productPhotos/${singleProperty?.singleProperty?.images[0]}`:constant?.errImage}
            // src={building} 
            width={500} height={500} 
           
             alt='delhi property' className='object-contain rounded-md w-[100%] h-[100%]'  />
          </div>
          <div className='blabla flex flex-col gap-1   justify-start px-2 py-2 '>
            <div className='flex flex-col '>
              <div className='project-detail-name text-lg font-semibold  capitalize'>
                {singleProperty?.singleProperty?.landmark}
              </div>
              <div className='project-detail-content text-gray-500  font-medium text-sm text-light-black lowercase'>
                {singleProperty?.singleProperty?.address}
              </div>
              <div className='project-detail-content text-gray-800 font-medium text-sm   '>
                {singleProperty?.singleProperty?.bhk}BHK
              </div>
            </div>
            <div className='project-detail-content font-semibold text-md text-light-black '>
              {singleProperty?.singleProperty?.price}{""}L
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard