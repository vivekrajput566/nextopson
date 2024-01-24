
import { NextResponse } from "next/server";

import S3 from  'aws-sdk/clients/s3'


export async function POST(req, res) {

    console.log("Fdsfsdf")
    
      
    if (req.method === "POST") {

        const client_s3 = new S3({
            apiVersion:'2006-03-1',
            region: process.env.AWS_REGION,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            signatureVersion: 'v4',
        
          });

          console.log(process.env.AWS_REGION,"   ",process.env.AWS_ACCESS_KEY_ID,"   ",process.env.AWS_SECRET_ACCESS_KEY,"    ",process.env.AWS_BUCKET)

          const params = {
            Bucket: process.env.AWS_BUCKET,
            Key: `productPhotos/hello.png`,
            Expires: 300,
            ContentType:`image/png`
                      
          };
          
          const presignedUrl = await client_s3.getSignedUrl('putObject',params);


          return NextResponse.json({preSignedUrlArr:presignedUrl});

    }

}