import mongoose from "mongoose";
import { connectionString } from "@/app/database/db";
import { Userdata } from "@/app/database/models/userdata";
import { NextResponse } from "next/server";
import { OTP } from "@/app/database/models/otp";

// Function to check mobile number existence
export async function checkMobileNumberExists(mobileNumber) {
 
    await mongoose.connect(connectionString)
    
     
      const user = await Userdata.findOne({ mobileNo: mobileNumber })

      if (user) {
        try {
          const randomOTP = Math.floor(1000 + Math.random() * 9000).toString(); 
          console.log(randomOTP);
  
          const findOtpMobileNo = await OTP.findOne({ mobileNo: mobileNumber });
          if(findOtpMobileNo){
  
            await OTP.deleteOne({ mobileNo: mobileNumber });
            
        }
        const newOTP = new OTP({
          mobileNo: mobileNumber,
          otp: randomOTP,
        });
  
      const d= await newOTP.save();
      console.log(d);
  
          return true;
        } catch (error) {
          console.error("Error saving OTP:", error);
          return false;
        }
      } else {
      
      return false;
      }
   
    //console.log("not here...")
    
 
}

// Example usage in a Next.js route handler (route.js)
export async function POST(req, res) {
    
  if (req.method === "POST") {
    const body = await req.json(); 
   
    const mobileNumber=body.mobileno;
  
    try {
      const mobileNumberExists = await checkMobileNumberExists(mobileNumber);
      if (!mobileNumberExists) {
        
      return NextResponse.json({ message: "Mobile NO. Not Exist" , success:false});
        
      } 
     // console.log(mobileNumberExists)
     // console.log("fsfsdf")
      return NextResponse.json({message:"Mobile No. Exist",success:true})
      
    } catch (error) {
    //  console.log("Fsdfsdf");
      return NextResponse.json({ message: error.message,success:false });
  
    }
  }
}

