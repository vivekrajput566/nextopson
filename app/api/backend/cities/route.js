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
    const productId= formData.get("productId");
    const cititesDetail=[
        
            {
                    name:"Indore",
                    photo:"indore.webp"
            },
            {
                name:"Delhi",
                photo:"delhi.webp"
            },
            {
                name:"Banglore",
                photo:"Bangalore.webp"
        
             },
             {
                name:"Kolkata",
                photo:"Kolkata.webp"
        
             },
             {
                name:"Mumbai",
                photo:"Mumbai.webp"
        
             },
             {
                name:"Pune",
                photo:"Pune.webp"
        
             },

    
        ]
    
    return NextResponse.json({cititesDetail:cititesDetail});
  

  }
 
  
}

