"use client"
import React, { useState } from 'react'
import building from "../../images/aprt01.jpg"
import Image from 'next/image'
import { FaPhoneAlt } from "react-icons/fa";
import ContactDetailsModal from '../Modals/ContactDetailsModal';
import Link from 'next/link';
import moment from 'moment';
import { constant } from '@/utils/constants';



const PropertyDetailsCard = ({ singleCity }: any ) => {
  console.log("PropertyDetailsCard",singleCity);


  
  const [isContactDetails,setIsContactDetails]=useState(false);
 const [personalDetails,setPersonalDetails]=useState({});   

 const createdAt = singleCity?.createdAt ;
 const currentTime = moment();

 const duration = moment.duration(currentTime.diff(moment(createdAt)));
const years = Math.floor(duration.asYears());
const months = Math.floor(duration.asMonths());
const weeks = Math.floor(duration.asWeeks());
const days = Math.floor(duration.asDays());
const hours = Math.floor(duration.asHours());
const minutes = Math.floor(duration.asMinutes());
const seconds = Math.floor(duration.asSeconds());

const formattedTime =
  years > 0 ? `${years}(years) ago` :
  months > 0 ? `${months} (months) ago` :
  weeks > 0 ? `${weeks} (weeks) ago` :
  days > 0 ? `${days} (days) ago` :
  hours > 0 ? `${hours} (hours) ago` :
  minutes > 0 ? `${minutes} (minutes) ago` :
  `${seconds} (seconds) ago`;

// console.log(formattedTime,"time----------");

  const fetchPersonalDetails = async () => {
    // console.log(slug, "slug");
    // console.log("fetchSingleCityData");
    try {
        // console.log("fetchSinglePropertyData try");
        const form = new FormData();
        // const cityName = slug
        form.append("productId", singleCity?.productId);
        // console.log("inside try");
        const res = await fetch('http://localhost:3000/api/backend/personalDetails',
            {
                method: "POST",
                body: form,
                cache: "no-cache"
            }
        );
        if (!res.ok) {
            console.error("Failed to fetch data from fetchSinglePropertyData:", res.status, res.statusText);
            return null;
        }
        const data = await res.json();
setPersonalDetails(data.personalDetails)          
// console.log("data from details", data); 
console.log(data);                   
        return data
    } catch (error) {
        console.error("Error during fetch:", error);
        return null;
    }
}
  return (
    <div className='flex md:flex-row flex-col gap-x-5 gap-y-3  sm:p-4 p-3 rounded-xl shadow-md'>
<div className='md:w-[40%] w-[100%] h-auto'>
<Image 
 width={1000}
 height={1000}
 src={singleCity?.images&&
  singleCity?.images.length>0?
  require(`../../public/productPhotos/${singleCity?.images[0]}.webp`):constant?.errImage}
// src={building} 
alt='property-image' className='sm:h-[280px] h-[240px] w-[100%] object-fill  sm:rounded-xl rounded-tl-xl rounded-tr-xl '/>
</div>
<div className='md:w-[60%] w-[100%] flex flex-col justify-between gap-4 '>
  <div className=' flex flex-col gap-4 '>
  <div>
  <h3 className={`font-bold md:text-base text-sm`}>{singleCity?.landmark}</h3>
  <p className={`text-[#616874] md:text-base text-sm `}>{singleCity?.address}</p>
    
  </div>
  <div className={`flex gap-10 items-center  `}>
    <div><h1 className='md:font-semibold font-bold md:text-xl text-lg'>{singleCity?.price}</h1></div>
    <div className={`flex  gap-3 items-center `}>
      <h1 className='md:font-semibold font-bold md:text-xl text-lg'>{singleCity?.bhk?`${singleCity?.bhk}BHK`:""}</h1>
      <p className={`text-[#616874] md:text-lg text-base `}>(3 Baths)</p>
    </div>
  </div>
  <div className='flex items-center sm:gap-5 gap-3 text-[#616874] md:text-base text-sm'><p>{singleCity?.listedBy} </p><p>:</p><p>{formattedTime}</p></div>
  {/* <p className={`text-[#616874] md:text-base text-sm `}>The property is a very nice and good location and near the metro station and market. Additional details : Piped gas facility is...</p> */}
  </div>
  <div className={`flex gap-3 items-center sm:flex-row flex-col `}>
    <Link href={`/product/${singleCity?.productId}`}
    className={`sm:w-fit w-full text-primary border border-primary text-base font-semibold px-5 py-2 rounded-md text-center`}
    >
 
    View Details
  
    </Link>
  <button
  onClick={()=>{
    setIsContactDetails(true)
    fetchPersonalDetails()
  }}

   className={`sm:w-fit w-full flex gap-2 justify-center items-center text-white bg-primary border border-primary text-base font-semibold px-6 py-2 rounded-md`}><FaPhoneAlt /> <span>Contact</span></button>

</div>
</div>
{isContactDetails&&<ContactDetailsModal setIsContactDetails={setIsContactDetails} personalDetails={personalDetails}/>}

    </div>
  )
}

export default PropertyDetailsCard