import React from 'react'
import img from "../../images/agent02.png"
import img1 from "../../images/agent01.png"
import Image from 'next/image'


const Agents = () => {
  return (
    <div className='real-state-body px-body'>

        <div className='real-state-content flex flex-col gap-10 justify-center  p-10 shadow-2xl rounded-xl '>


            <div className='real-state-text text-3xl flex justify-center font-bold text-black ' >
                Real Estate Agents In Your State
            </div>

      <div className='flex justify-around '>
            <div className='block1  '>
            <a
      href="#" style={{borderRadius:'80px 10px 80px 10px'}}
      className="flex flex-col shadow-xl p-10 items-center  border border-gray-200  shadow md:flex-row md:max-w-xl hover:bg-gray-100 border-gray-700 bg-green-600 hover:bg-gray-700"
    >
      <Image
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={img1}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
          TOP RATED AGENTS
        </h5>
        <p className="mb-3 font-normal text-white  dark:text-white">
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
      className="flex flex-col  p-10 items-center text-white  border border-gray-200  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 bg-purple-800 hover:bg-gray-700"
    >
      <Image
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={img}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
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

//     <div className='real-state-body '>

//         <div className='real-state-content flex flex-col justify-center m-10 p-10 shadow-2xl rounded-xl '>


//             <div className='real-state-text text-5xl flex justify-center font-semibold text-black p-10' >
//                 Real Estate Agents In Your State
//             </div>

//       <div className='flex justify-around'>
//             <div className='block1  '>
//             <a
//       href="#" style={{borderRadius:'80px 10px 80px 10px'}}
//       className="flex flex-col shadow-xl p-10 items-center  border border-gray-200  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 bg-green-600 dark:hover:bg-gray-700"
//     >
//       <img
//         className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
//         src="/photos/agent01.png"
//         alt=""
//       />
//       <div className="flex flex-col justify-between p-4 leading-normal">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
//           TOP RATED AGENTS
//         </h5>
//         <p className="mb-3 font-normal text-white dark:text-white">
//           Agents Having Higest Rating Based On Client Reviews 
//         </p>
//         <button className='bg-white text-black w-40 rounded-xl font-semibold text-xl p-2'>
//             Check Now
//         </button>
//       </div>
//     </a>
//             </div>


//             <div className='block2  '>
//             <a
//       href="#" style={{borderRadius:'10px 80px 10px 80px'}}
//       className="flex flex-col  p-10 items-center bg-white border border-gray-200  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-purple-800 dark:hover:bg-gray-700"
//     >
//       <img
//         className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
//         src="/photos/agent02.png"
//         alt=""
//       />
//       <div className="flex flex-col justify-between p-4 leading-normal">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
//           TOP TRANSACTING AGENTS
//         </h5>
//         <p className="mb-3 font-normal text-white dark:text-white">
//           Agents Having Higest Verified Deal Closures 
//         </p>
//         <button className='bg-white text-black w-40 rounded-xl font-semibold text-xl p-2'>
//             Check Now
//         </button>
//       </div>
//     </a>
//             </div>


//             </div>


//         </div>

// </div>
  )
}

export default Agents