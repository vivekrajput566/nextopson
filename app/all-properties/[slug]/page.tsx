import AllProperty from '@/components/PropertyDetails/AllProperty'
import React from 'react'

const AllPropertyPage = ({ params }: any) => {
  console.log("from AllPropertyPage",params);
  
  return (
    <div>
        <AllProperty params={params}/>
    </div>
  )
}

export default AllPropertyPage