import React from 'react'
import ProductDescription from './ProductDescription'
import ProductQualities from './ProductQualities'
import RelatedProducts from './RelatedProducts'

const SingleProductInfo = () => {
  return (
    <div>
        <ProductDescription/>
        <ProductQualities/>
        <RelatedProducts title="Related Products"/>
    </div>
  )
}

export default SingleProductInfo