import React from 'react'
import Image from 'next/image'



function UserListings() {
  return (
    <>

    <div className=' h-full w-full overflow-auto no-scrollbar p-4 '>

        <div className='flex justify-start text-2xl font-semibold text-black pb-6 pl-0'>
            Your Listings
        </div>

        <div className='w-full h-52 mb-10 '>
        <a href="#" className="flex flex-col h-52 w-11/12 h-52 p-2  border-l-4 border-black bg-white  shadow-xl  rounded-lg md:flex-row hover:bg-gray-200 text-black hover:text-black transition duration-700 ease-in-out hover:scale-105 ">
        <Image
       className="object-cover w-full rounded-lg md:h-auto md:w-48 "
       src="/photos/aprt01.jpg"
       alt=""
       width={140} 
       height={160} 
       
     />
            <div className="flex flex-col p-4  ">
              <div className="flex flex-col items-start">

                <h5 className="mb-2 text-lg font-bold tracking-tight ">4 Bedrooms , 3 Bathrooms, 3 Balconies with Pooja Room</h5>
                <p className="mb-3 font-normal ">Sector 23 Dwarka, Dwarka Delhi, Delhi</p>
                <h5 className="mb-2 text-lg font-bold tracking-tight ">₹3.5 Cr@ 17,500 per sq.ft.</h5>
              
              </div>
                <div className='flex justify-items-center p-4 pl-0 w-full justify-evenly gap-4 '>
                  <div className='w-full' >
                  <button className="bg-indigo-500  w-40  text-white font-bold py-2 px-4  border-blue-700 rounded">
                  EDIT
                </button>
                </div>

                <div className='w-full' >
                  <button className="bg-indigo-500 w-40  text-white font-bold py-2 px-4  border-blue-700 rounded">
                  PREVIEW
                </button>
                </div>

                <div className='w-full' >
                  <button className="bg-indigo-500 w-40  text-white font-bold py-2 px-4  border-blue-700 rounded">
                  SHARE
                </button>
                </div>

              </div>
                
            </div>

           
        </a>

        </div>



        <div className='w-full h-52 mb-10'>
        <a href="#" className="flex flex-col h-52 w-11/12 h-52 p-2 border-l-4 border-black  bg-white  shadow-xl  rounded-lg md:flex-row hover:bg-gray-200 text-black hover:text-black transition duration-700 ease-in-out hover:scale-105 ">
        <Image
       className="object-cover w-full rounded-lg md:h-auto md:w-48 "
       src="/photos/aprt03.jpg"
       alt=""
       width={140} 
       height={160} 
       
     />
            <div className="flex flex-col p-4  ">
              <div className="flex flex-col items-start">

                <h5 className="mb-2 text-lg font-bold tracking-tight ">4 Bedrooms , 3 Bathrooms, 3 Balconies with Pooja Room</h5>
                <p className="mb-3 font-normal ">Sector 23 Dwarka, Dwarka Delhi, Delhi</p>
                <h5 className="mb-2 text-lg font-bold tracking-tight ">₹3.5 Cr@ 17,500 per sq.ft.</h5>
              
              </div>
                <div className='flex justify-items-center p-4 pl-0 w-full justify-evenly  gap-4'>
                  <div className='w-full' >
                  <button className="bg-indigo-500  w-40  text-white font-bold py-2 px-4  border-blue-700 rounded">
                  EDIT
                </button>
                </div>

                <div className='w-full' >
                  <button className="bg-indigo-500 w-40  text-white font-bold py-2 px-4  border-blue-700 rounded">
                  PREVIEW
                </button>
                </div>

                <div className='w-full' >
                  <button className="bg-indigo-500 w-40  text-white font-bold py-2 px-4  border-blue-700 rounded">
                  SHARE
                </button>
                </div>

              </div>
                
            </div>

           
        </a>

        </div>




        <div className='w-full h-52 mb-10'>
        <a href="#" className="flex flex-col h-52 w-11/12 h-52 p-2  border-l-4 border-black bg-white  shadow-xl  rounded-lg md:flex-row hover:bg-gray-200 text-black hover:text-black transition duration-700 ease-in-out hover:scale-105 ">
        <Image
       className="object-cover w-full rounded-lg md:h-auto md:w-48 "
       src="/photos/aprt02.jpg"
       alt=""
       width={140} 
       height={160} 
       
     />
            <div className="flex flex-col p-4  ">
              <div className="flex flex-col items-start">

                <h5 className="mb-2 text-lg font-bold tracking-tight ">4 Bedrooms , 3 Bathrooms, 3 Balconies with Pooja Room</h5>
                <p className="mb-3 font-normal ">Sector 23 Dwarka, Dwarka Delhi, Delhi</p>
                <h5 className="mb-2 text-lg font-bold tracking-tight ">₹3.5 Cr@ 17,500 per sq.ft.</h5>
              
              </div>
                <div className='flex justify-items-center p-4 pl-0 w-full justify-evenly gap-4 '>
                  <div className='w-full' >
                  <button className="bg-indigo-500  w-40  text-white font-bold py-2 px-4  border-blue-700 rounded">
                  EDIT
                </button>
                </div>

                <div className='w-full' >
                  <button className="bg-indigo-500 w-40  text-white font-bold py-2 px-4  border-blue-700 rounded">
                  PREVIEW
                </button>
                </div>

                <div className='w-full' >
                  <button className="bg-indigo-500 w-40  text-white font-bold py-2 px-4  border-blue-700 rounded">
                  SHARE
                </button>
                </div>

              </div>
                
            </div>

           
        </a>

        </div>
        
   

    </div>

    
    </>
  )
}

export default UserListings