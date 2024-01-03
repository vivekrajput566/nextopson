
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


const ProductDescription = ({ cookie, slug }: any) => {
  const [isShowLoginMenu, setShowLoginMenu] = useState(false);
  const [isSubscription, setIsSubscription] = useState(false);
 
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

  

  return (
    <div className="px-body  mt-5 sm:mt-5 md:mt-10">
      <div className="flex flex-col md:flex-row justify-center gap-8 sm:gap-12 md:gap-16">
        <div className="md:w-[45%]  ">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 ">
            <div className=" flex justify-center items-center bg-[#FAFAFA]   aspect-square ">
              <Image
                // src={productInfo && productInfo?.images[selectedImage]?.url}
                src={apple}
                alt=""
                className="w-full h-full"
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex gap-2 sm:gap-3 md:gap-4 w-full">
              {/* {productInfo &&
                productInfo?.images?.map((image: any, index: number) => { 
                  return (*/}
              {Array(2)
                .fill(0)
                .map((_, keyid) => (
                  <div
                    className="w-[25%] bg-[#FAFAFA] p-1 sm:p-1.5 md:p-2"
                    // key={image?.url}
                  >
                    <Image
                      // key={image?.url}
                      src={apple3}
                    //   src={keyid === 0 ? apple2 : keyid === 1 ? apple3 : null}
                      // onClick={() => setSelectedImage(index)}
                      alt=""
                      // ${ selectedImage === index ? "shadow-lg" : "" }
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
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 md:w-[50%]">
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-neutral-950 ">
          Skyom Apartment
          </h2>
          <div className="flex  gap-0.5 sm:gap-1 md:gap-1.5">
            {Array(5)
              .fill(0)
              .map((_, keyid) => (
                <FaStar className="h-[18px] sm:h-[22px] md:h-[26px]  w-[18px] sm:w-[22px] md:w-[26px] aspect-square text-[#FFBD15]" />
              ))}
            <p
              className="font-semibold text-sm sm:text-base md:text-lg  text-zinc-400
                 "
            >
              (27)
            </p>
          </div>

          <div className="flex gap-4 sm:gap-8 md:gap-12  items-center ">
            <div className=" text-xl sm:text-2xl md:text-3xl text-center text-primary font-bold ">
           
              Rs 2,000
            </div>
           
            <div className=" text-base sm:text-lg md:text-xl line-through font-medium  text-center text-zinc-400">
            
              Rs 2,500
            </div>
        
          </div>


          <p className=" text-neutral-600  text-xs sm:text-sm md:text-base font-medium w-full md:w-[90%]">
            Rhoncus est pellentesque elit ullamcorper. Consequat ac felis donec
            et odio pellentesque diam. Elementum nibh tellus molestie nunc non
            blandit massa enim nec. Ipsum consequat nisl vel pretium.
          </p>

          <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
            <h2 className=" text-black text-sm sm:text-base md:text-lg font-semibold">
              Quantity:
            </h2>
            <div className="my-1 md:my-2 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              {/* {productInfo &&
              productInfo?.variants?.map((variant: any, index: number) => { 
                return (*/}
              {Array(3)
                .fill(0)
                .map((_, keyid) => (
                  <div
                    // key={variant?.weight}
                    onClick={() => {
                      setSelectedVariant(keyid);
                    }}
                    // onClick={() => {
                    //   setSelectedVariant(index);
                    // }}
                    // ${                      selectedVariant === index && "bg-primary "                    }
                    className={`px-3 sm:px-4 md:px-5 py-1 sm:py-2 md:py-3 bg-white rounded-md border ${
                      selectedVariant === keyid
                        ? "border-primary"
                        : "border-stone-300"
                    } shadow-sm  cursor-pointer`}
                  >
                    {/* ${selectedVariant === index && "text-white"} */}
                    <p
                      className={`text-xs sm:text-sm md:text-base ${
                        selectedVariant === keyid && "text-primary"
                      }`}
                    >
                      {/* {variant?.weight} {variant?.unit} */}
                      1BHK
                    </p>
                  </div>
                ))}
              {/* );
               })} */}
            </div>
          </div>

          <div
            className={`px-2 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 bg-orange-100 rounded-[10px] shadow-sm  flex justify-between items-center`}
          >
            {/* ${selectedVariant === index && "text-white"} */}
            <p
              className={`text-black text-xs sm:text-sm md:text-base font-semibold`}
            >
              {/* {variant?.weight} {variant?.unit} */}
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
          </div>

          {/* <div className=" text-base font-semibold  my-[1rem]">
            SKU: <span className="text-[#5b5b5a]">{productInfo.Sku}</span>
          </div> */}
          <div className="flex justify-between gap-1 sm:gap-2 md:gap-3">
            <button
              type="button"
              className=" text-white text-xs sm:text-sm md:text-base font-semibold bg-primary rounded-md h-8 sm:h-12 md:h-16 w-[90%] px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 flex justify-center items-center"
             
            >
              Add to cart
            </button>
            <div
              className="border border-[#BFBFBF] gap-1 sm:gap-1.5 md:gap-2 aspect-square h-8 sm:h-12 md:h-16 flex items-center justify-center font-medium rounded-lg cursor-pointer "
              // onClick={
              //   auth.currentUser?.uid ? handleBuyNowRequest : handleLoginClick
              // }
            >
              <GoHeart className="md:h-[26px] lg:h-[30px] md:w-[26px] lg:w-[30px]  bg-[white]" />
            </div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
            <p className=" text-black text-xs sm:text-sm md:text-base font-medium w-[90%]">
              Category: Fruits
            </p>
            <p className=" text-black text-xs sm:text-sm md:text-base font-medium w-[90%]">
              Tags: Fruits and vegetables, Categories
            </p>
          </div>
          <div className="border border-[#A8A8A8]"></div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
