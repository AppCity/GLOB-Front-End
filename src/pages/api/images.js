//Formidable
import { IncomingForm } from "formidable";
let cloudinary = require("cloudinary").v2;

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Disable default parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // Parse form with a Promise wrapper
  const clientForm = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ files, fields });
    });
  });

  const file = clientForm?.files?.image;
  const userId = clientForm?.fields?.userId;
  const blogId = clientForm?.fields?.blogId;
  const folder = clientForm?.fields?.folder;
  const fileName = file.name.split(".").shift();
  const extn = "." + file.name.split(".").pop();
  const filePath = file.path;

  let public_id = userId;
  if (blogId) {
    public_id = blogId;
  }

  //Upload Image
  try {
    cloudinary.uploader.upload(
      filePath,
      {
        resource_type: "image",
        public_id: public_id,
        overwrite: true,
        folder: folder,
      },
      function (error, result) {
        if (error) {
          // console.log("ERROR Image Upload==>", { error });
          return res.status(422).json(error);
        } else {
          // console.log("SUCCESS==>", result);
          res.status(200).json({ imageUrl: result.url });
        }
      }
    );
  } catch (error) {
    // console.log("🚀 --- Update User Image --- error", error);
    res.status(422).json(error);
  }
}
