import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { NextResponse } from "next/server";



export async function POST(req, res) {
    if (req.method === "POST") {
        const client_s3 = new S3Client({
            region: process.env.AWS_REGION,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            signatureVersion: 'v4',
        });

        const params = {
            Bucket: process.env.AWS_BUCKET,
            Key: `productPhotos/hello000011111.jpg`,
            ACL: 'public-read',
           
        };

        const command = new PutObjectCommand(params);
        const presignedUrl = await getSignedUrl(client_s3, command, { expiresIn: 300 });

        return NextResponse.json({preSignedUrlArr:presignedUrl});
    }
}
