import mongoose from "mongoose";
import { connectionString } from "@/app/database/db";
import { Userdata } from "@/app/database/models/userdata";
import { NextResponse } from "next/server";
//import { v4 as uuidv4 } from 'uuid';
import { writeFile } from "fs/promises";
import { Propertyviews } from "@/app/database/models/propertyViews";

import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/route";

export async function CountViews(viewProductId) {

    const productId=viewProductId;

    console.log(productId)

    // const sessionData=await getServerSession(AuthOptions);
    // if(!sessionData){
    //   return false;
    // }
    const mobileno=sessionData.user.mobileno;
    const username=sessionData.user.username;
    
    


    const viewerDetails={
      productId:productId,
      mobileno:mobileno,
      username:username,
      
    }

   
    


    await mongoose.connect(connectionString)
    const propertyViews = new Propertyviews(viewerDetails);
      await propertyViews.save();

    
  //  return NextResponse.json({personalDetails:personalDetails});
  

  }

