// import { openLoginModal } from "@/redux/slices/loginModalSlice";
import { Transition } from "@headlessui/react";
import Link from "next/link";
// import { useDispatch } from "react-redux";
import OutsideClickHandler from "../../utils/OutsideClickHandler";
import { RxCross1 } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

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
            className={`  bg-white overflow-y-auto h-[100vh]   sm:w-[50%] w-[86%] absolute top-0 left-0  z-50 rounded-tr-2xl rounded-br-2xl `}
          >
            <div className="flex flex-col gap-3 sm:gap-2 md:gap-4 px-5 py-5">
              <Link
               onClick={(e) => {
                e.preventDefault();
                setIsSidebarOpen(false);
              //   dispatch(openLoginModal());
              }}
               href={"/"} className="text-base font-semibold ">
                Home
              </Link>
              <Link href={"/#"} className="text-base font-semibold ">
               List Your Property
              </Link>
             
             
              <Link href={"/#"} className="text-base font-semibold ">
               0124-4356436
              </Link>
              <Link href={"/#"} className="text-base font-semibold "
                onClick={() => {
                  document.body.classList.remove("no-scroll");
                  // dispatch(closeSideMenu());
                  setIsSidebarOpen(false);
                }}
              >
                About
              </Link>
              <Link
                href={"/#"}
                className="text-base font-semibold "
                onClick={(e) => {
                  e.preventDefault();
                  setIsSidebarOpen(false);
                //   dispatch(openLoginModal());
                }}
              >
                Login/Sign up
              </Link>
             
             
            </div>
          </div>
        </OutsideClickHandler>
      </Transition>
    </div>
  );
};

export default SideMenu;
