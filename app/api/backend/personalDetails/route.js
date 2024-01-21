import mongoose from "mongoose";
import { connectionString } from "@/app/database/db";
import { Userdata } from "@/app/database/models/userdata";
import { NextResponse } from "next/server";
//import { v4 as uuidv4 } from 'uuid';
import { writeFile } from "fs/promises";
import { Propertylisting } from "@/app/database/models/propertyListing";
import { Propertyphotos } from "@/app/database/models/propertyPhotos";

import { getServerSession } from "next-auth";
import { AuthOptions } from "../../authOptions";


export async function POST(req , res) {


  
    
if (req.method === "POST") {
  


    const sessionData=await getServerSession(AuthOptions);

    if(!sessionData){
    
      return NextResponse.json({personalDetails:[],validUser:false});
    
    }
    const formData = await req.formData();
    const productId= formData.get("productId");
    await mongoose.connect(connectionString)
    const personalDetails = await Propertylisting.findOne({ productId: productId }, { contactno: 1,mobileno: 1, username: 1, address: 1 });

    
    return NextResponse.json({personalDetails:personalDetails,validUser:true});
  

  }
  console.log("server end")

  
  
}

