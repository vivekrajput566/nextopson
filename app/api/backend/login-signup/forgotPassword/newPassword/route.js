import mongoose from "mongoose";
import { connectionString } from "@/app/database/db";
import { Userdata } from "@/app/database/models/userdata";
import { NextResponse } from "next/server";
import { OTP } from "@/app/database/models/otp";
import bcrypt from 'bcryptjs';
import { checkMobileNumberExists } from "./checkMobileNumberExists"

export async function POST(req, res) {
  
    if (req.method === "POST") {
       
        const body = await req.json();
       
        const mobileNumber = body.mobileno;
        const password = body.password;
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

          const saltRounds = 10; 
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

          const PasswordData = await Userdata.findOneAndUpdate({ mobileNo: mobileNumber }, { password: hashedPassword },{new:true});

    
          return NextResponse.json({ message: "NEW PASSWORD CREATED", success: true });
         
    
          
        } catch (error) {
          return NextResponse.json({ message: error.message, success: false });
        }
        finally {
            await mongoose.disconnect();
          }
      }


}

