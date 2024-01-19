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
        try {
          const formData = await req.formData();
          const inputValue = formData.get("inputValue");
      
          await mongoose.connect(connectionString);
      
          // Access the collection and create the index
         
          const results = await Propertylisting.aggregate([
            {
                $match: {
                    $or: [
                        { city: { $regex: new RegExp(inputValue, "i") } },
                        { landmark: { $regex: new RegExp(inputValue, "i") } },
                        { address: { $regex: new RegExp(inputValue, "i") } }
                    ]
                }
            },
            {
                $lookup: {
                    from: 'propertyphotos', 
                    localField: 'productId',
                    foreignField: 'productId',
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
                  images:'$images.fileName',
                  
                }
            },
            
        ]);
          console.log(results);
                    
          if(results.length==0){
            return NextResponse.json({ ProductDetails:"no result found",result:false});
          }
          return NextResponse.json({ ProductDetails: results ,result:true});
        } catch (error) {
          console.error(error);
          return NextResponse.json({ error: "Failed to retrieve data" });
        }
      }

      

  console.log("server end")
  
}

