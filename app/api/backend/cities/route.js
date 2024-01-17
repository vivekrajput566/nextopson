import mongoose from "mongoose";
import { connectionString } from "@/app/database/db";
import { Userdata } from "@/app/database/models/userdata";
import { NextResponse } from "next/server";


export async function POST(req , res) {


  if (req.method === "POST") {
  

    const cititesDetail=[
        
            {
                    name:"Indore",
                    photo:"Indore.webp"
            },
            {
                name:"Delhi",
                photo:"Delhi.webp"
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

