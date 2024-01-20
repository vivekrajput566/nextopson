"use client"
import React, { useRef,FC } from "react";

import ProductCard from '../ProductCard/ProductCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import { fetchProjectsData } from "@/services/database";

interface Props{
  title:any
}
const ProductCarousel:FC<Props> = ({title}) => {
  const { data: projectsData} = useQuery({
    queryKey: ["projectsData"],
    queryFn: () => fetchProjectsData(),
  });
  console.log(projectsData,"ProductCarousel--------");
  // console.log("hii ProductCarousel ",singlePropertyData.singlePropertyData?.ProductDetails);

  const slider = useRef<any>(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1242,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1515,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 6,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (

<>
{projectsData?.ProductDetails
&&projectsData?.ProductDetails.length>0&&
  <div className={`px-body   `}>
    <div className="  ">
  <div className="flex justify-between items-center">
  <h2 className={` md:text-3xl sm:text-2xl text-xl font-bold`}>{title}</h2>
    <div className="flex gap-2">
      <button
        className="bg-[#C9C0B7] w-8 text-white h-8 flex justify-center items-center"
        onClick={() => {
          if (slider) {
            slider.current?.slickPrev();
          }
        }}
      >
        <IoArrowBackSharp />
      </button>
      <button
        onClick={() => {
          if (slider) {
            slider.current?.slickNext();
          }
        }}
        className="bg-[#4B2C10] w-8 text-white h-8 flex justify-center items-center"
      >
        <IoArrowForward />
      </button>
    </div>
  </div>
  <Slider {...settings} arrows={false} ref={slider} className={` mt-10 w-full`}>
    {projectsData&&projectsData?.ProductDetails&&projectsData?.ProductDetails.length>0&&projectsData?.ProductDetails?.map((singleProperty:any,idx:number)=>{
      return  <div key={idx} className="px-2">
      <ProductCard singleProperty={singleProperty}/>
      </div>
    })}
  </Slider>
  </div>
  </div>
}
</>
  )
}

export default ProductCarousel