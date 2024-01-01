import mongoose from "mongoose";
import { connectionString } from "@/app/database/db";
import { Userdata } from "@/app/database/models/userdata";
import { NextResponse } from "next/server";
import { OTP } from "@/app/database/models/otp";
import bcrypt from 'bcryptjs';

export async function checkMobileNumberExists(mobileNumber) {
  try {
    await mongoose.connect(connectionString);
    const user = await Userdata.findOne({ mobileNo: mobileNumber });
    
    return !!user; // Return true if user exists, false otherwise
  } catch (error) {
    console.error("Error checking mobile number:", error);
    throw new Error("An error occurred while checking mobile number.");
  } finally {
    await mongoose.disconnect();
  }
}


export async function POST(req, res) {
  
    if (req.method === "POST") {
       
        const body = await req.json();
       
        const mobileNumber = body.mobileno;
        
        const enteredOTP = body.otp;
    
        try {
          
          const mobileNumberExists = await checkMobileNumberExists(mobileNumber);
          if (!mobileNumberExists) {
            return NextResponse.json({ message: "Mobile no. already exists.", success: false });
          }
          await mongoose.connect(connectionString)
       
            
            const otpData = await OTP.findOne({ mobileNo: mobileNumber });
          if (!otpData || otpData.otp !== enteredOTP) {
            //console.log(otpData)
            return NextResponse.json({ message: "Invalid OTP", success: false });
          }
    
          // Check OTP validity based on timestamp
          if (otpData.expiresAt < Date.now()) {
            return NextResponse.json({ message: "OTP has expired", success: false });
          }

       
    
          return NextResponse.json({ message: "RIGHT OTP", success: true });
         
    
          
        } catch (error) {
          return NextResponse.json({ message: error.message, success: false });
        }
        finally {
            await mongoose.disconnect();
          }
      }


}

