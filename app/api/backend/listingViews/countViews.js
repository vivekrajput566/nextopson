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

export async function CountViews(productId) {

    const productId=productId;
    await mongoose.connect(connectionString)
    const property = new Propertylisting(propertyData);
      await property.save();

    
    return NextResponse.json({personalDetails:personalDetails});
  

  }
  console.log("server end")

  
  
}

