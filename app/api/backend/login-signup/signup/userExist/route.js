import mongoose from "mongoose";
import { connectionString } from "@/app/database/db";
import { Userdata } from "@/app/database/models/userdata";
import { NextResponse } from "next/server";
import { OTP } from "@/app/database/models/otp";
import { checkMobileNumberExists } from "./checkMobileNumberExists";



// Example usage in a Next.js route handler (route.js)
export async function POST(req, res) {
    
  if (req.method === "POST") {
    const body = await req.json(); 
   
    const mobileNumber=body.mobileno;
  
    try {
      const mobileNumberExists = await checkMobileNumberExists(mobileNumber);
      if (mobileNumberExists) {
        
      return NextResponse.json({ message: "Mobile no. already exists." , success:false});
        
      } 
     // console.log(mobileNumberExists)
     // console.log("fsfsdf")
      return NextResponse.json({message:"Mobile no. not exist",success:true})
      
    } catch (error) {
    //  console.log("Fsdfsdf");
      return NextResponse.json({ message: error.message,success:false });
  
    }
  }
}

