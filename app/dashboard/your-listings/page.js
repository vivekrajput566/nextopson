import React from 'react'
import Image from 'next/image'

function UserListings() {
  return (
    <>

    <div className='text-2xl font-semibold p-4'>
        Your Listing
      </div>
<div className="relative m-4 overflow-x-auto shadow-md sm:rounded-lg">
      
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
       
      
        <tbody>
          <tr className="bg-white border-b grid-cols-2 md:flex  dark:border-gray-100 shadow-2xl hover:bg-gray-50">
            <td className="p-4 w-5/12  ">
            <Image
              src="/photos/aprt03.jpg"
              alt="Apple Watch"
              objectFit="contain"
              width="200"
              height="200"
              className="rounded-md md:w-32"
            />
            </td>
            <td className=" w-1/2 md:w-11/12 text-[12px] md:text-[16px] py-4  font-semibold text-black">
            Dwarka Sector-14 flksdjlfk sjdflkjs lkjsdlfk jsdlkfj lskdjflk jflskdjl kfsd ;flds;flksd;flkds;flskd;f lksd;l
            </td>

         
            <td className=" w-1/12 px-6 py-4 font-semibold text-black hidden md:block">
            ₹599
            </td>
            <td className="px-6 py-4">
              <button  className="font-medium bg-blue-600 text-white px-6 py-2 rounded-lg  hover:underline text-md">Edit</button>
            </td>
          </tr>

         
          {/* Repeat similar structure for other rows */}
        </tbody>
      </table>
    </div>

    
    </>
  )
}

export default UserListings