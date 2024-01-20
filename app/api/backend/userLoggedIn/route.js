import mongoose from "mongoose";
import { connectionString } from "@/app/database/db";
import { Userdata } from "@/app/database/models/userdata";
import { NextResponse } from "next/server";
//import { v4 as uuidv4 } from 'uuid';
import { writeFile } from "fs/promises";
import { Propertyviews } from "@/app/database/models/propertyViews";

import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req,res) {




    const sessionData=await getServerSession(AuthOptions);
    if(!sessionData){
        return NextResponse.json({validUser:false});
    }


    return NextResponse.json({validUser:true});
  

  }

