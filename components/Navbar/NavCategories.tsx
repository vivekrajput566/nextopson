import React from 'react'
import { IoChevronDownOutline } from "react-icons/io5";

const DummyData=[{name:"Bangalore"},{name:"Chennai"},{name:"Delhi"},{name:"Delhi"},{name:"Bangalore"},{name:"Bangalore"},{name:"Bangalore"}]

const NavCategories = () => {
  return (
    <div className='md:block hidden bg-[#f3f5f7]'>
        <div className={`px-body flex justify-center items-center gap-x-4 border border-[red]`}>
            {DummyData.map((item:any,idx:number)=>{
                return <div key={idx} className={`flex gap-2 items-center  xl:px-10 px-4 py-3`}>
                    <h4 className={`text-gray-600 text-sm`}>{item.name}</h4>
                    <div><IoChevronDownOutline className={`text-[#727272] text-base`}/></div>
                </div>
            })}
        </div>
    </div>
  )
}

export default NavCategories