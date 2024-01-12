"use client"
import React from 'react'
import ProductDescription from './ProductDescription'
import ProductQualities from './ProductQualities'
import RelatedProducts from './RelatedProducts'
import { useQuery } from '@tanstack/react-query'
import { fetchSinglePropertyData } from '@/services/database'

const SingleProductInfo = ({ params }: any) => {
  const { data: singlePropertyData} = useQuery({
    queryKey: ["property", params?.slug],
    queryFn: () => fetchSinglePropertyData(params?.slug),
  });
  console.log(singlePropertyData,"SingleProductInfo");
  
  return (
    <div>
        <ProductDescription singlePropertyData={singlePropertyData}/>
        <ProductQualities singlePropertyData={singlePropertyData}/>
        <RelatedProducts title="Related Products"/>
    </div>
  )
}

export default SingleProductInfo