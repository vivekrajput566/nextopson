"use client"
import React,{useState} from 'react'
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { IoChevronDownOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdOutlineMyLocation } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../images/newLogo3.jpg"
import { usePathname } from "next/navigation";
import { fetchSingleCityData } from '@/services/database';
import {RemoveLayout} from "../../app/remove-layout"




const dummyDta=[
    // {icon:<IoBagCheckOutline/>,heading:"Become A Member",text:"Additional 10% off on stays"},
{icon:<HiOutlineBuildingOffice />,heading:"List Your Property",text:"Trusted by 5000 Corporates",href:"new-listing-form"},
{icon:<IoCallOutline />,heading:"0124-6201611",text:"Call us to Book now",href:"#"}]

const searchDummyData=[
    {id:1,name:"ayush"},
    {id:2,name:"sonal"},
    {id:3,name:"nitin"},
    {id:4,name:"sweety"},
    {id:5,name:"saloni"},
    {id:6,name:"neha"},
    {id:7,name:"jyoti"},
    {id:8,name:"joy"},
    {id:9,name:"harsh"},
    {id:10,name:"seema"},
    {id:11,name:"sfgfdg"},
    {id:12,name:"deeksha"},
    {id:13,name:"priyanshi"}





  ]

const FixedNav = () => {
  const remove=RemoveLayout()
  console.log("remove",remove);
  
  const pathName = usePathname();
    const [searchResults, setSearchResults] = useState<any>([])
    const [searchedTerm, setSearchedTerm] = useState("")
    const [isSearchResult, setIsSearchResults] = useState(false)
    const [isNoResultVisible, setIsNoResultVisible] = useState(false);

    const renderSearchResults = (searchTerm: any) => {
        // console.log("searchTerm",searchTerm);
        if (searchTerm && searchDummyData && searchDummyData.length > 0) {
          const res: any = searchDummyData.filter((item: any, idx: number) => {
            if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item;
            }
          });
          setIsSearchResults(true);
          setSearchResults(res);
          setIsNoResultVisible(res.length === 0);
        } else {
          setIsSearchResults(false);
          setSearchResults([]);
          setIsNoResultVisible(false);
        }
      };

      const handleKeyUp = (e:any) => {
        console.log("inside handleKeyUp");
    
      if (searchedTerm) {
        // log
          console.log("inside then");
    
        fetchSingleCityData(searchedTerm)
          .then((result) => {
            setSearchResults(result);
            setIsSearchResults(true);
          })
          .catch((error) => {
            console.error('Error in fetchSingleCityData:', error);
            setSearchResults({ result: false, ProductDetails: [] });
            setIsSearchResults(true);
          });
      }
    };

    if(remove){
      return null
    }
  return (
    <div className={` top-0 w-[100%] bg-[#0d0d0d] shadow-xl z-30 fixed`}>
        <div className='flex px-body items-center  justify-between sm:py-3.5 py-2.5'>
            <div className='flex items-center  xl:w-[60%] md:w-[70%] sm:w-[70%] w-[100%] gap-8  '>
        <Link href={"/"} className='w-[150px]  '>
     <Image src={logo} alt="logo" className='h-[100%] w-[100%] object-fill'/> 
     {/* <button className={` text-black px-6 py-2.5 rounded-md lg:text-3xl text-2xl font-semibold`}>NEXTOPSON</button> */}
     </Link>
         <div className={' flex relative gap-3 items-center  2xl:w-[85%] md:w-[50%] w-[100%]  '}>
            <div className={`flex relative gap-3 items-center  w-[100%] border px-4 rounded-md`}>
                <div className='flex items-center gap-2 justify-between w-[100%] '>
            <FiSearch className={`text-gray-500 text-xl`}/>
            <input
            value={searchedTerm}
            onKeyUp={handleKeyUp}  
            onChange={(e) => {
              setSearchedTerm(e.target.value);
              // renderSearchResults(e.target.value);
            }}
            type="text" 
            placeholder='Search here...' 
            className='outline-0 w-[100%] text-sm md:py-3 py-2.5 bg-transparent text-white'/>
            </div>
             {/* {searchedTerm &&
              <div onClick={() => setSearchedTerm("")} className="flex items-center justify-center cursor-pointer">
                <RxCross1 className=" text-[red] text-base" />
              </div>
            } */}
             {searchedTerm &&
              <div onClick={() => {
                setSearchedTerm("")
                setSearchResults({})
              }} className="flex items-center justify-center cursor-pointer">
                <RxCross1 className=" text-[red] text-base" />
              </div>
            }
          </div>
         
          {/* {searchedTerm && isSearchResult && searchResults && searchResults.length > 0 &&
              <div className="max-h-[300px]  overflow-y-scroll shadow-xl flex flex-col gap-2   absolute left-0 md:top-[58px] sm:top-[55px] top-[50px]  rounded-sm z-10 bg-white  w-[100%]">
                {
                  searchResults && searchResults.length > 0 && searchResults.map((item: any, idx: any) => {
                    return <Link href={`/all-properties`}
                    onClick={()=>console.log("clicked")
                    }
                    key={idx}
                      // onClick={async () => onTagHandler(item)}
                      className="text-sm bg-white w-full py-2    cursor-pointer border-t border-t-gray-200  px-4">
                      {item.name}
                    </Link>
                  })
                }
              </div>
            } */}

{searchResults&&searchResults.result&&searchResults.ProductDetails.length > 0&&
             <div className="max-h-[300px]  overflow-y-scroll shadow-xl flex flex-col gap-2   absolute left-0 md:top-[47px] sm:top-[43px] top-[43px]  rounded-sm z-10 bg-white  w-[100%] ">
             {
                searchResults.ProductDetails.length > 0 && searchResults.ProductDetails.map((item: any, idx: any) => {
                 return <Link href={`/all-properties/${item.landmark}`}
                 onClick={()=>console.log("clicked")
                 }
                 key={idx}
                   className="text-sm bg-white w-full py-1.5   cursor-pointer border-t border-t-gray-200  px-6">
                   {item.landmark}
                 </Link>
               })
             }
           </div>
}
            {/* {searchedTerm && isNoResultVisible && (
              <div className=" absolute left-0 md:top-[58px] sm:top-[55px] top-[50px] px-4 py-3 rounded-sm z-10 bg-white shadow-xl  w-[100%] text-sm  ">
                No results found with <span className='text-[red]'>&#8223;{searchedTerm}&#8221;</span>
              </div>
            )} */}
              {searchedTerm&&(searchResults&&!searchResults?.result)&&
            <div className='  absolute left-0 sm:top-[43px] top-[43px] px-4 py-3 rounded-sm z-10 bg-white shadow-xl  w-[100%] text-sm   '>
              {/* fbgfdgfdh */}
              No results found with &#8223;{searchedTerm}&#8221;
              {/* {searchResults.ProductDetails} */}

              </div>
            }
          </div>
          </div>
        
        <div className={`flex items-center `}>
         {dummyDta.map((item:any,idx:number)=>{
             return  <Link href={`/dashboard/${item?.href}`} key={idx} className='lg:flex hidden items-center    xl:px-4 lg:px-4  px-2 gap-x-3 border-r border-r-[#BFBFBF]'>
             <div className={`text-2xl font-normal text-white`}>{item.icon}</div>
             <div className={`flex flex-col `}>
                 <h2 className='text-sm font-semibold text-white'>{item.heading}</h2>
                 <p className=' text-xs text-white'>{item.text}</p>
             </div>
         </Link>
         })}
         <Link href={"/dashboard"} className={`sm:flex hidden items-center gap-x-3 xl:px-8  sm:px-4 px-2`}>
             <div><MdDashboard className={`text-2xl text-white`}/></div>
             <h2 className={`text-sm font-semibold text-white`}>Dashboard</h2>
         </Link>
        </div>
        </div>
    </div>
  )
}

export default FixedNav