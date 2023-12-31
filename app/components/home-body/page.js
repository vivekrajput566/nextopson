'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { PiUsersThreeThin } from "react-icons/pi";
import { FaBuilding } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";






function HomeBody() {

    const [faq, setFaq]= useState(1);
    const faqAns=[`We're an online platform connecting property buyers, tenants, and owners.`, `Go to "List Your Property," fill details, upload images, and submit.`,
     `We provide comprehensive support, virtual tours, detailed listings, and a responsive customer support team.`, ` List your property by visiting "List Your Property," fill out details, upload images, and submit.`]

     const [textareaValue, setTextareaValue] = useState('');

  return (
   <>
   <div className='flex justify-center text-black'>
   <div className='listing-data-body mt-10 border-2 bg-black  border-black rounded-md flex flex-col justify-center w-full p-10'>

    <div className='listing-data-body-heading justify-center text-4xl  flex mb-10 font-semibold text-white'> 
  SOME NUMBERS THAT MATTERS 

  

    </div>

 

        <div className='listing-data-section flex   justify-evenly items-center '>

            <div className="listing-data bg-purple-300	 flex flex-col justify-center items-center  p-10 rounded-xl">
                
                <div className='content-logo bg-transparent'>
                <PiUsersThreeThin size={200} />

                </div>

                <div className='content-no text-6xl font-semibold blackspace-nowrap dark:text-black'>
                    150,000+
                </div>

                <div className='content-name text-xl  blackspace-nowrap dark:text-black'>
                    Community Members
                </div>


            </div>




            <div className="listing-data bg-green-300 flex flex-col justify-center items-center  p-10 rounded-xl">
                
                <div className='content-logo'>
                <FaRegBuilding size={200} />

                </div>

                <div className='content-no text-6xl font-semibold blackspace-nowrap dark:text-black'>
                    49,000+
                </div>

                <div className='content-name text-xl font-semibold blackspace-nowrap dark:text-black'>
                    Properties Listed Today
                </div>


            </div>




            <div className="listing-data flex bg-yellow-300 flex-col justify-center items-center p-10 rounded-xl">
                
                <div className='content-logo'>
                <PiUsersThreeThin size={200} />

                </div>

                <div className='content-no text-6xl font-semibold blackspace-nowrap dark:text-black'>
                    150,000+
                </div>

                <div className='content-name text-xl font-semibold blackspace-nowrap dark:text-black'>
                    Community Members
                </div>


            </div>



        </div>






   </div>
   
    </div>


    <div className='top-project-list-body flex flex-col mt-10 m-10'>

        <div className='top-project-list-name  text-3xl flex mb-5  dark:text-black'>

            TOP PROJECTS

        </div>

        <div className='top-project-list flex justify-between gap-4'>

            <div className='project-detail-body flex  flex-col  rounded-lg justify-center shadow-md p-1 text-black' >

                <div className='project-detail-photos-body '>
                        <Image src='/photos/aprt01.jpg' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='delhi property' className='rounded-md'/>
                </div>



                <div className='blabla flex flex-col   justify-start'>


                <div className='project-detail-name text-xl font-semibold mt-1 p-1 '>

                    Skyom Apartment 

                </div>
                <div className='project-detail-content  text-md text-light-black p-1'>
                   Dwarka SECTOR-10, New DELHI
                </div>
                <div className='project-detail-content  text-md text-light-black p-1'>
                  2-3BHK
                </div>
                <div className='project-detail-content font-semibold text-md text-light-black p-1'>
                  10-15L
                </div>

                </div>


            </div>

            <div className='project-detail-body flex  flex-col  rounded-lg justify-center shadow-md p-1 text-black' >

                <div className='project-detail-photos-body '>
                        <Image src='/photos/aprt06.jpg' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='delhi property' className='rounded-md'/>
                </div>



                <div className='blabla flex flex-col   justify-start'>


                <div className='project-detail-name text-xl font-semibold mt-1 p-1 '>

                    Skyom Apartment 

                </div>
                <div className='project-detail-content  text-md text-light-black p-1'>
                   Dwarka SECTOR-10, New DELHI
                </div>
                <div className='project-detail-content  text-md text-light-black p-1'>
                  2-3BHK
                </div>
                <div className='project-detail-content font-semibold text-md text-light-black p-1'>
                  10-15L
                </div>

                </div>


            </div>
            

                  <div className='project-detail-body flex  flex-col  rounded-lg justify-center shadow-md p-1 text-black' >

                <div className='project-detail-photos-body '>
                        <Image src='/photos/aprt03.jpg' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='delhi property' className='rounded-md'/>
                </div>



                <div className='blabla flex flex-col   justify-start'>


                <div className='project-detail-name text-xl font-semibold mt-1 p-1 '>

                    Skyom Apartment 

                </div>
                <div className='project-detail-content  text-md text-light-black p-1'>
                   Dwarka SECTOR-10, New DELHI
                </div>
                <div className='project-detail-content  text-md text-light-black p-1'>
                  2-3BHK
                </div>
                <div className='project-detail-content font-semibold text-md text-light-black p-1'>
                  10-15L
                </div>

                </div>


            </div>


                <div className='project-detail-body flex  flex-col  rounded-lg justify-center shadow-md p-1 text-black' >

                <div className='project-detail-photos-body '>
                        <Image src='/photos/aprt04.jpg' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='delhi property' className='rounded-md'/>
                </div>



                <div className='blabla flex flex-col   justify-start'>


                <div className='project-detail-name text-xl font-semibold mt-1 p-1 '>

                    Skyom Apartment 

                </div>
                <div className='project-detail-content  text-md text-light-black p-1'>
                   Dwarka SECTOR-10, New DELHI
                </div>
                <div className='project-detail-content  text-md text-light-black p-1'>
                  2-3BHK
                </div>
                <div className='project-detail-content font-semibold text-md text-light-black p-1'>
                  10-15L
                </div>

                </div>


            </div>

            

        </div>


    </div>




    <div className='real-state-body '>

        <div className='real-state-content flex flex-col justify-center m-10 p-10 shadow-2xl rounded-xl '>


            <div className='real-state-text text-5xl flex justify-center font-semibold text-black p-10' >
                Real Estate Agents In Your State
            </div>

      <div className='flex justify-around'>
            <div className='block1  '>
            <a
      href="#" style={{borderRadius:'80px 10px 80px 10px'}}
      className="flex flex-col shadow-xl p-10 items-center bg-white border border-gray-200  shadow md:flex-row md:max-w-xl hover:bg-gray-100 border-gray-700 bg-green-600 hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/photos/agent01.png"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
          TOP RATED AGENTS
        </h5>
        <p className="mb-3 font-normal text-white dark:text-white">
          Agents Having Higest Rating Based On Client Reviews 
        </p>
        <button className='bg-white text-black w-40 rounded-xl font-semibold text-xl p-2'>
            Check Now
        </button>
      </div>
    </a>
            </div>


            <div className='block2  '>
            <a
      href="#" style={{borderRadius:'10px 80px 10px 80px'}}
      className="flex flex-col  p-10 items-center bg-white border border-gray-200  shadow md:flex-row md:max-w-xl hover:bg-gray-100 border-gray-700 bg-purple-800 hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/photos/agent02.png"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
          TOP TRANSACTING AGENTS
        </h5>
        <p className="mb-3 font-normal text-white dark:text-white">
          Agents Having Higest Verified Deal Closures 
        </p>
        <button className='bg-white text-black w-40 rounded-xl font-semibold text-xl p-2'>
            Check Now
        </button>
      </div>
    </a>
            </div>


            </div>


        </div>


    </div>


    <div className='faq-body'>

      <div className='faq-content-body flex gap-6 text-black m-10 border-2 border-black p-16 rounded-2xl'>

        <div className='faq-content-block-1 w-1/2 '>

          <div className='font-semibold text-4xl '>
            FAQs
          </div>

          <div onClick={()=> setFaq(1)}  className={`text-black cursor-pointer p-5 border-2 mt-5 border-black-200 rounded-xl w-full font-semibold text-xl ${faq==1 ? 'bg-black text-white' : '' }`}>
            What Exaclty Is NextOpson?
          </div>

          <div onClick={()=> setFaq(2)}  className={`text-black  cursor-pointer p-5 border-2 mt-5 border-black-200 rounded-xl w-full font-semibold text-xl ${faq==2 ? 'bg-black text-white' : '' }`}>
            How do I list my property?
          </div>

          <div  onClick={()=> setFaq(3)}  className={`text-black cursor-pointer p-5 border-2 mt-5 border-black-200 rounded-xl w-full font-semibold text-xl ${faq==3 ? 'bg-black text-white' : '' }`}>
            What support is available for buyers and tenants?
          </div>

          <div onClick={()=> setFaq(4)}  className={`text-black cursor-pointer p-5 border-2 mt-5 border-black-200 rounded-xl w-full font-semibold text-xl ${faq==4 ? 'bg-black text-white' : '' }`}>
            How can I showcase my property on your site?
          </div>

          <div  onClick={()=> setFaq(5)} className={`text-black cursor-pointer p-5 border-2 mt-5 border-black-200 rounded-xl w-full font-semibold text-xl ${faq==5 ? 'bg-black text-white' : '' }`}>
             My question is not listed here (Send Us Feedback )
          </div>

        </div>



        <div className='faq-content-block-2 w-1/2 '>

          <div className='font-semibold text-4xl '>
            Answers
          </div>
          
          <div className={`text-black p-5 border-2 mt-5  bg-yellow-300  h-5/6 border-2  border-r-8 border-b-8 bor border-black rounded-xl w-full font-semibold text-xl}`}>
           
           <div>
           <FaDotCircle  size={30} color='white' />
           </div>
           <div className='faq-ans p-10 pl-0 text-2xl font-semibold'>

            {faq!=5
            ?
            faqAns[faq-1]
            : (

              <div className='faq-feedback'>

<label className="block text-black text-md font-bold mb-2 pl-2" htmlFor="myTextarea">
        Your Feedback
      </label>
      <textarea
        id="myTextarea"
        className="w-full rounded-xl h-40 p-4 border-2  text-xl border-gray-800 rounded-md resize-none focus:outline-none focus:ring focus:border-black"
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
        placeholder="Type Your Feedback Here..."
      />

              </div>
            )
            
            
            

            }

           </div>
          
          </div>

        </div>

      </div>


    </div>




   </>
  )
}

export default HomeBody