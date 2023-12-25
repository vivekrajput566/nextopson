import React from 'react'
import Image from 'next/image'

function States() {
  return (
    <>

        <div className='states-body'>

            <div className='heading-text px-10 text-4xl font-semibold blackspace-nowrap text-black dark:text-black mb-10'>
                Explore Real Estate In Popular Indian Cities


            </div>

            <div className='states-sub-body flex  px-10  overflow-auto gap-10'>

                    <div className='states-detail-body flex  flex-col items-center justify-center' >

                        <div className='states-detail-photos-body '>
                                <Image src='/state-photos/Delhi.webp' width={200} height={200} alt='delhi property' className='rounded-lg'/>
                        </div>

                        <div className='flex flex-col justify-center items-center'>

                        
                        <div className='state-detail-name text-lg text-black font-semibold'>
                    
                            New Delhi

                        </div>
                        <div className='state-detail-content text-light-black text-black'>
                            28,00+ New Property
                        </div>

                        </div>


                    </div>



                     <div className='states-detail-body flex  flex-col items-center justify-center' >

                        <div className='states-detail-photos-body '>
                                <Image src='/state-photos/Bangalore.webp' width={200} height={200} alt='delhi property' className='rounded-lg'/>
                        </div>

                        <div className='flex flex-col justify-center items-center'>

                        
                        <div className='state-detail-name text-lg text-black font-semibold'>
                    
                        Bangalore

                        </div>
                        <div className='state-detail-content text-light-black text-black'>
                            18,00+ New Property
                        </div>

                        </div>


                    </div>



                     <div className='states-detail-body flex  flex-col items-center justify-center' >

                        <div className='states-detail-photos-body '>
                                <Image src='/state-photos/Chennai.webp' width={200} height={200} alt='delhi property' className='rounded-lg'/>
                        </div>

                        <div className='flex flex-col justify-center items-center'>

                        
                        <div className='state-detail-name text-lg text-black font-semibold'>
                    
                        Chennai

                        </div>
                        <div className='state-detail-content text-light-black text-black'>
                            16,00+ New Property
                        </div>

                        </div>


                    </div>



                     <div className='states-detail-body flex  flex-col items-center justify-center' >

                        <div className='states-detail-photos-body '>
                                <Image src='/state-photos/Kolkata.webp' width={200} height={200} alt='delhi property' className='rounded-lg'/>
                        </div>

                        <div className='flex flex-col justify-center items-center'>

                        
                        <div className='state-detail-name text-lg text-black font-semibold'>
                    
                            Kolkata

                        </div>
                        <div className='state-detail-content text-light-black text-black'>
                            30,00+ New Property
                        </div>

                        </div>


                    </div>





                     <div className='states-detail-body flex  flex-col items-center justify-center' >

                        <div className='states-detail-photos-body '>
                                <Image src='/state-photos/Mumbai.webp' width={200} height={200} alt='delhi property' className='rounded-lg'/>
                        </div>

                        <div className='flex flex-col justify-center items-center'>

                        
                        <div className='state-detail-name text-lg text-black font-semibold'>
                    
                            Mumbai

                        </div>
                        <div className='state-detail-content text-light-black text-black'>
                            19,00+ New Property
                        </div>

                        </div>


                    </div>




                     <div className='states-detail-body flex  flex-col items-center justify-center' >

                        <div className='states-detail-photos-body '>
                                <Image src='/state-photos/Pune.webp' width={200} height={200} alt='delhi property' className='rounded-lg'/>
                        </div>

                        <div className='flex flex-col justify-center items-center'>

                        
                        <div className='state-detail-name text-lg text-black font-semibold'>
                    
                           Pune

                        </div>
                        <div className='state-detail-content text-light-black text-black'>
                            16,00+ New Property
                        </div>

                        </div>


                    </div>


                    

            </div>



        </div>

    </>
  )
}

export default States