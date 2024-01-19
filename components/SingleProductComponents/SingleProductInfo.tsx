"use client"
import React from 'react'
import ProductDescription from './ProductDescription'
import ProductQualities from './ProductQualities'
import RelatedProducts from './RelatedProducts'
import { useQuery } from '@tanstack/react-query'
import { fetchSinglePropertyData } from '@/services/database'
import ProductCarousel from '../HomeComponents/ProductCarousel'

const SingleProductInfo = ({ params }: any) => {
  const { data: singlePropertyData} = useQuery({
    queryKey: ["property", params?.slug],
    queryFn: () => fetchSinglePropertyData(params?.slug),
  });
  console.log(singlePropertyData,"SingleProductInfo");
  
  return (
    <div className='flex flex-col sm:gap-20 gap-10 '>
        <ProductDescription singlePropertyData={singlePropertyData}/>
        {/* <ProductQualities singlePropertyData={singlePropertyData}/> */}
        <ProductCarousel title={'Related Products'} />
        {/* <RelatedProducts title="Related Products"/> */}
    </div>
  )
}

export default SingleProductInfo