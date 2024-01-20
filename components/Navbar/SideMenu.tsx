// import { openLoginModal } from "@/redux/slices/loginModalSlice";
import { Transition } from "@headlessui/react";
import Link from "next/link";
// import { useDispatch } from "react-redux";
import OutsideClickHandler from "../../utils/OutsideClickHandler";
import { RxCross1 } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { IoMdHome } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BiSolidLogIn } from "react-icons/bi";
import { FaFileContract } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";


const SideMenu = ({ isSidebarOpen, setIsSidebarOpen }: any) => {
//   const dispatch = useDispatch();

  return (
    <div
      className={`h-full  w-[100vw] bg-[rgba(0,0,0,0.5)]  fixed top-0 left-0 z-50 `}
    >

      <Transition
        show={isSidebarOpen}
        enter="transition-transform ease-in-out duration-200"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        className={`z-40 relative h-[102vh] rounded-br-md overflow-y-auto`}
        leave="transition-transform ease-in-out duration-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <OutsideClickHandler
          onClick={() => {
            document.body.classList.remove("no-scroll");
            // dispatch(closeSideMenu());
            setIsSidebarOpen(false);
          }}
        >
          <div
          onClick={() => {
            document.body.classList.remove("no-scroll");
            // dispatch(closeSideMenu());
            setIsSidebarOpen(false);
          }}
           className="absolute right-0 top-0"><RxCross2 className="text-white text-3xl"/></div>

          <div
            className={`  bg-white overflow-y-auto h-[100vh]   sm:w-[50%] w-[86%] absolute top-0 left-0  z-50  `}
          >
            <div className="flex flex-col gap-6 sm:gap-5 md:gap-4 px-5 py-5">
              <Link
               onClick={(e) => {
                e.preventDefault();
                setIsSidebarOpen(false);
              //   dispatch(openLoginModal());
              }}
               href={"/"} className="text-base font-semibold flex items-center gap-2 ">

                <div>
                <IoMdHome className={`text-3xl `}/>
                </div>
               <p className=""> Home</p>
              </Link>
              <Link href={"/dashboard/new-listing-form"} className="text-base font-semibold flex items-center gap-3 ">
                <div>
                <FaBuilding className={"text-2xl "}/>
                </div>
<p className=""> 
List Your Property

</p>
              </Link>
             
             
              <Link href={"/#"} className="text-base font-semibold flex items-center gap-4 ">
                <div>
                <FaPhoneAlt className={"text-xl "} />
                </div>
               <p className="">0124-4356436</p>
              </Link>
              <Link href={"/#"} className="text-base font-semibold flex items-center gap-3 "
                onClick={() => {
                  document.body.classList.remove("no-scroll");
                  // dispatch(closeSideMenu());
                  setIsSidebarOpen(false);
                }}
              >
                <div>
                {/* <BsFillFileEarmarkTextFill className={"text-3xl"}/> */}
                <FaFileContract className={"text-2xl "}/>
                </div>
                <p className="">About</p>
              </Link>
              <Link
                href={"/dashboard"}
                className="text-base font-semibold flex items-center gap-2 "
                onClick={(e) => {
                  // e.preventDefault();
                  setIsSidebarOpen(false);
                //   dispatch(openLoginModal());
                }}
              >
                <div><MdDashboard className={`text-2xl`}/></div>
                {/* <p><BiSolidLogIn className={"text-3xl "}/></p> */}
               <p className="">Dashboard</p>
              </Link>
             
             
            </div>
          </div>
        </OutsideClickHandler>
      </Transition>
    </div>
  );
};

export default SideMenu;
