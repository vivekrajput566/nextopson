import mongoose from "mongoose";
import { connectionString } from "@/app/database/db";
import { Userdata } from "@/app/database/models/userdata";
import bcrypt from 'bcryptjs';


export default async function Login(mobileNumber, password){

    try{
        // console.log("hellooooo")
        // const userr = new Userdata({
        //     mobileNo: '7840034924',
        //     password: '1237845124',
        //     username: 'vivek',
        //     email: 'vivek@gmail.com'
        // });
        
        // // Insert the data
        // userr.save()
//         const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);

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
     // console.log("DB NOT CONNECTED"); // Re-throw to allow handling at a higher level
    }

}