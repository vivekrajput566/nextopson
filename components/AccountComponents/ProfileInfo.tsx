"use client"
import React from 'react'
import { usePathname,useRouter } from 'next/navigation';
import { FaArrowLeftLong } from "react-icons/fa6";


const labelStyle = "lg:text-small md:text-xs text-sm text-[#555555] font-medium "
const inputStyle = "border border-[#838383] rounded-2xl px-3 sm:py-3.5 py-3 outline-0 lg:text-sm md:text-xs text-sm"
const divStyle = "flex flex-col sm:gap-3 gap-2"
const mainDivStyle = "grid sm:grid-cols-2 grid-cols-1 sm:gap-5 gap-3  w-full "

const ProfileInfo = () => {
    const router = useRouter()
    const pathName = usePathname()
    return (
        <>
            <div className={` h-fit  ${pathName.includes("profile-info-page") ? "block  w-[100%] mb-10" : "sm:block hidden lg:w-[58%] md:w-[68%]  w-full"}`}>
                {
                    pathName.includes("profile-info-page") && <div
                        onClick={() => {
                            router.replace("/my-account?tab=my-profile")
                        }}
                        className='flex items-center gap-2  lg:py-10 py-5'>
                            <FaArrowLeftLong className={` md:text-2xl text-xl cursor-pointer`} /> 
                        <h2 className='text-primary font-bold lg:text-2xl text-xl  '>My Profile</h2></div>
                }
                <div className="w-full flex flex-col sm:gap-7 gap-4">
                    <div className={`${mainDivStyle}`}>
                        <div className={`${divStyle}`}>
                            <label className={`${labelStyle}`}>
                                First Name*
                            </label>
                            <input className={`${inputStyle}`}
                            />
                        </div>
                        <div className={`${divStyle}`}>
                            <label className={`${labelStyle}`}>
                                Last Name*
                            </label>
                            <input className={`${inputStyle}`}
                            />
                        </div>
                    </div>
                    <div className={`${mainDivStyle}`}>
                        <div className={`${divStyle}`}>
                            <label className={`${labelStyle}`}>
                                Email Address*
                            </label>
                            <input className={`${inputStyle}`}
                            />
                        </div>
                        <div className={`${divStyle}`}>
                            <label className={`${labelStyle}`}>
                                Phone No.
                            </label>
                            <input className={`${inputStyle}`}
                            />
                        </div>
                    </div>
                    {/* <div className={`${mainDivStyle}`}>
                        <div className={`${divStyle}`}>
                            <label className={`${labelStyle}`}>
                                Current Password
                            </label>
                            <input className={`${inputStyle}`}
                            />
                        </div>
                        <div className={`${divStyle}`}>
                            <label className={`${labelStyle}`}>
                                New Password
                            </label>
                            <input className={`${inputStyle}`}
                            />
                        </div>
                    </div> */}
                    {/* <div className="md:w-[100%] sm:mt-2 mt-2 w-full rounded-2xl font-semibold  bg-primary text-white text-center  py-4  text-base font-medium cursor-pointer " >
                        <button style={{ height: "100%", position: "relative", }}>
                            Save Changes
                        </button>
                    </div> */}
    <button className='w-full bg-primary text-sm font-semibold rounded-2xl text-white md:py-4 py-2.5 mt-2 '>Save Changes</button>

                </div>
            </div>
        </>
    )
}

export default ProfileInfo