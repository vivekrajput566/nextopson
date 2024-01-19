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
  
   // const formData = await req.formData();
   // const productId= formData.get("productId");
    await mongoose.connect(connectionString)
    const productData = await Propertylisting.aggregate([
      { $sample: { size: 4 } },
      {
          $lookup: {
              from: 'propertyphotos', // Replace 'propertyphotos' with the actual name of your Propertyphotos collection
              localField: 'productId', // The field in the PropertyListing collection
              foreignField: 'productId', // The field in the Propertyphotos collection
              as: 'images'
          }
      },
      {
          $project: {
            _id: 1,
            productId: 1,
            username: 1,
            contactno: 1,
            city: 1,
            bhk: 1,
            price: 1,
            propertyFor: 1,
            address: 1,
            furniture: 1,
            landmark: 1,
            airConditioning: 1,
            bathrooms: 1,
            bedrooms: 1,
            carpetArea: 1,
            description: 1,
            listedBy: 1,
            parkingAvailable: 1,
            propertyType: 1,
            createdAt: 1,
            filename:'$images.fileName'
          
          }
      }
  ]);
  
    
    return NextResponse.json({ProductDetails:productData});
  

  }
  
  
}

