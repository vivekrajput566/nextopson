"use client"
import Image from 'next/image'
import React, { FC } from 'react'
import img from "../../images/Delhi.webp"
interface Props{
  singleCategory:any
}


const CategoryCard:FC<Props> = ({singleCategory}) => {
  // console.log("from CategoryCard",singleCategory);
  
  return (
    <div className='states-detail-body flex  flex-col gap-2 items-center justify-center' >
    <div className='states-detail-photos-body '>
            <Image src={img} width={200} height={200} alt='delhi property' className='rounded-lg'/>
    </div>
    <div className='flex flex-col  justify-center items-center'>
    <h2 className='state-detail-name text-lg text-black font-semibold '>
       {singleCategory?.name}
    </h2>
    {/* <p className='state-detail-content text-light-black text-[#7E7E7E]'>
        28,00+ New Property
    </p> */}
    </div>
</div>
  )
}

export default CategoryCard
// require(`../../public/state-photos/${singleCategory.photo}`)