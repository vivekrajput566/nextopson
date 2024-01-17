"use client"
import React from 'react'
import PropertyDetailsCard from './PropertyDetailsCard'
import { useQuery } from '@tanstack/react-query';
import { fetchSingleCityData } from '@/services/database';

const AllProperty = ({ params }: any) => {
  console.log(params.slug,"---------");
  
  const { data: singleCityData} = useQuery({
    queryKey: ["city", params?.slug],
    queryFn: () => fetchSingleCityData(params?.slug),
  });
  console.log(singleCityData,"AllProperty");
  return (
    <div className={`xl:px-[16%] px-body  md:mb-20 mb-10 `}>
          {singleCityData&&singleCityData?.cityDetails.length>0&&
        <div className='flex items-center gap-3 md:py-8 py-4 '>
            <h1 className='md:text-2xl text-xl font-semibold'>{singleCityData?.cityDetails.length} results</h1>
            <div className='w-2 border-l-2 border-l-black h-5'></div>
            <h1 className='md:text-2xl text-xl font-semibold'>Property in {params.slug}</h1>
        </div>
          }
            
        <div className='flex flex-col md:gap-10 gap-5'>
          {singleCityData&&singleCityData?.cityDetails.length>0?singleCityData?.cityDetails.map((item:any,idx:number)=>{
            return <div key={idx}>
              <PropertyDetailsCard singleCity={item}/>
               </div>
          })
          :
          <div className='w-full flex justify-center text-[red] text-2xl font-semibold h-[40vh]  items-center md:mt-20 mt-10'>Coming Soon !</div>
        }
        {/* <PropertyDetailsCard/>
        <PropertyDetailsCard/>
        <PropertyDetailsCard/>
        <PropertyDetailsCard/> */}

        </div>
        </div>
  )
}

export default AllProperty