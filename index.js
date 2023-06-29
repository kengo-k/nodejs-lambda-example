const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

exports.handler = async (event) => {
  const s3Client = new S3Client({ region: "ap-northeast-1" });
  const params = {
    Bucket: event.bucketName,
    Key: event.objectName,
    Body: "Hello, World!",
  };

  try {
    const data = await s3Client.send(new PutObjectCommand(params));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};
