"use client"
import React, { useState } from 'react'
import { IoChevronDownOutline } from "react-icons/io5";
import CategoriesBar from '../CategoryCard/CategoriesBar';
import { Transition } from "@headlessui/react";
import OutsideClickHandler from "../../utils/OutsideClickHandler";
import { useQuery } from '@tanstack/react-query';
import { fecthDropDownData } from '@/services/database';



const categories = [{
  name: "Indore", isSubcategories: true, subcategories: [
    { subCategorieName: "abc fh dgds dgfd fhdfh fg" },
    { subCategorieName: "abc fgfd dgfd fhdfh fg" },
    { subCategorieName: "abc fg sfs dgfd fhdfh fg" },
    { subCategorieName: "abc df df" },
    { subCategorieName: "abchfdh dgfd fhdfh fg " },
    { subCategorieName: "abc" },
    { subCategorieName: "abc df a v sd" },
    { subCategorieName: "abc x s sa" },
    { subCategorieName: "abc ddf dsas d" },
    { subCategorieName: "abc  ds g" },
    { subCategorieName: "abc fs" },
  ]
}
  , { name: "Delhi", isSubcategories: false }, { name: "Kolkata", isSubcategories: false }, { name: "Mumbai", isSubcategories: false }, { name: "Pune", isSubcategories: false }]

const NavCategories = () => {
  const [hoveredCategory, setHoveredCategory] = useState<any>(null);
  const hovershow = useState(true);
  const [tab, setTab] = useState(0);

  const { data: dropDownCategories} = useQuery({
    queryKey: ["dropDownCategories"],
    queryFn: () => fecthDropDownData(),
  });
  console.log(dropDownCategories,"dropDownCategories");


  console.log("tab", tab);

  return (
    <div className='md:block hidden bg-[#f3f5f7]'>
      <div className={`px-body flex justify-center items-center gap-x-4 `}>
        {dropDownCategories&&dropDownCategories?.categoryDetails.map((categoryData: any, index: number)=>{
          return <div className={`flex gap-2 items-center  xl:px-10 px-4 py-3 relative `}
          onMouseEnter={() => {
            console.log("clickekd", index);
            if (
              categoryData?.isSubcategories &&
              categoryData?.subcategories &&
              categoryData?.subcategories?.length !== 0
            ) {
              console.log("inside clicked if");
              setTab(index + 1);
              console.log(tab, "taab from if");
              setHoveredCategory(index);
            } else {
              console.log("inside lse");
              setTab(index + 1);
              setHoveredCategory(index);
              // setHoveredCategory(null);
            }
          }}
          onMouseLeave={() => {
            setHoveredCategory(null);
            setTab(0);
          }}
          >
             <div className='cursor-pointer flex gap-2 items-center '>
              <h4 className={`text-gray-600 text-sm`}>{categoryData.name}</h4>
              <div><IoChevronDownOutline className={`text-[#727272] text-base `} /></div>
            </div>
            {hovershow && (hoveredCategory !== null && tab === index + 1)&&
            <div className=' border border-[red]'>
               {/* <OutsideClickHandler
                        onClick={() => {
                          setHoveredCategory(null);
                          setTab(0);
                        }}
                        onMouseLeave={() => {
                          setHoveredCategory(null);
                          setTab(0);
                        }}
                      > */}
                    <CategoriesBar
                      // type={
                      //   hoveredCategory === "shopby"
                      //     ? hoveredCategory
                      //     : null
                      // }
                      categories={dropDownCategories}
                      hoveredCategory={hoveredCategory}
                      setHoveredCategory={setHoveredCategory}
                    />
                    {/* </OutsideClickHandler> */}
            </div>
              // (
              //   <Transition
              //     // appear={true}
              //     show={hoveredCategory !== null && tab === index + 1}
              //   >
                 
              //       <OutsideClickHandler
              //           onClick={() => {
              //             setHoveredCategory(null);
              //             setTab(0);
              //           }}
              //           onMouseLeave={() => {
              //             setHoveredCategory(null);
              //             setTab(0);
              //           }}
              //         >
              //       <CategoriesBar
              //         // type={
              //         //   hoveredCategory === "shopby"
              //         //     ? hoveredCategory
              //         //     : null
              //         // }
              //         categories={dropDownCategories}
              //         hoveredCategory={hoveredCategory}
              //         setHoveredCategory={setHoveredCategory}
              //       />
              //       </OutsideClickHandler>
                  
              //   </Transition>
              // )
              }
          </div>
        })}
        {/* {dropDownCategories&&dropDownCategories?.categoryDetails.map((categoryData: any, index: number) => {
          return <div
            onMouseEnter={() => {
              console.log("clickekd", index);
              if (
                categoryData?.isSubcategories &&
                categoryData?.subcategories &&
                categoryData?.subcategories?.length !== 0
              ) {
                console.log("inside clicked if");
                setTab(index + 1);
                console.log(tab, "taab from if");
                setHoveredCategory(index);
              } else {
                console.log("inside lse");
                setTab(index + 1);
                setHoveredCategory(index);
                // setHoveredCategory(null);
              }
            }}
            // onMouseLeave={() => {
            //   setTab(0);
            // }}
            key={index}
            className={`flex gap-2 items-center  xl:px-10 px-4 py-3 relative`}>
            <div className='cursor-pointer flex gap-2 items-center '>
              <h4 className={`text-gray-600 text-sm`}>{categoryData.name}</h4>
              <div><IoChevronDownOutline className={`text-[#727272] text-base ${tab === index + 1&&"rotate-180"}`} /></div>
            </div>

            {hovershow &&
              (
                <Transition
                  appear={true}
                  show={hoveredCategory !== null && tab === index + 1}
                >
                 
                    <OutsideClickHandler
                        onClick={() => {
                          setHoveredCategory(null);
                          setTab(0);
                        }}
                        onMouseLeave={() => {
                          setHoveredCategory(null);
                          setTab(0);
                        }}
                      >
                    <CategoriesBar
                      // type={
                      //   hoveredCategory === "shopby"
                      //     ? hoveredCategory
                      //     : null
                      // }
                      categories={dropDownCategories}
                      hoveredCategory={hoveredCategory}
                      setHoveredCategory={setHoveredCategory}
                    />
                    </OutsideClickHandler>
                  
                </Transition>
              )}
          </div>
        })} */}
      </div>
    </div>
  )
}

export default NavCategories