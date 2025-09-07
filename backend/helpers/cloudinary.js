import dotenv from "dotenv";
dotenv.config();

import { v2 as cloudinary } from "cloudinary";

// console.log("Cloudinary ENV Values Check:", {
//   CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
//   CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
//   CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET ? "HIDDEN" : undefined,
// });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadMediaToCloudinary = async (filePath) => {
  try {
    return await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error("Cloudinary Error in Uploading Media");
  }
};

const deleteMediaFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Cloudinary Error in Deleting Media");
  }
};

export { uploadMediaToCloudinary, deleteMediaFromCloudinary };
