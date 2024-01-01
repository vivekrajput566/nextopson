'use client'
import React, { useEffect, useState } from "react";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import { IoMdLock } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";

function LoginPage() {


  const [loginError,setLoginError]=useState();
  const [registerError,setRegisterError]=useState();
  const [otpError,setOtpError]=useState();
  const [forgotPasswordError,setForgotPasswordError]=useState();
  
  const [loginSpinnerStatus,setLoginSpinnerStatus]=useState(false);
  const [registerSpinnerStatus,setRegisterSpinnerStatus]=useState(false);
  const [otpSpinnerStatus,setOtpSpinnerStatus]=useState(false);
  const [forgotPasswordStatus,setForgotPasswordSpinnerStatus]=useState(false);

  const [loginInputs,setLoginInputs]=useState({})
  const [registerInputs,setRegisterInputs]=useState({})
  const [otpInputs,setOtpInputs]=useState({})
  const [forgotPasswordInputs,setForgotPasswordInputs]=useState({})

  const [viewForm,setViewForm]=useState("login");
  
  
  const router = useRouter()

  async function handleLoginFormData(e){

    

    e.preventDefault();

    setLoginSpinnerStatus(true)

    
    
    const mobileNumber=loginInputs?.mobileno;
    const password=loginInputs?.password;
   

    if(!mobileNumber || mobileNumber?.length!=10 || isNaN(mobileNumber) ){

      setLoginSpinnerStatus(false)
      setLoginError("Enter Valid Mobile No.")
      return false;

    }

    if(!password || password?.length<=3 ){

      setLoginSpinnerStatus(false)
      setLoginError("Password Is Not Valid")
      return false;

    }
    console.log("you are here login page..")
    
      try{                       
              
      const result = await signIn('credentials', {...loginInputs,callbackUrl: '/',redirect:false});
      
      console.log(result)
      if(result.error){
        setLoginSpinnerStatus(false)
        setLoginError(result.error);
        return false;

      }
      if(result.ok){
        setLoginSpinnerStatus(true)
        setLoginError("");
        router.replace('/'); 
        return;
      }
      }
      catch(error){
        console.log("blablabla");
      }
  

    }

    async function handleRegisterFormData(e){

      e.preventDefault();
  
      setRegisterSpinnerStatus(true)

      const username= registerInputs?.username;
      const mobileNumber=registerInputs?.mobileno;
      const password=registerInputs?.password;
      //console.log(username)
      if(!username || username?.length==0 ){

        setRegisterSpinnerStatus(false)
        setRegisterError("Enter Valid Username")
        return false;

      }

      if(!mobileNumber || mobileNumber?.length!=10 || isNaN(mobileNumber) ){

        setRegisterSpinnerStatus(false)
        setRegisterError("Enter Valid Mobile No.")
        return false;

      }

      if(!password || password?.length<=3 ){

        setRegisterSpinnerStatus(false)
        setRegisterError("Password Is Too Short")
        return false;

      }


      console.log("you are here register page..")
      
        try{                       
                
         
           const res =  await fetch('/api/backend/login-signup/signup/userExist', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json;charset=utf-8' },
              body: JSON.stringify(registerInputs),
            })
              .then((response) => {
               
                if (!response.ok) {
                  setRegisterSpinnerStatus(false)
                  
                  throw new Error('Network response was not ok');

                }
                return response.json();
              })
              .then((responseData) => {
                if(responseData.success==true){

                  console.log(responseData)
                  
                  setRegisterError("")
                  setViewForm("otp")
                  setRegisterSpinnerStatus(false)
                  return;
            
                }
                if(responseData.success==false){

                  console.log(registerInputs)
                  console.log(responseData)
                  console.log("not valid data")
                  setRegisterError("Mobile no. already exist")
                  setRegisterSpinnerStatus(false)
                  return; 
            
                }
                
               
                
                // Handle successful response
              })
              .catch((error) => {
                setRegisterSpinnerStatus(false);
                setRegisterError("Network Error")
               //console.log(error)
                // Handle errors
              });
          
        
        }
        catch(error){
           console.log(error)
        }
       // router.replace('/');
       
  
      }


    async function handleOtpFormData(e){

        e.preventDefault();
        setOtpSpinnerStatus(true);
        setOtpError("");
    
        const otpValue= otpInputs.otp;
       // console.log(otpValue);
        if(otpValue?.length!=4 || isNaN(otpValue)){
          setOtpSpinnerStatus(false);
          setOtpError("Enter 4 Digit Valid OTP");
          return false;
        }
       
        console.log("you are here otp page..")
        
          try{                       
                  
           
             const res =  await fetch('/api/backend/login-signup/signup/otpValidate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify({...registerInputs,...otpInputs}),
              })
                .then((response) => {
                 
                  if (!response.ok) {
                    setOtpSpinnerStatus(false)
                    
                    throw new Error('Network response was not ok');
  
                  }
                  return response.json();
                })
                .then( async (responseData) => {
                  if(responseData.success==true){
  
                    console.log(responseData)
                    
                    setRegisterError("")
                    
                    try{                       
                      const mobileno=registerInputs.mobileno;
                      const password=registerInputs.password;
                      console.log(mobileno+" "+password)
                      const result = await signIn('credentials', {mobileno:mobileno,password:password,callbackUrl: '/',redirect:false});
                      
                      console.log(result)
                      if(result.error){
                        setOtpSpinnerStatus(false)
                        setOtpError(result.error);
                        return false;
                
                      }
                      if(result.ok){
                        setRegisterError("")
                        
                        setOtpSpinnerStatus(true)
                       
                       router.replace('/'); 
                      }
                      }
                      catch(error){
                        console.log("blablabla");
                      }
                   // setViewForm("otp")
                   
                    return;
              
                  }
                  if(responseData.success==false){
  
                    console.log(registerInputs)
                    console.log(responseData)
                    console.log("not valid data")
                    setOtpError("Enter Valid OTP");
                    setOtpSpinnerStatus(false)
                    return; 
              
                  }
                  
                 
                  
                  // Handle successful response
                })
                .catch((error) => {
                  setOtpSpinnerStatus(false);
                  setOtpError("Network Error")
                 //console.log(error)
                  // Handle errors
                });
            
          
          }
          catch(error){
             console.log(error)
          }
       
         
    
    }

    async function handleForgotPasswordFormData(e){

      e.preventDefault();
      setForgotPasswordSpinnerStatus(true);
      setForgotPasswordError("");
  
      const mobileNoValue= forgotPasswordInputs.mobileno;
          if(mobileNoValue?.length!=10 || isNaN(mobileNoValue)){
        setForgotPasswordSpinnerStatus(false);
        setForgotPasswordError("Enter Valid Mobile Number");
        return false;
      }
     
      console.log("you are here forgot password mobile no input page..")
      
      try{                       
                
         
        const res =  await fetch('/api/backend/login-signup/forgotPassword/userExist', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json;charset=utf-8' },
           body: JSON.stringify(forgotPasswordInputs),
         })
           .then((response) => {
            
             if (!response.ok) {
               setForgotPasswordSpinnerStatus(false)
               
               throw new Error('Network response was not ok');

             }
             return response.json();
           })
           .then((responseData) => {
             if(responseData.success==true){

               console.log(responseData)
               
               setForgotPasswordError("")
               setViewForm("forgotPassword-otp")
               setForgotPasswordSpinnerStatus(false)
               return;
         
             }
             if(responseData.success==false){

               console.log(registerInputs)
               console.log(responseData)
               console.log("not valid data")
               setForgotPasswordError("Mobile No. Not Exist")
               setForgotPasswordSpinnerStatus(false)
               return; 
         
             }
             
            
             
             // Handle successful response
           })
           .catch((error) => {
             setForgotPasswordSpinnerStatus(false);
             setForgotPasswordError("Network Error")
            //console.log(error)
             // Handle errors
           });
       
     
     }
     catch(error){
        console.log(error)
     }
       
  
  }


  async function handleForgotPasswordOtpFormData(e){

    e.preventDefault();
    setForgotPasswordSpinnerStatus(true);
    setForgotPasswordError("");

    const otpValue= forgotPasswordInputs.otp;
    if(otpValue?.length!=4 || isNaN(otpValue)){
      setForgotPasswordSpinnerStatus(false);
      setForgotPasswordError("Enter Valid OTP Number");
      return false;
    }
   
    console.log("you are here forgot password otp no input page..")
    
    try{                       
              
       
      const res =  await fetch('/api/backend/login-signup/forgotPassword/otpValidate', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json;charset=utf-8' },
         body: JSON.stringify(forgotPasswordInputs),
       })
         .then((response) => {
          
           if (!response.ok) {
             setForgotPasswordSpinnerStatus(false)
             
             throw new Error('Network response was not ok');

           }
           return response.json();
         })
         .then((responseData) => {
           if(responseData.success==true){

             console.log(responseData)
             
             setForgotPasswordError("")
             setViewForm("forgotPassword-password")
             setForgotPasswordSpinnerStatus(false)
             return;
       
           }
           if(responseData.success==false){

             console.log(registerInputs)
             console.log(responseData)
             console.log("not valid data")
             setForgotPasswordError("Wrong OTP")
             setForgotPasswordSpinnerStatus(false)
             return; 
       
           }
           
          
           
           // Handle successful response
         })
         .catch((error) => {
           setForgotPasswordSpinnerStatus(false);
           setForgotPasswordError("Network Error")
          //console.log(error)
           // Handle errors
         });
     
   
   }
   catch(error){
      console.log(error)
   }
     

}
    

