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
