"use client"
import React,{FC} from 'react'
import Faq from './Faq'
import Agents from './Agents'
import ProductCarousel from './ProductCarousel'
import Categories from './Categories'
import Members from './Members'
import SearchBar from '../Navbar/SearchBar'
import SearchSection from '../Navbar/SearchSection'
interface Props{
  singlePropertyData:any
}

const HomeClient:FC<Props> = ({singlePropertyData}) => {
  console.log("hii client",singlePropertyData);
  
  return (
    <div className='flex flex-col sm:gap-14 gap-10'>
      <SearchSection/>
      <Categories/>
      <ProductCarousel singlePropertyData={singlePropertyData}/>
      <Members/>
      {/* <Agents/> */}
      <Faq/>
    </div>
  )
}

export default HomeClient