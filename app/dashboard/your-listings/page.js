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
          <tr className="bg-white border-b   dark:border-gray-100 shadow-2xl hover:bg-gray-50">
            <td className="p-4 w-1/4">
              <img src="/photos/aprt03.jpg" className=" rounded-md object-contain w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
            </td>
            <td className=" w-1/4  py-4  font-semibold text-black">
              sspple Watch
            </td>

            <td className=" w-2/6 px-6 py-4 font-semibold text-black">
              Dwarka Sector-14 flksdjlfk sjdflkjs lkjsdlfk jsdlkfj lskdjflk jflskdjl kfsd ;flds;flksd;flkds;flskd;f lksd;lfks;dlkf;s ldkf;sldkf ;sdkf; ksd;fl
            </td>
         
            <td className=" w-1/12 px-6 py-4 font-semibold text-black">
              $599
            </td>
            <td className="px-6 py-4">
              <button  className="font-medium bg-blue-600 text-white px-6 py-2 rounded-lg  hover:underline text-md">Edit</button>
            </td>
          </tr>

          <tr className="bg-white border-b  dark:border-gray-100 hover:bg-gray-50">
            <td className="p-4 w-1/4">
              <img src="/photos/aprt01.jpg" className="rounded-md object-contain w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
            </td>
            <td className=" w-1/4  py-4  font-semibold text-black">
              sspple Watch
            </td>

            <td className=" w-2/6 px-6 py-4 font-semibold text-black">
              Dwarka Sector-14 flksdjlfk sjdflkjs lkjsdlfk jsdlkfj lskdjflk jflskdjl kfsd ;flds;flksd;flkds;flskd;f lksd;lfks;dlkf;s ldkf;sldkf ;sdkf; ksd;fl
            </td>
         
            <td className=" w-1/12 px-6 py-4 font-semibold text-black">
              $599
            </td>
            <td className="px-6 py-4">
              <button  className="font-medium bg-blue-600 text-white px-6 py-2 rounded-lg  hover:underline text-md">Edit</button>
            </td>
          </tr>


          <tr className="bg-white border-b  dark:border-gray-100 hover:bg-gray-50">
            <td className="p-4 w-1/4">
              <img src="/photos/aprt02.jpg" className=" rounded-md object-contain w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
            </td>
            <td className=" w-1/4  py-4  font-semibold text-black">
              sspple Watch
            </td>

            <td className=" w-2/6 px-6 py-4 font-semibold text-black">
              Dwarka Sector-14 flksdjlfk sjdflkjs lkjsdlfk jsdlkfj lskdjflk jflskdjl kfsd ;flds;flksd;flkds;flskd;f lksd;lfks;dlkf;s ldkf;sldkf ;sdkf; ksd;fl
            </td>
         
            <td className=" w-1/12 px-6 py-4 font-semibold text-black">
              $599
            </td>
            <td className="px-6 py-4">
              <button  className="font-medium bg-blue-600 text-white px-6 py-2 rounded-lg  hover:underline text-md">Edit</button>
            </td>
          </tr>


          <tr className="bg-white border-b  dark:border-gray-100 hover:bg-gray-50">
            <td className="p-4 w-1/4">
              <img src="/photos/aprt04.jpg" className=" rounded-md object-contain w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
            </td>
            <td className=" w-1/4  py-4  font-semibold text-black">
              sspple Watch
            </td>

            <td className=" w-2/6 px-6 py-4 font-semibold text-black">
              Dwarka Sector-14 flksdjlfk sjdflkjs lkjsdlfk jsdlkfj lskdjflk jflskdjl kfsd ;flds;flksd;flkds;flskd;f lksd;lfks;dlkf;s ldkf;sldkf ;sdkf; ksd;fl
            </td>
         
            <td className=" w-1/12 px-6 py-4 font-semibold text-black">
              $599
            </td>
            <td className="px-6 py-4">
              <button  className="font-medium bg-blue-600 text-white px-6 py-2 rounded-lg  hover:underline text-md">Edit</button>
            </td>
          </tr>


          <tr className="bg-white border-b  dark:border-gray-100 hover:bg-gray-50">
            <td className="p-4 w-1/4">
              <img src="/photos/aprt05.jpg" className=" rounded-md object-contain w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
            </td>
            <td className=" w-1/4  py-4  font-semibold text-black">
              sspple Watch
            </td>

            <td className=" w-2/6 px-6 py-4 font-semibold text-black">
              Dwarka Sector-14 flksdjlfk sjdflkjs lkjsdlfk jsdlkfj lskdjflk jflskdjl kfsd ;flds;flksd;flkds;flskd;f lksd;lfks;dlkf;s ldkf;sldkf ;sdkf; ksd;fl
            </td>
         
            <td className=" w-1/12 px-6 py-4 font-semibold text-black">
              $599
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