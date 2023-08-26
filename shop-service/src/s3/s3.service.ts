import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';

@Injectable()
export class S3Service {
  /*constructor(private readonly s3: S3) {}

  async uploadImageToS3(
    bucketName: string,
    imageBuffer: Buffer,
  ): Promise<string> {
    const imageName = `images/${Date.now()}.jpg`; // Example image path

    const result = await this.s3
      .upload({
        Bucket: bucketName,
        Key: imageName,
        Body: imageBuffer,
        ContentType: 'image/jpeg', // Adjust the content type based on your needs
      })
      .promise();

    return result.Location;
  }

  async deleteImageFromS3(
    bucketName: string,
    imagePath: string,
  ): Promise<void> {
    await this.s3
      .deleteObject({
        Bucket: bucketName,
        Key: imagePath,
      })
      .promise();
  }*/
}
