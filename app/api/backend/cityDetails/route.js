import mongoose from "mongoose";
import { connectionString } from "@/app/database/db";
import { Userdata } from "@/app/database/models/userdata";
import { NextResponse } from "next/server";
//import { v4 as uuidv4 } from 'uuid';
import { writeFile } from "fs/promises";
import { Propertylisting } from "@/app/database/models/propertyListing";
import { Propertyphotos } from "@/app/database/models/propertyPhotos";

import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req , res) {


  if (req.method === "POST") {
  
    const formData = await req.formData();
    const cityName= formData.get("cityname");
    await mongoose.connect(connectionString);

    const cityDetails = await Propertylisting.find({city: { $regex: new RegExp(cityName, "i") }}).select('-mobileno,-username');
    



    if(cityDetails.length==0){
    
      return NextResponse.json({cityDetails:cityDetails,result:false});

    }
  
    return NextResponse.json({cityDetails:cityDetails,result:true});
  

  }
  //console.log("server end")
  
}

