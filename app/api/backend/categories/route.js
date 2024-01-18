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
  
    const indore_landmark = [
        'dhabli',
        'niranjanpur',
        'nipania',
        'mahalaxmi nagar',
        'bicholi mardana',
        'bhanwarkuwa',
        'rajendra nagar',
        'rau',
        'lalbagh palace',
        'chandan nagar',
        'sukhlia',
        'vijaynagar',
        'palasia',
        'supercorridor'
      ];

    const categories = [{
        name: "Indore", isSubcategories: true, subcategories: [
          
        ...indore_landmark

      
        ]
      }
        , { name: "Delhi", isSubcategories: false }, { name: "Kolkata", isSubcategories: false }, { name: "Mumbai", isSubcategories: false }, { name: "Pune", isSubcategories: false }]
      
  
    return NextResponse.json({categoryDetails:categories,result:true});
  

  }
  //console.log("server end")
  
}








