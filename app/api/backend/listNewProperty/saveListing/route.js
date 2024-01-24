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
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export async function POST(req, res) {

  console.log("Fdsfsdf")
  
    
  if (req.method === "POST") {


    try{
       
        const sessionData=await getServerSession(AuthOptions);
        if(!sessionData){
          console.log("inside session block....")
          return NextResponse.json({validUser:false});
        }
        const mobileno=sessionData.user.mobileno;
        console.log(sessionData)
        await mongoose.connect(connectionString)
      
        const formData = await req.formData();
        
        const allFile = await formData.get('allFiles');
        
        
        console.log(formData)
        
      //  return NextResponse.json({fsdfsdf:"no file"});
    
        //  if(!allFile){
        //   return NextResponse.json({fsdfsdf:"no file"});
        //  }

        const client_s3 = new S3Client({
          region: process.env.AWS_REGION,
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          signatureVersion: 'v4',
      });



     console.log(typeof allFile)

     const productId=uuidv4();
     
     let preSignedUrls
   
     if (allFile) {

      console.log(allFile);
       preSignedUrls = await Promise.all(

        Array.from({ length: allFile }, async (_, i) => {
          const fileName = uuidv4() + '.webp';
          
          console.log(fileName);
          // Create database entry (if needed)
          const propertyImageData = {
            productId: productId,
            mobileno: mobileno,
            fileName: fileName,
          };
          const propertyPhotos = new Propertyphotos(propertyImageData);
          await propertyPhotos.save();
      
          // Generate presigned URL
          const params = {
            Bucket: process.env.AWS_BUCKET,
            Key: `productPhotos/${fileName}`,
            ACL: 'public-read',
            ContentType: 'image/webp',
                      
          };

          const command = new PutObjectCommand(params);
          const presignedUrl = await getSignedUrl(client_s3, command, { expiresIn: 300 });
          console.log(presignedUrl);
          return presignedUrl; // Return the presigned URL instead of uploading
        })
      );

        console.log(preSignedUrls);

      // const uploads = await Promise.all(
      //   Object.entries(allFile).map(async ([key, file]) => {
      //     const fileName = uuidv4()+'.webp';
    
      //     const propertyImageData = {
      //       productId: productId,
      //       mobileno: mobileno,
      //       fileName: fileName,
      //     };
    
      //     const propertyPhotos = new Propertyphotos(propertyImageData);
      //     await propertyPhotos.save(); // Save to database
    
      //     const byteData = await file.arrayBuffer();
      //     const buffer = Buffer.from(byteData);
          
      //     const webBuffer = await sharp(buffer)
      //     .webp({ quality: 80 }) // Adjust quality as needed
      //     .toBuffer();

    
      //     const response = await client_s3.send(new PutObjectCommand({
      //       Bucket: process.env.AWS_BUCKET,
      //       Key: `productPhotos/${fileName}`, // Use .webp extension
      //       Body: webBuffer,
      //       ACL: 'public-read',
      //       ContentType: 'image/webp', // Set correct MIME type
      //     }));
      //     console.log(response);
      //   })
      // );
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

    //console.log(propertyData);
   
    const property = new Propertylisting(propertyData);
      await property.save();
     
    
      
    return NextResponse.json({success:true,preSignedUrlArr:preSignedUrls,validUser:true});
    }

    catch(error){
      console.log("HERE IS THE ERROR ",error);

      return NextResponse.json({success:false,preSignedUrlArr:[],validUser:true});
    }


  }
 
}

