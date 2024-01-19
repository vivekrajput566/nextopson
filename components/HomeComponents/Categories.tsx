"use client"
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import CategoryCard from "../CategoryCard/CategoryCard";
import { useQuery } from "@tanstack/react-query";
import { fecthCategoriesData } from "@/services/database";

const Categories = () => {
  const { data: propertyCategories} = useQuery({
    queryKey: ["propertyCategories"],
    queryFn: () => fecthCategoriesData(),
  });
  console.log("propertyCategories",propertyCategories);
  
  const slider = useRef<any>(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1242,
        settings: {
          slidesToShow: 4.4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1515,
        settings: {
          slidesToShow: 6,
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
          slidesToShow: 2.4,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (

<div className={`px-body   `}>
<div className="flex justify-between items-center">
<h2 className={` md:text-3xl sm:text-2xl text-xl font-bold`}>Popular Indian Cities</h2>
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
  {propertyCategories&&propertyCategories?.cititesDetail&&
  propertyCategories?.cititesDetail.length>0&&
  propertyCategories?.cititesDetail.map((category:any,idx:number)=>{
    return  <div key={idx} className="px-2 ">
    <CategoryCard singleCategory={category}/>
    </div>
  })}
  {/* <div className="px-2">
<CategoryCard/>
</div>
<div className="px-2">
<CategoryCard/>
</div>
<div className="px-2">
<CategoryCard/>
</div>
<div className="px-2">
<CategoryCard/>
</div>
<div className="px-2">
<CategoryCard/>
</div>
<div className="px-2">
<CategoryCard/>
</div>
<div className="px-2">
<CategoryCard/>
</div>
<div className="px-2">
<CategoryCard/>
</div> */}
</Slider>
</div>
  )
}

export default Categories