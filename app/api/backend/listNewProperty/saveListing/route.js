import mongoose from "mongoose";
import { connectionString } from "@/app/database/db";
import { Userdata } from "@/app/database/models/userdata";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import { writeFile } from "fs/promises";
import { Propertylisting } from "@/app/database/models/propertyListing";
import { Propertyphotos } from "@/app/database/models/propertyPhotos";
import AWS from 'aws-sdk';
import { getServerSession } from "next-auth";
import { AuthOptions } from "../../../authOptions";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from 'sharp';

export async function POST(req, res) {

  console.log("Fdsfsdf")
  
    
  if (req.method === "POST") {



       
    const sessionData=await getServerSession(AuthOptions);
    if(!sessionData){
      return NextResponse.json({validUser:false});
    }
    const mobileno=sessionData.user.mobileno;
    console.log(sessionData)
    await mongoose.connect(connectionString)
   
    const formData = await req.formData();
     
     const allFile = await formData.getAll('files[]');
    
    
     //console.log(formData)
   //  return NextResponse.json({fsdfsdf:"no file"});
 
     if(!allFile){
      return NextResponse.json({fsdfsdf:"no file"});
     }

     const client_s3 = new S3Client({
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  
    });




     console.log(allFile.length)
     console.log(typeof allFile)

     const productId=uuidv4();
   
     if (allFile) {
      const uploads = await Promise.all(
        Object.entries(allFile).map(async ([key, file]) => {
          const fileName = uuidv4()+'.webp';
    
          const propertyImageData = {
            productId: productId,
            mobileno: mobileno,
            fileName: fileName,
          };
    
          const propertyPhotos = new Propertyphotos(propertyImageData);
          await propertyPhotos.save(); // Save to database
    
          const byteData = await file.arrayBuffer();
          const buffer = Buffer.from(byteData);
          
          const webBuffer = await sharp(buffer)
          .webp({ quality: 80 }) // Adjust quality as needed
          .toBuffer();

    
          const response = await client_s3.send(new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET,
            Key: `productPhotos/${fileName}.webp`, // Use .webp extension
            Body: webBuffer,
            ACL: 'public-read',
            ContentType: 'image/webp', // Set correct MIME type
          }));
          console.log(response);
        })
      );
    }

    //  const productId=uuidv4();

    //  Object.entries(allFile).forEach(async ([key, value]) => {
      
    //   const fileName=uuidv4();

    //   const propertyImageData = {
    //     productId: productId,
    //     mobileno: mobileno,
    //     fileName: fileName,
    //   }

    //   const propertyPhotos = new Propertyphotos(propertyImageData);
    //   await propertyPhotos.save();
    //   const byteData= await value.arrayBuffer();
    //   const buffer = Buffer.from(byteData);
      
    //   const path=`./public/productPhotos/${fileName}.webp`;
    //   await writeFile(path,buffer)
      
    // });

    
    
     const propertyData = {
      productId: productId,
      mobileno: mobileno,
      username: formData.get('username'),
      contactno: formData.get('contactno'),
      city: formData.get('city'),
      bhk: formData.get('bhk'),
      price: formData.get('price'),
      propertyFor: formData.get('propertyFor'),
      address: formData.get('address'),
      furniture: formData.get('furniture'),
      landmark: formData.get('landmark'),
      airConditioning: formData.get('airConditioning'),
      bathrooms: formData.get('bathrooms'),
      bedrooms: formData.get('bedrooms'),
      carpetArea: formData.get('carpetArea'),
      description: formData.get('description'),
      listedBy: formData.get('listedBy'),
      parkingAvailable: formData.get('parkingAvailable'),
      propertyType: formData.get('propertyType'),
      
    };

    console.log(propertyData);
   
    const property = new Propertylisting(propertyData);
      await property.save();
     
    
      
    return NextResponse.json({success:true,validUser:true});
  


  }
 
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '100mb',
    },
  },
}