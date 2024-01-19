
"use client";
import { useState } from "react";
import { BiCheckbox, BiCheckboxChecked, BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { TbLocation } from "react-icons/tb";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import apple from "../../images/aprt01.jpg";
import apple2  from "../../images/Delhi.webp";
import apple3 from "../../images/aprt01.jpg";
import { IoStarOutline } from "react-icons/io5";
import ContactDetailsModal from "../Modals/ContactDetailsModal";
import dfd from "../../public/productPhotos/9c5101e2-a01c-44eb-ae15-b0457300dbc5.webp"
import {constant} from "../../utils/constants"
// import fg from "../../public/productPhotos/"
// 9cdf1405-64d8-4dc2-8a12-51fa41bfdef4


const ProductDescription = ({ singlePropertyData }: any) => {
  console.log("ProductDescription",ProductDescription);
  console.log(`../../`);
  
  
  const [isShowLoginMenu, setShowLoginMenu] = useState(false);
  const [isSubscription, setIsSubscription] = useState(false);
  const [isContactDetails,setIsContactDetails]=useState(false)
  const [personalDetails,setPersonalDetails]=useState({})
 
  const [selectedImage, setSelectedImage] = useState();
  const [selectedVariant, setSelectedVariant] = useState(0);

  const handleLoginClick = () => {
    setShowLoginMenu(!isShowLoginMenu);
    document.body.classList.add("no-scroll");
  };

  const closeLoginMenu = () => {
    setShowLoginMenu(false);
    document.body.classList.remove("no-scroll");
  };
  const fetchPersonalDetails = async () => {
    // console.log(slug, "slug");
    console.log("fetchSingleCityData");
    try {
        console.log("fetchSinglePropertyData try");
        const form = new FormData();
        // const cityName = slug
        form.append("productId",singlePropertyData?.ProductDetails?.productId);
        console.log("inside try");
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
console.log("data from details", data);
        return data
    } catch (error) {
        console.error("Error during fetch:", error);
        return null;
    }
}
  

  return (
    <div className="px-body    md:mt-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-center gap-8 sm:gap-12 md:gap-16" >
        <div className="md:w-[45%]  ">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 ">
            <div className=" flex justify-center items-center    aspect-square ">
              <Image
                src={singlePropertyData?.ProductPhotos&&
                  singlePropertyData?.ProductPhotos.length>0?
                  require(`../../public/productPhotos/${singlePropertyData?.ProductPhotos[0].fileName}.webp`):constant?.errImage}
               
                // src={dfd}
                alt=""
                className="w-full h-full object-contain"
                width={1000}
                height={1000}
              />
            </div>
            {/* <div className="flex gap-2 sm:gap-3 md:gap-4 w-full">
            
              {Array(2)
                .fill(0)
                .map((_, keyid) => (
                  <div
                  key={keyid}
                    className="w-[25%] bg-[#FAFAFA] p-1 sm:p-1.5 md:p-2"
                  >
                    <Image
                      key={keyid}
                      src={apple3}
                  
                      alt=""
                      className={``}
                      width={1000}
                      height={1000}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                ))}
            </div> */}
          </div>
        </div>
        <div className="flex flex-col  md:w-[50%] justify-between gap-5">
          <div className=" flex flex-col gap-4 sm:gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-neutral-950 ">
          {singlePropertyData?.ProductDetails?.landmark}
          </h2>
          <p className="text-gray-500">{singlePropertyData?.ProductDetails?.address}</p>
        </div>
          {/* <div className="flex  gap-0.5 sm:gap-1 md:gap-1.5">
            {Array(5)
              .fill(0)
              .map((_, keyid) => (
                <FaStar key={keyid} className="h-[18px] sm:h-[22px] md:h-[26px]  w-[18px] sm:w-[22px] md:w-[26px] aspect-square text-[#FFBD15]" />
              ))}
            <p
              className="font-semibold text-sm sm:text-base md:text-lg  text-zinc-400
                 "
            >
              (27)
            </p>
          </div> */}

          <div className="flex gap-4 sm:gap-8 md:gap-12  items-center ">
            <div className=" text-xl sm:text-2xl md:text-3xl text-center text-primary font-bold ">
           
              {singlePropertyData?.ProductDetails?.price}
            </div>
           
          
        
          </div>
          {!(singlePropertyData?.ProductDetails?.bhk==="null")&&
          <div className="text-xl text-gray-500 font-semibold">{singlePropertyData?.ProductDetails?.bhk}BHK</div>
        }


          {!(singlePropertyData?.ProductDetails?.description==="null")&&
            <p className=" text-neutral-600  text-xs sm:text-sm md:text-base font-medium w-full md:w-[90%]">
          
            {singlePropertyData?.ProductDetails?.description}
          </p>}
          <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="text-black sm:text-base text-sm font-semibold">City :</p>
                <p className=" text-gray-600 sm:text-base text-sm font-semibold"> {singlePropertyData?.ProductDetails?.city}</p>
                </div>
               {!(singlePropertyData?.ProductDetails?.bedrooms==="null")&&
                <div className="flex items-center gap-2">
                <p className="text-black sm:text-base text-sm font-semibold">Bedrooms :</p>
                <p className=" text-gray-600 sm:text-base text-sm font-semibold"> {singlePropertyData?.ProductDetails?.bedrooms}</p>
                </div>}
                {!(singlePropertyData?.ProductDetails?.bathrooms==="null")&&
                <div className="flex items-center gap-2">
                <p className="text-black sm:text-base text-sm font-semibold">Bathrooms :</p>
                <p className=" text-gray-600 sm:text-base text-sm font-semibold"> {singlePropertyData?.ProductDetails?.bathrooms}</p>
                </div>
}
                <div className="flex items-center gap-2">
                <p className="text-black sm:text-base text-sm font-semibold">Furnished :</p>
                <p className=" text-gray-600 sm:text-base text-sm font-semibold"> {singlePropertyData?.ProductDetails?.furniture}</p>
                </div>
                <div className="flex items-center gap-2">
                <p className="text-black sm:text-base text-sm font-semibold">Landmark :</p>
                <p className=" text-gray-600 sm:text-base text-sm font-semibold"> {singlePropertyData?.ProductDetails?.landmark}</p>
                </div>

                {/* <div className="flex flex-col gap-1 sm:gap-2 md:gap-3"> */}
          {!(singlePropertyData?.ProductDetails?.propertyType==="null")&&  <p className=" text-black text-xs sm:text-sm md:text-base font-medium w-[90%]">
            Property Type : <span className="text-gray-600">{singlePropertyData?.ProductDetails?.propertyType}</span>
            </p>}
            <p className=" text-black text-xs sm:text-sm md:text-base font-medium w-[90%]">
            Property For : <span className="text-gray-600">{singlePropertyData?.ProductDetails?.propertyFor}</span>
            </p>
          {/* </div> */}


            </div>
            </div>

          {/* <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
            <h2 className=" text-black text-sm sm:text-base md:text-lg font-semibold">
              Quantity:
            </h2>
            <div className="my-1 md:my-2 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
             
              {Array(3)
                .fill(0)
                .map((_, keyid) => (
                  <div
                    key={keyid}
                    onClick={() => {
                      setSelectedVariant(keyid);
                    }}
                   
                    className={`px-3 sm:px-4 md:px-5 py-1 sm:py-2 md:py-3 bg-white rounded-md border ${
                      selectedVariant === keyid
                        ? "border-primary"
                        : "border-stone-300"
                    } shadow-sm  cursor-pointer`}
                  >
                    <p
                      className={`text-xs sm:text-sm md:text-base ${
                        selectedVariant === keyid && "text-primary"
                      }`}
                    >
                     
                      1BHK
                    </p>
                  </div>
                ))}
             
            </div>
          </div> */}

          {/* <div
            className={`px-2 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 bg-orange-100 rounded-[10px] shadow-sm  flex justify-between items-center`}
          >
            <p
              className={`text-black text-xs sm:text-sm md:text-base font-semibold`}
            >
              Subscription:
            </p>
            <div className="flex gap-3 sm:gap-4 md:gap-5">
              <div
                className="flex gap-1 sm:gap-2 md:gap-2 items-center cursor-pointer"
                onClick={() => {
                  setIsSubscription(true);
                }}
              >
                {isSubscription ? (
                  <BiCheckboxChecked className="h-4 sm:h-6 md:h-8 w-4 sm:w-6 md:w-8 text-primary" />
                ) : (
                  <BiCheckbox className="h-4 sm:h-6 md:h-8 w-4 sm:w-6 md:w-8 text-[#BFBFBF]" />
                )}
                <p
                  className={`text-black text-xs sm:text-sm md:text-base font-medium`}
                >
                  Yes
                </p>
              </div>
              <div className="flex gap-1 sm:gap-2 md:gap-2 items-center cursor-pointer"
                onClick={() => {
                  setIsSubscription(false);
                }}
              >
                {!isSubscription ? (
                  <BiCheckboxChecked className="h-4 sm:h-6 md:h-8 w-4 sm:w-6 md:w-8 text-primary" />
                ) : (
                  <BiCheckbox className="h-4 sm:h-6 md:h-8 w-4 sm:w-6 md:w-8 text-[#BFBFBF]" />
                )}{" "}
                <p
                  className={`text-black text-xs sm:text-sm md:text-base font-medium`}
                >
                  No
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className=" text-base font-semibold  my-[1rem]">
            SKU: <span className="text-[#5b5b5a]">{productInfo.Sku}</span>
          </div> */}
          <div className="flex justify-between gap-1 sm:gap-2 md:gap-3">
            <button
              type="button"
              className=" text-white text-xs sm:text-sm md:text-base font-semibold bg-primary rounded-md h-8 sm:h-12 md:h-16 w-[100%] px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 flex justify-center items-center"
              onClick={()=>{
                setIsContactDetails(true)
                fetchPersonalDetails()
              }}
            >
             Contact
            </button>
            {isContactDetails&&<ContactDetailsModal setIsContactDetails={setIsContactDetails} personalDetails={personalDetails}/>}
            {/* <div
              className="border border-[#BFBFBF] gap-1 sm:gap-1.5 md:gap-2 aspect-square h-8 sm:h-12 md:h-16 flex items-center justify-center font-medium rounded-lg cursor-pointer "
            
            >
              <IoStarOutline className={"text-2xl text-gray-500 font-semibold"}/>
            </div> */}
          </div>
          {/* <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
          {!(singlePropertyData?.ProductDetails?.propertyType==="null")&&  <p className=" text-black text-xs sm:text-sm md:text-base font-medium w-[90%]">
            Property Type : {singlePropertyData?.ProductDetails?.propertyType}
            </p>}
            <p className=" text-black text-xs sm:text-sm md:text-base font-medium w-[90%]">
            PropertyFor : {singlePropertyData?.ProductDetails?.propertyFor}
            </p>
          </div> */}
          {/* <div className="border border-[#A8A8A8]"></div>
          <div className={`  flex justify-between items-center`}>
            <div className="flex gap-3 sm:gap-5 md:gap-7 items-center">
              <TbLocation className="md:h-[26px] lg:h-[30px] md:w-[26px] lg:w-[30px] text-black" />
              <p
                className={`text-black text-xs sm:text-sm md:text-base font-semibold`}
              >
                Share
              </p>
            </div>

            <div className="flex gap-1 sm:gap-3 md:gap-5 items-center">
              <BiLogoFacebook className="md:h-[26px]  md:w-[26px]  text-[#4B2C10]" />
              <FaLinkedinIn className="md:h-[26px]  md:w-[26px]  text-[#4B2C10] " />
              <FaInstagram className="md:h-[26px]  md:w-[26px]  text-[#4B2C10] " />
              <FaTwitter className="md:h-[26px]  md:w-[26px]  text-[#4B2C10] " />
            </div>
          </div> */}
        </div>
        </div>
        {
          singlePropertyData?.ProductPhotos&&
          singlePropertyData?.ProductPhotos.length>0&&
          <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 w-full">
          {
            singlePropertyData?.ProductPhotos&&
            singlePropertyData?.ProductPhotos.slice(1).map((photos:any,idx:number)=>{
              return <div key={idx}>
                <Image src={singlePropertyData?.ProductPhotos&&
                  singlePropertyData?.ProductPhotos.length>0?
                  require(`../../public/productPhotos/${photos.fileName}.webp`):apple} 
                  alt=""
                  className="rounded-xl"/>
              </div>
            })
          }
          </div>
        }
            {/* <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 w-full ">
            
              {Array(2)
                .fill(0)
                .map((_, keyid) => (
                  <div
                  key={keyid}
                    className=" bg-[#FAFAFA] p-1 sm:p-1.5 md:p-2"
                  >
                    <Image
                      key={keyid}
                      src={apple3}
                  
                      alt=""
                      className={``}
                      width={1000}
                      height={1000}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                ))}
            </div> */}
      </div>
    </div>
  );
};

export default ProductDescription;
