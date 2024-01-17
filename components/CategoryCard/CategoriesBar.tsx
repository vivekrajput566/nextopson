"use client"
import Link from 'next/link';
import React, { FC } from 'react'
interface Props {
    // type: string;
    categories?: any;
    subCategories?: any;
    hoveredCategory?: any;
    setHoveredCategory?: any;
}

const CategoriesBar: FC<Props> = ({categories = null,hoveredCategory = 0,setHoveredCategory,}) => {
    console.log("categories from bar", categories);
    console.log("CategoriesBar", hoveredCategory);

    return (
        <div className='bg-white z-30 absolute left-10 top-[44px]  px-5 w-[15vw] py-4 rounded-sm border shadow-lg'>
            <div className='flex flex-col gap-3'>
               {categories[hoveredCategory]?.subcategories&&
                 <h1 className='text-lg font-semibold '>Popular Localities</h1>
               }
                <div className='flex flex-col gap-3'>
                    {
                        categories[hoveredCategory]?.isSubcategories ?
                            <div className=' flex flex-col gap-3 max-h-[300px]  overflow-y-scroll'>
                                {categories[hoveredCategory]?.subcategories?.map((item: any, idx: number) => {
                                    return <Link key={idx} href={"/all-properties"} 
                                    onClick={() => setHoveredCategory(null)}
                                    className='text-[15px] text-gray-600'>
                                        {item?.subCategorieName}
                                    </Link>
                                })}
                            </div>
                            :
                            <>
                                <div className='text-[red] text-sm font-semibold'>Coming Soon !</div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoriesBar