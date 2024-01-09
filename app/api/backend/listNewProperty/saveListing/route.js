import mongoose from "mongoose";
import { connectionString } from "@/app/database/db";
import { Userdata } from "@/app/database/models/userdata";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import { writeFile } from "fs/promises";
import { Propertylisting } from "@/app/database/models/propertyListing";
import { Propertyphotos } from "@/app/database/models/propertyPhotos";

import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req, res) {

  console.log("Fdsfsdf")
  
    
  if (req.method === "POST") {
       
    const sessionData=await getServerSession(AuthOptions);
    if(!sessionData){
      return NextResponse.json({validUser:false});
    }
    const mobileno=sessionData.user.mobileno;
    await mongoose.connect(connectionString)
   
    const formData = await req.formData();
     
     const allFile = formData.getAll('files[]');
    
    
     //console.log(formData)
   //  return NextResponse.json({fsdfsdf:"no file"});
 
     if(!allFile){
      return NextResponse.json({fsdfsdf:"no file"});
     }
     console.log(allFile.length)
     console.log(typeof allFile)

     const productId=uuidv4();

     Object.entries(allFile).forEach(async ([key, value]) => {
      
      const fileName=uuidv4();

      const propertyImageData = {
        productId: productId,
        mobileno: mobileno,
        fileName: fileName,
      }

      const propertyPhotos = new Propertyphotos(propertyImageData);
      await propertyPhotos.save();
      const byteData= await value.arrayBuffer();
      const buffer = Buffer.from(byteData);
      
      const path=`./public/productPhotos/${fileName}.webp`;
      await writeFile(path,buffer)
      
    });

    
    
     const propertyData = {
      productId: productId,
      mobileno: mobileno,
      airConditioning: formData.get('airConditioning'),
      bathrooms: formData.get('bathrooms'),
      bedrooms: formData.get('bedrooms'),
      carpetArea: formData.get('carpetArea'),
      description: formData.get('description'),
      furniture: formData.get('furniture'),
      listedBy: formData.get('listedBy'),
      parkingAvailable: formData.get('parkingAvailable'),
      price: formData.get('price'),
      propertyFor: formData.get('propertyFor'),
      propertyType: formData.get('propertyType'),
      landmark: formData.get('landmark'),
    };
   
    const property = new Propertylisting(propertyData);
      await property.save();
     
    
      
    return NextResponse.json({fsdfsdf:"Fsdfsf"});
  


  }
  console.log("server end")
  
}

