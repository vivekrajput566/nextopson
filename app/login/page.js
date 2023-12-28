'use client'
import React, { useState } from "react";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'

function LoginPage() {

  const [showForm,setShowForm]=useState({mobileNumber:'7840034924',password:'1234'});
  console.log(showForm)  
  const router = useRouter()

  async function handleFormData(e){

    e.preventDefault();


    console.log("you are here login page..")
    
      try{                       
              
      const result = await signIn('credentials', {mobileNumber:showForm.mobileNumber,password:showForm.password,callbackUrl: '/',redirect:false});
      console.log(result)
      if(result.error){
        console.log(result.error)
        console.log("wrong details...")
        return false;

      }
      }
      catch(error){
        console.log("blablabla");
      }
     // router.replace('/');
     

    }


  return (
   <>
   
    
    <section className="mt-10 bg-white pt-10 pb-10 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center  mx-5 md:mx-0 md:my-10">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/2 max-w-md shadow-xl border-2 border-white rounded-md p-20">
        <div className="text-center md:text-left">
          <label className="mr-1 flex justify-center mb-4 text-600 text-black text-xl">LOGIN/REGISTER</label>
          
        </div>
        
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Mobile number"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button onClick={handleFormData}
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
   
   </>
  )
}

export default LoginPage