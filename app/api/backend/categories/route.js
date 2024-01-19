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

    const pune_landrmark=[

      'Vittal Nagar',
      'Pimpri Chinchwad',
      'Wakad',
      'Hinjewadi',
      'Baner',
      'Wagholi',
      'Viman Nagar',
      'Kharadi',
      'Hadapsar',
      'Shivaji Nagar',
      'Koregaon Park',
      'Gopal Patti',
      'Autadwadi',
      'Uruli Devachi',
      'Kondhwa',
      'Dhankawadi',
      'Khadewadi',
      'Dattawadi',
      'Swar Gate',
      'Magarpatta',
      'Gokhale Nagar',
      'Kalyani Nagar',
      'Kothrud'

    ]

    const categories = [{
        name: "Indore", isSubcategories: true, subcategories: [
          
        ...indore_landmark

      
        ]
      }
        , 
        { name: "Pune", isSubcategories: true, subcategories: [
          
          ...pune_landrmark
  
        
          ] }, 
        
        
        { name: "Kolkata", isSubcategories: false }, { name: "Mumbai", isSubcategories: false }, { name: "Delhi", isSubcategories: false }]
      
  
    return NextResponse.json({categoryDetails:categories,result:true});
  

  }
  //console.log("server end")
  
}








