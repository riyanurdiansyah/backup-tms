import { s3client } from "@/config/s3-digitalocean";
import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";

const uploadFile = async (id: string, type: string, file: Blob) => {
    try {
      var format = "";
      if(type == "img" || type == "bg") {
        format = ".png";
      } else {
        format = ".gif"
      }
      const path = "isuzu/" + type + "/" + id + format;
      const baseUrlS3 = process.env.BASE_URL_S3 as string;
      const fileBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(fileBuffer);
      await s3client.send(
        new PutObjectCommand({
          Bucket: process.env.DO_SPACE_BUCKET as string,
          Key: path,
          ACL: "public-read",
          Body: buffer,
        })
      );
      return baseUrlS3 + "/" + path;
    } catch (err) {
      return null;
    }
  };


const deleteFile = async (url: string) => {
  try {
    const urlParts = url.split('/');

    // Mengambil bagian setelah domain (mulai dari index 3)
    const newPath = urlParts.slice(3).join('/');

    // Membuat URL baru dengan tambahan '/' di depan

    const result = await s3client.send(
        new DeleteObjectCommand({
          Bucket: process.env.DO_SPACE_BUCKET as string,
          Key: newPath,
        })
      );
    return result;
  } catch (err) {
    return null;
  }
};

  export default {
      uploadFile,
      deleteFile
  }