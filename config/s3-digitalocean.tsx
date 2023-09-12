import { S3Client } from "@aws-sdk/client-s3";

export const s3client = new S3Client({
  forcePathStyle: false,
  endpoint: process.env.DO_SPACE_ENDPOINT as string,
  region: process.env.DO_SPACE_REGION as string,
  credentials: {
    accessKeyId: process.env.DO_SPACE_ID as string,
    secretAccessKey: process.env.DO_SPACE_SECRET as string,
  },
});
