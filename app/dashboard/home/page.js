import React from 'react'
import CardDataStats from '../CardDataStats'
import Image from 'next/image'

function Home() {



  return (

        <>
            <div className='flex flex-col'>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 text-black">
            
                 <div className="rounded-lg  border border-stroke bg-white py-6 px-20 shadow-lg outline-2 ">
                <div className="flex h-11.5 w-11.5 px-4 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <Image
                        className="object-cover rounded-sm  "
                        src="/dashboard/impression.png"
                        alt=""
                        width={60} 
                        height={60} 
                        
                        />
                </div>

                <div className="mt-4 flex items-center justify-center">
                    <div>
                    <h4 className="text-title-md text-center text-xl font-bold text-black ">
                        400K
                    </h4>
                    <span className="text-sm font-medium">Total Impression</span>
                    </div>

                
                </div>
                </div>



                <div className="rounded-lg  border border-stroke bg-white py-6 px-20 shadow-lg outline-2 ">
                <div className="flex h-11.5 w-11.5 px-4 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <Image
                        className="object-cover rounded-sm  "
                        src="/dashboard/click.png"
                        alt=""
                        width={60} 
                        height={60} 
                        
                        />
                </div>

                <div className="mt-4 flex items-center justify-center">
                    <div>
                    <h4 className="text-title-md text-center text-xl font-bold text-black ">
                        200K
                    </h4>
                    <span className="text-sm font-medium">Total Clicks</span>
                    </div>

                
                </div>
                </div>



                <div className="rounded-lg  border border-stroke bg-white py-6 px-20 shadow-lg outline-2 ">
                <div className="flex h-11.5 w-11.5 px-4 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <Image
                        className="object-cover rounded-sm  "
                        src="/dashboard/listing.png"
                        alt=""
                        width={60} 
                        height={60} 
                        
                        />
                </div>

                <div className="mt-4 flex items-center justify-center">
                    <div>
                    <h4 className="text-title-md text-center text-xl font-bold text-black ">
                        135
                    </h4>
                    <span className="text-sm font-medium">Total  Listing</span>
                    </div>

                
                </div>
                </div>



                <div className="rounded-lg  border border-stroke bg-white py-6 px-20 shadow-lg outline-2 ">
                <div className="flex h-11.5 w-11.5 px-4 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <Image
                        className="object-cover rounded-sm  "
                        src="/dashboard/Enquiry.png"
                        alt=""
                        width={60} 
                        height={60} 
                        
                        />
                </div>

                <div className="mt-4 flex items-center justify-center">
                    <div>
                    <h4 className="text-title-md text-center text-xl font-bold text-black ">
                        400K
                    </h4>
                    <span className="text-sm font-medium">Total Enquiry</span>
                    </div>

                
                </div>
                </div>


    
            
            
            </div>

            </div>


            

        </>


  )
}

export default Home