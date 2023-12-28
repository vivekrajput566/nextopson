import mongoose from "mongoose";
import { connectionString } from "@/app/database/db";
import { Userdata } from "@/app/database/models/userdata";


export default async function Login(mobileNumber, password){

    try{
        console.log("hellooooo")
    const connected= await mongoose.connect(connectionString);
    // console.log(connected);

    // const user = await Userdata.findOne({ mobileNumber });
    // if (!user) {
    //     throw new Error('Invalid mobile number or password');
    //   }
  
    //   if (!await bcrypt.compare(password, user.password)) {
    //     throw new Error('Invalid mobile number or password');
    //   }
  
    //   // Successful login
    //   return true;
    } catch (error) {
      console.error(error);
     // console.log("DB NOT CONNECTED"); // Re-throw to allow handling at a higher level
    }

}