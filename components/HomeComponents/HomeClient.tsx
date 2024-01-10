import React from 'react'
import Faq from './Faq'
import Agents from './Agents'
import ProductCarousel from './ProductCarousel'
import Categories from './Categories'
import Members from './Members'
import SearchBar from '../Navbar/SearchBar'
import SearchSection from '../Navbar/SearchSection'

const HomeClient = () => {
  return (
    <div className='flex flex-col sm:gap-14 gap-10'>
      <SearchSection/>
      <Categories/>
      <Members/>
      <ProductCarousel/>
      <Agents/>
      <Faq/>
    </div>
  )
}

export default HomeClient