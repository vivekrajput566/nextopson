import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductCarousel = () => {
  return (
    <div className={`px-body flex flex-col gap-10`}>
        <h2 className={`text-3xl font-bold`}>Top Projects</h2>
        <div className='grid grid-cols-4 gap-x-4'> 
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>

        </div>
    </div>
  )
}

export default ProductCarousel