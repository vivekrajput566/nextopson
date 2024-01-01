import mongoose from "mongoose";
import { connectionString } from "@/app/database/db";
import { Userdata } from "@/app/database/models/userdata";
import bcrypt from 'bcryptjs';


export default async function Login(mobileNumber, password){

    try{
      

    const connected= await mongoose.connect(connectionString);
    //console.log(connected);
       
    const user = await Userdata.findOne({mobileNo:mobileNumber});
       // console.log(mobileNumber)
    if (!user) {
     
        throw new Error('Invalid mobile number or password');
      }
  
      if (!await bcrypt.compare(password, user.password)) {
        throw new Error('Invalid Password');
      }
  
      // Successful login
      return true;

    } catch (error) {
     // console.error(error);
      throw new Error("Invalid Mobile No. or Password")
    
    }
    finally {
       
        await mongoose.disconnect();
      } 

}