async function handleForgotPasswordPasswordFormData(e){

    e.preventDefault();
    setForgotPasswordSpinnerStatus(true);
    setForgotPasswordError("");

    const passwordValue= forgotPasswordInputs.password;
    if(!passwordValue || passwordValue?.length<=3 ){
      setForgotPasswordSpinnerStatus(false);
      setForgotPasswordError("Password Is Too Short");
      return false;
    }
   
    console.log("you are here forgot password otp no input page..")
    
    try{                       
              
       
      const res =  await fetch('/api/backend/login-signup/forgotPassword/newPassword', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json;charset=utf-8' },
         body: JSON.stringify(forgotPasswordInputs),
       })
         .then((response) => {
          
           if (!response.ok) {
             setForgotPasswordSpinnerStatus(false)
             
             throw new Error('Network response was not ok');

           }
           return response.json();
         })
         .then(async (responseData) => {
           if(responseData.success==true){

             
             try{                       
              const mobileno=forgotPasswordInputs.mobileno;
              const password=forgotPasswordInputs.password;
              console.log(mobileno+" "+password)
              const result = await signIn('credentials', {mobileno:mobileno,password:password,callbackUrl: '/',redirect:false});
              
              console.log(result)
              if(result.error){
                setForgotPasswordSpinnerStatus(false)
                setForgotPasswordError(result.error);
                return false;
        
              }
              if(result.ok){
                setForgotPasswordError("")
                
                setForgotPasswordSpinnerStatus(true)
               
               router.replace('/'); 
              }
              }
              catch(error){
                console.log("blablabla");
              }
             
             setForgotPasswordError("")
             
       
           }
           if(responseData.success==false){

             console.log(registerInputs)
             console.log(responseData)
             console.log("not valid data")
             setForgotPasswordError("Wrong OTP")
             setForgotPasswordSpinnerStatus(false)
             return; 
       
           }
           
          
           
           // Handle successful response
         })
         .catch((error) => {
           setForgotPasswordSpinnerStatus(false);
           setForgotPasswordError("Network Error")
          console.log(error)
           // Handle errors
         });
     
   
   }
   catch(error){
      console.log(error)
   }
     

}
    

      

  
    function loginInputsChange(e){

      const key=e.target.name;
      const value=e.target.value;
      setLoginInputs({...loginInputs,[key]:value})
     
      
    }

    function registerInputsChange(e){

      const key=e.target.name;
      const value=e.target.value;
      setRegisterInputs({...registerInputs,[key]:value})
     
      
    }

    function otpInputsChange(e){

      const key=e.target.name;
      const value=e.target.value;
      setOtpInputs({...otpInputs,[key]:value})
     
    }

    function forgotPasswordInputsChange(e){

      const key=e.target.name;
      const value=e.target.value;
      setForgotPasswordInputs({...forgotPasswordInputs,[key]:value})
     
    }

    useEffect(()=>{

      if(viewForm=="register"){

        setOtpInputs("");
        setOtpError("");
        setOtpSpinnerStatus(false);


      }

      
      if(viewForm=="login"){

        setForgotPasswordInputs("");
        setForgotPasswordError("");
        setForgotPasswordSpinnerStatus(false);


      }
      
    },[viewForm])

    
    


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
        

      <div className="flex items-center flex-col justify-center">
          <div className="rounded-full bg-green-200 p-4">
          <FaUser size={25} color="black"/>
        </div>
       
        <div className="text-center md:text-left mt-2">
          
          <label className="mr-1 flex justify-center mb-4 text-600 text-black text-xl font-semibold">LOGIN</label>
          
        </div>

        <div className="text-center md:text-left">
          
          <label className="mr-1 flex justify-center text-600 text-gray-400 text-sm">Sign In to Your Account</label>
          
        </div>
       
        </div>


        <div className="text-center md:text-left">
          <label className="mr-1 flex justify-center mb-4  text-red-500 font-bold text-sm">{loginError}</label>
          
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
          <button
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            onClick={()=>setViewForm("forgotPassword-mobile")}
          >
            Forgot Password?
          </button>
        </div>
        <div className="text-center md:text-left flex items-center justify-center">
        {loginSpinnerStatus?(
               <button 
               className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
               type="submit"
             >
            
            <div role="status" className=" w-full flex justify-center items-center ">
            <svg aria-hidden="true" className="inline flex justify-center w-4 h-4 text-white animate-spin  fill-black " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          </button>
          ):
          (
            <button onClick={handleLoginFormData}
            className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >

           <span>Login</span>
           </button>

          )}

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
      <div className="flex items-center flex-col justify-center">
          <div className="rounded-full bg-green-200 p-4">
          <FaUserEdit size={25} color="black"/>
        </div>
       
        <div className="text-center md:text-left mt-2">
          
          <label className="mr-1 flex justify-center mb-4 text-600 text-black text-xl font-semibold">REGISTER</label>
          
        </div>

        <div className="text-center md:text-left">
          
          <label className="mr-1 flex justify-center text-600 text-gray-400 text-sm">New User Account Registration</label>
          
        </div>
       
        </div>
        <div className="text-center md:text-left">
          <label className="mr-1 flex justify-center mb-4  text-red-500 font-bold text-sm">{registerError}</label>
          
        </div>

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          name="username"
          value={registerInputs.username || ""}
          placeholder="Your Name"
          onChange={registerInputsChange}
          required
        />
        
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          name="mobileno"
          value={registerInputs.mobileno || ""}
          placeholder="Mobile Number"
          onChange={registerInputsChange}
          required
        />

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          name="password"
          value={registerInputs.password || ""}
          placeholder="Create New Password"
          onChange={registerInputsChange}
          required
        />
        
        <div className="text-center md:text-left flex items-center justify-center">
        {registerSpinnerStatus?(
               <button 
               className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
               type="submit"
             >
            
            <div role="status" className=" w-full flex justify-center items-center ">
            <svg aria-hidden="true" className="inline flex justify-center w-4 h-4 text-white animate-spin  fill-black " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          </button>
          ):
          (
            <button onClick={handleRegisterFormData}
            className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >

           <span>Register</span>
           </button>

          )}


         
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
        <div className="flex items-center flex-col justify-center">
          <div className="rounded-full bg-green-200 p-4">
        <IoMdLock size={25} color="black"/>
        </div>
       
        <div className="text-center md:text-left mt-2">
          
          <label className="mr-1 flex justify-center mb-4 text-600 text-black text-xl">ENTER OTP</label>
          
        </div>
        <div className="text-center md:text-left">
          
          <label className="mr-1 flex justify-center text-600 text-gray-400 text-sm">We sent OTP code to your mobile number</label>
          
        </div>

        </div>
        <div className="text-center md:text-left">
          <label className="mr-1 flex justify-center mb-4  text-red-500 font-bold text-sm">{otpError}</label>
          
        </div>

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          name="otp"
          value={otpInputs.otp || ""}
          placeholder="ENTER OTP"
          onChange={otpInputsChange}
          required
        />
        
        
        
        <div className="text-center md:text-left flex items-center justify-center">
         
            {otpSpinnerStatus?(
               <button 
               className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
               type="submit"
             >
            
            <div role="status" className=" w-full flex justify-center items-center ">
            <svg aria-hidden="true" className="inline flex justify-center w-4 h-4 text-white animate-spin  fill-black " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          </button>
          ):
          (
            <button onClick={handleOtpFormData}
            className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >

           <span>Continue</span>
           </button>

          )}

           
         
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Change Mobile No{" "} 
          <button onClick={()=>setViewForm("register")}
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
             Click Here
          </button>
        </div>
      
      </div>




      <div className={`forgotPassword-mobile-form-body ${viewForm=="forgotPassword-mobile"?'block':'hidden'} md:w-1/2 max-w-md shadow-xl border-2 border-white rounded-md p-20`}>
        <div className="flex items-center flex-col justify-center">
          <div className="rounded-full bg-green-200 p-4">
          <MdOutlinePassword size={25} color="black"/>
        </div>
       
        <div className="text-center md:text-left mt-2">
          
          <label className="mr-1 flex justify-center mb-4 text-600 text-black text-xl">FORGOT PASSWORD</label>
          
        </div>
        <div className="text-center md:text-left">
          
          <label className="mr-1 flex justify-center text-600 text-gray-400 text-sm">Enter Your Registered Mobile Number</label>
          
        </div>

        </div>
        <div className="text-center md:text-left">
          <label className="mr-1 flex justify-center mb-4  text-red-500 font-bold text-sm">{forgotPasswordError}</label>
          
        </div>

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          name="mobileno"
          value={forgotPasswordInputs.mobileno || ""}
          placeholder="Mobile Number"
          onChange={forgotPasswordInputsChange}
          required
        />
        
        
        
        <div className="text-center md:text-left flex items-center justify-center">
         
            {forgotPasswordStatus?(
               <button 
               className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
               type="submit"
             >
            
            <div role="status" className=" w-full flex justify-center items-center ">
            <svg aria-hidden="true" className="inline flex justify-center w-4 h-4 text-white animate-spin  fill-black " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          </button>
          ):
          (
            <button onClick={handleForgotPasswordFormData}
            className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >

           <span>Continue</span>
           </button>

          )}

           
         
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Login From Here{" "} 
          <button onClick={()=>setViewForm("login")}
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
             Login
          </button>
        </div>
      
      </div>


      <div className={`forgotPassword-otp-form-body ${viewForm=="forgotPassword-otp"?'block':'hidden'} md:w-1/2 max-w-md shadow-xl border-2 border-white rounded-md p-20`}>
        <div className="flex items-center flex-col justify-center">
          <div className="rounded-full bg-green-200 p-4">
          <MdOutlinePassword size={25} color="black"/>
        </div>
       
        <div className="text-center md:text-left mt-2">
          
          <label className="mr-1 flex justify-center mb-4 text-600 text-black text-xl">FORGOT PASSWORD</label>
          
        </div>
        <div className="text-center md:text-left">
          
          <label className="mr-1 flex justify-center text-600 text-gray-400 text-sm">We sent OTP code to your mobile number</label>
          
        </div>

        </div>
        <div className="text-center md:text-left">
          <label className="mr-1 flex justify-center mb-4  text-red-500 font-bold text-sm">{forgotPasswordError}</label>
          
        </div>

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          name="otp"
          value={forgotPasswordInputs.otp || ""}
          placeholder="OTP"
          onChange={forgotPasswordInputsChange}
          required
        />
        
        
        
        <div className="text-center md:text-left flex items-center justify-center">
         
            {forgotPasswordStatus?(
               <button 
               className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
               type="submit"
             >
            
            <div role="status" className=" w-full flex justify-center items-center ">
            <svg aria-hidden="true" className="inline flex justify-center w-4 h-4 text-white animate-spin  fill-black " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          </button>
          ):
          (
            <button onClick={handleForgotPasswordOtpFormData}
            className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >

           <span>Continue</span>
           </button>

          )}

           
         
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Login From Here{" "} 
          <button onClick={()=>setViewForm("login")}
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
             Login
          </button>
        </div>
      
      </div>

      
      <div className={`forgotPassword-password-form-body ${viewForm=="forgotPassword-password"?'block':'hidden'} md:w-1/2 max-w-md shadow-xl border-2 border-white rounded-md p-20`}>
        <div className="flex items-center flex-col justify-center">
          <div className="rounded-full bg-green-200 p-4">
          <MdOutlinePassword size={25} color="black"/>
        </div>
       
        <div className="text-center md:text-left mt-2">
          
          <label className="mr-1 flex justify-center mb-4 text-600 text-black text-xl">FORGOT PASSWORD</label>
          
        </div>
        <div className="text-center md:text-left">
          
          <label className="mr-1 flex justify-center text-600 text-gray-400 text-sm">Create Your New Password</label>
          
        </div>

        </div>
        <div className="text-center md:text-left">
          <label className="mr-1 flex justify-center mb-4  text-red-500 font-bold text-sm">{forgotPasswordError}</label>
          
        </div>

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          name="password"
          value={forgotPasswordInputs.password || ""}
          placeholder="Enter New Password"
          onChange={forgotPasswordInputsChange}
          required
        />
        
        
        
        <div className="text-center md:text-left flex items-center justify-center">
         
            {forgotPasswordStatus?(
               <button 
               className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
               type="submit"
             >
            
            <div role="status" className=" w-full flex justify-center items-center ">
            <svg aria-hidden="true" className="inline flex justify-center w-4 h-4 text-white animate-spin  fill-black " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          </button>
          ):
          (
            <button onClick={handleForgotPasswordPasswordFormData}
            className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >

           <span>Continue</span>
           </button>

          )}

           
         
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Login From Here{" "} 
          <button onClick={()=>setViewForm("login")}
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
             Login
          </button>
        </div>
      
      </div>

      
    </section>
 

   
   </>
  )
}

export default LoginPage