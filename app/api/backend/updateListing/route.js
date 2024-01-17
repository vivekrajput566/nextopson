import mongoose from "mongoose";
import { connectionString } from "@/app/database/db";
import { Userdata } from "@/app/database/models/userdata";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import { writeFile } from "fs/promises";
import { Propertylisting } from "@/app/database/models/propertyListing";
import { Propertyphotos } from "@/app/database/models/propertyPhotos";

import { getServerSession } from "next-auth";

import { AuthOptions } from '../../authOptions';

export async function POST(req, res) {

  console.log("Fdsfsdf")
  
    
  if (req.method === "POST") {
       
    const sessionData=await getServerSession(AuthOptions);
    if(!sessionData){
     // return NextResponse.json({validUser:false});
    }
    const mobileno="9999999990";             //sessionData.user.mobileno;
    await mongoose.connect(connectionString)
   
    const formData = await req.formData();
     
     const allFile = formData.getAll('files[]');
    
    
     //console.log(formData)
   //  return NextResponse.json({fsdfsdf:"no file"});

    const productId=formData.get('productId')
    //const mobileno= mobileno

   const propertyData = {
    
    
    city: formData.get('city'),
    airConditioning: formData.get('airConditioning'),
    bathrooms: formData.get('bathrooms'),
    address: formData.get('address'),
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
    deleteImageList : formData.get('deleteImageList')
  };
 
 
     if(allFile){
     
    
        //const productId=uuidv4();

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

      }

    
    
     
   // const property = new Propertylisting(propertyData);

    const filter = { productId: productId };


// `doc` is the document _before_ `update` was applied
    const updateListing = await Propertylisting.findOneAndUpdate(filter, propertyData);
    
    const deleteImageListString= propertyData.deleteImageList;
    

     const deleteImageList=JSON.parse(deleteImageListString.replace(/'/g, '"'));


    if(deleteImageList.length>0){

       
      const deleteQuery={fileName:{$in:deleteImageList}}

    try{

      const deleteImages=await Propertyphotos.deleteMany(deleteQuery);
      console.log(deleteImages)
     
    }
    catch(error){
      console.log(error)
    }
      console.log("hereeeeeee");

     
    }
    
      
    return NextResponse.json({fsdfsdf:"Fsdfsf"});
  


  }
 
}

