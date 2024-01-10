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
   // const productId= formData.get("productId");
    await mongoose.connect(connectionString)
    const productData = await Propertylisting.aggregate([
       
        { $sample: { size: 4 } }
      ]);
    
    return NextResponse.json({ProductDetails:productData});
  

  }
  console.log("server end")
  
}

