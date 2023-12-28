'use client'
import React, { useEffect, useState } from "react";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'

function LoginPage() {

  const [showForm,setShowForm]=useState({mobileNumber:'7840034924',password:'12345'});
  const [showError,setShowError]=useState();
  const [loginStatus,setLoginStatus]=useState(false);
  const [loginInputs,setLoginInputs]=useState({})
  const [viewForm,setViewForm]=useState("login");
  
  
  const router = useRouter()

  async function handleFormData(e){

    

    e.preventDefault();

    setLoginStatus(true)
    console.log("you are here login page..")
    
      try{                       
              
      const result = await signIn('credentials', {...loginInputs,callbackUrl: '/',redirect:false});
      
      console.log(result)
      if(result.error){
        setLoginStatus(false)
        setShowError(result.error);
        return false;

      }
      if(result.ok){
        setLoginStatus(true)
        setShowError("");
        router.replace('/'); 
      }
      }
      catch(error){
        console.log("blablabla");
      }
     // router.replace('/');
     

    }

    function loginInputsChange(e){

      const key=e.target.name;
      const value=e.target.value;
      setLoginInputs(data=>({...data,[key]:value}))
     
      
    }
    useEffect(()=>{
      console.log(loginInputs)
    },[loginInputs])


  return (
   <>
   
    
    <section className="mt-10 bg-white pt-10 pb-10 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center  mx-5 md:mx-0 md:my-10">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      
      <div className={`login-form-body ${viewForm=="login"?'block':'hidden'} md:w-1/2 max-w-md shadow-xl border-2 border-white rounded-md p-20`}>
        <div className="text-center md:text-left">
          <label className="mr-1 flex justify-center mb-4 text-600 text-black text-xl">LOGIN</label>
          
        </div>
        <div className="text-center md:text-left">
          <label className="mr-1 flex justify-center mb-4  text-red-500 font-bold text-sm">{showError}</label>
          
        </div>
        
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          name="mobileno"
          value={loginInputs.mobileno || ""}
          placeholder="Mobile number"
          onChange={loginInputsChange}
          required
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          name="password"
          value={loginInputs.password || ""}
          placeholder="Password"
          onChange={loginInputsChange}
          required
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
        <div className="text-center md:text-left flex items-center justify-center">
          <button onClick={handleFormData}
            className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            {loginStatus?(

            
            <div role="status" className=" w-full flex justify-center items-center ">
            <svg aria-hidden="true" className="inline flex justify-center w-4 h-4 text-white animate-spin  fill-black " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          ):
          (

           <span>Login</span>

          )}

           
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <button onClick={()=>setViewForm("register")}
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Register
          </button>
        </div>
      </div>


      <div className={`register-form-body ${viewForm=="register"?'block':'hidden'} md:w-1/2 max-w-md shadow-xl border-2 border-white rounded-md p-20`}>
        <div className="text-center md:text-left">
          <label className="mr-1 flex justify-center mb-4 text-600 text-black text-xl">REGISTER</label>
          
        </div>
        <div className="text-center md:text-left">
          <label className="mr-1 flex justify-center mb-4  text-red-500 font-bold text-sm">{showError}</label>
          
        </div>

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          name="username"
          value={loginInputs.mobileno || ""}
          placeholder="Your Name"
          onChange={loginInputsChange}
          required
        />
        
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          name="mobileno"
          value={loginInputs.mobileno || ""}
          placeholder="Mobile Number"
          onChange={loginInputsChange}
          required
        />

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          name="password"
          value={loginInputs.password || ""}
          placeholder="Create New Password"
          onChange={loginInputsChange}
          required
        />
        
        <div className="text-center md:text-left flex items-center justify-center">
          <button onClick={handleFormData}
            className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            {loginStatus?(

            
            <div role="status" className=" w-full flex justify-center items-center ">
            <svg aria-hidden="true" className="inline flex justify-center w-4 h-4 text-white animate-spin  fill-black " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          ):
          (

           <span>Register</span>

          )}

           
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already a member?{" "}
          <button onClick={()=>setViewForm("login")}
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Login
          </button>
        </div>
      </div>





      <div className={`otp-form-body ${viewForm=="otp"?'block':'hidden'} md:w-1/2 max-w-md shadow-xl border-2 border-white rounded-md p-20`}>
        <div className="text-center md:text-left">
          <label className="mr-1 flex justify-center mb-4 text-600 text-black text-xl">OTP</label>
          
        </div>
        <div className="text-center md:text-left">
          <label className="mr-1 flex justify-center mb-4  text-red-500 font-bold text-sm">{showError}</label>
          
        </div>

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          name="username"
          value={loginInputs.mobileno || ""}
          placeholder="Your Name"
          onChange={loginInputsChange}
          required
        />
        
        
        
        <div className="text-center md:text-left flex items-center justify-center">
          <button onClick={handleFormData}
            className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            {loginStatus?(

            
            <div role="status" className=" w-full flex justify-center items-center ">
            <svg aria-hidden="true" className="inline flex justify-center w-4 h-4 text-white animate-spin  fill-black " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          ):
          (

           <span>Continue</span>

          )}

           
          </button>
        </div>
      
      </div>
      
    </section>
 

   
   </>
  )
}

export default LoginPage