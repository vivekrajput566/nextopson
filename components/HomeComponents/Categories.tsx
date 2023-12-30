"use cliet"
import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'

const Categories = () => {
  return (
    <div className={`px-body flex flex-col gap-10`}>
        <h1 className={`text-3xl font-bold`}>Explore Real Estate In Popular Indian Cities</h1>
       <div className={`grid grid-cols-6 gap-x-4`}>
       <CategoryCard/>
       <CategoryCard/>
       <CategoryCard/>
       <CategoryCard/>
       <CategoryCard/>
       <CategoryCard/>
       </div>
    </div>
  )
}

export default Categories