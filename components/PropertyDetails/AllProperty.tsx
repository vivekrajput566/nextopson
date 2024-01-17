"use client"
import React from 'react'
import PropertyDetailsCard from './PropertyDetailsCard'

const AllProperty = () => {
  return (
    <div className={`xl:px-[16%] px-body  md:mb-20 mb-10 `}>
        <div className='flex items-center gap-3 md:py-8 py-4 '>
            <h1 className='md:text-2xl text-xl font-semibold'>1232 results</h1>
            <div className='w-2 border-l-2 border-l-black h-5'></div>
            <h1 className='md:text-2xl text-xl font-semibold'>Property in Delhi</h1>
        </div>
        <div className='flex flex-col md:gap-10 gap-5'>
        <PropertyDetailsCard/>
        <PropertyDetailsCard/>
        <PropertyDetailsCard/>
        <PropertyDetailsCard/>

        </div>
        </div>
  )
}

export default AllProperty