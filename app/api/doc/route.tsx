// Imports your configured client and any necessary S3 commands.
import { CreateBucketCommand } from "@aws-sdk/client-s3";
import { S3 } from "@aws-sdk/client-s3";

// Specifies the new Space's name.
const bucketParams = { Bucket: "example-bucket-name" };

// Creates the new Space.
export async function POST(req: Request) {
  try {
    const s3Client = new S3({
      forcePathStyle: false,
      region: "sgp1",
      endpoint: "https://tmsimage.sgp1.digitaloceanspaces.com",
      credentials: {
        sessionToken:
          "dop_v1_7d4a01c9f820c7fbef37094665f5689ee216c0e7159dd59ca3219f5c0f83034a",
        accessKeyId: "DO00DD43J9KGWUNKT3UZ",
        secretAccessKey: "F/uP9+2g50b2HjvwJKScdCLMQva2tMQjfW2wTk/M8wk",
      },
    });

    const data = await s3Client.send(
      new CreateBucketCommand({
        Bucket: "tmsimagex",
        ACL: "public-read",
      })
    );
    return data;
  } catch (err) {
    return "gagal";
  }
}
