/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WsS3Service {
    constructor(private configService: ConfigService){}
    s3 = new S3({
        
        accessKeyId: process.env.AWS_S3_USER_ACCESS_KEY,
        // accessKeyId: 'AKIA2SYGUG7NDJ3HE44P',
        // secretAccessKey: '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',
        secretAccessKey: process.env.AWS_S3_USER_SECRET_ACCESS_KEY,
    });


    async uploadFile(file) {
        
        const { originalname } = file;

        await this.s3_upload(file.buffer, process.env.AWS_S3_BUCKET, originalname, file.mimetype);
    }

    private async s3_upload(file, bucket, name, mimetype)
    {
        const params = 
        {
            Bucket: bucket,
            Key: String(name),
            Body: file,
            // ACL: "public-read",
            ContentType: mimetype,
            ContentDisposition:"inline",
            CreateBucketConfiguration: 
            {
                LocationConstraint: process.env.AWS_S3_REGION
                // LocationConstraint: "ap-south-1"
            }
        };

        console.log(params);

        try {
            const s3Response = await this.s3.upload(params).promise();
            console.log(s3Response);
        }
        catch (e) {
            console.log(e);
        }
    }
}
