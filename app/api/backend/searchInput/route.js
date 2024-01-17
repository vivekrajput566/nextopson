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
         
          const results = await Propertylisting.find({
            $or: [
              { city: { $regex: new RegExp(inputValue, "i") } },
              { landmark: { $regex: new RegExp(inputValue, "i") } },
              { address: { $regex: new RegExp(inputValue, "i") } }
            ]
          }).select('-mobileno');
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

