"use client"
import React,{useState} from 'react'
import { FaDotCircle } from "react-icons/fa";


const Faq = () => {
    const [faq, setFaq]= useState(1);
    const faqAns=[`We're an online platform connecting property buyers, tenants, and owners.`, `Go to "List Your Property," fill details, upload images, and submit.`,
     `We provide comprehensive support, virtual tours, detailed listings, and a responsive customer support team.`, ` List your property by visiting "List Your Property," fill out details, upload images, and submit.`]

     const [textareaValue, setTextareaValue] = useState('');
  return (
   <>
    <div className='faq-body px-body '>

<div className='faq-content-body flex gap-6 text-black  border border-black px-8 py-8 rounded-2xl'>

  <div className='faq-content-block-1 w-1/2 flex flex-col gap-10'>

    <div className='font-bold text-3xl '>
      FAQs
    </div>

<div className={`flex flex-col gap-4`}>
    <div onClick={()=> setFaq(1)}  className={`text-black cursor-pointer px-4 py-3.5 border  border-black-200 rounded-xl w-full font-semibold text-base ${faq==1 ? 'bg-black text-white' : '' }`}>
      What Exaclty Is NextOpson?
    </div>

    <div onClick={()=> setFaq(2)}  className={`text-black  cursor-pointer px-4 py-3.5 border  border-black-200 rounded-xl w-full font-semibold text-base ${faq==2 ? 'bg-black text-white' : '' }`}>
      How do I list my property?
    </div>

    <div  onClick={()=> setFaq(3)}  className={`text-black cursor-pointer px-4 py-3.5 border  border-black-200 rounded-xl w-full font-semibold text-base ${faq==3 ? 'bg-black text-white' : '' }`}>
      What support is available for buyers and tenants?
    </div>

    <div onClick={()=> setFaq(4)}  className={`text-black cursor-pointer px-4 py-3.5 border  border-black-200 rounded-xl w-full font-semibold text-base ${faq==4 ? 'bg-black text-white' : '' }`}>
      How can I showcase my property on your site?
    </div>

    <div  onClick={()=> setFaq(5)} className={`text-black cursor-pointer px-4 py-3.5 border  border-black-200 rounded-xl w-full font-semibold text-base ${faq==5 ? 'bg-black text-white' : '' }`}>
       My question is not listed here (Send Us Feedback )
    </div>
    </div>

  </div>



  <div className='faq-content-block-2 w-1/2 flex flex-col gap-10'>

    <div className='font-bold text-3xl '>
      Answers
    </div>
    
    <div className={`text-black p-5 border-2 bg-[#f3f5f7]  h-5/6 border-2  border-r-4 border-b-4  border-black-200  rounded-xl w-full font-semibold text-xl}`}>
     
     <div>
     <FaDotCircle  size={30} color='black'  />
     </div>
     <div className='faq-ans p-10 pl-0 text-base font-semibold'>

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
  className="w-full border  rounded-xl h-40 p-4 border-2  text-xl border-gray-800 rounded-md resize-none focus:outline-none focus:ring focus:border-black"
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

export default Faq