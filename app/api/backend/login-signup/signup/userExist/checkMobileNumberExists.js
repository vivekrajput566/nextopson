import mongoose from "mongoose";
import { connectionString } from "@/app/database/db";
import { Userdata } from "@/app/database/models/userdata";
import { NextResponse } from "next/server";
import { OTP } from "@/app/database/models/otp";

// Function to check mobile number existence
export async function checkMobileNumberExists(mobileNumber) {
 
    await mongoose.connect(connectionString)
    
     
      const user = await Userdata.findOne({ mobileNo: mobileNumber })
      console.log(user);
      if (!user) {
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
  
          return false;
        } catch (error) {
          console.error("Error saving OTP:", error);
          return true;
        }
      } else {
      
        console.log("here..")
      return true;
      }
   
    //console.log("not here...")
      
 
}