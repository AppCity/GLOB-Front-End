import { backEndApi } from "../../api/axios";
import { BACKEND_ROUTES } from "../../constants/backendRoutes";
//Formidable
import { IncomingForm } from "formidable";
import FormData from "form-data";
const fs = require("fs");
//FIXME: Not working
//Disable default parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  //   parse form with a Promise wrapper
  const clientForm = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ files, fields });
    });
  });

  const file = clientForm?.files?.image;

  const userId = clientForm?.fields?.userId;
  const fileName = file.name.split(".").shift();
  const extn = "." + file.name.split(".").pop();
  const filePath = file.path;
  const destFileName =
    userId +
    "/" +
    fileName +
    //"_" +new Date().toISOString().replace(/\s+/g, "_") +
    extn;

  // var stats = fs.statSync(filePath);
  // console.log("is file ? " + stats.isFile());
  // console.log("is directory ? " + stats.isDirectory());
  const form = new FormData();

  // form.append("image", file);
  form.append("userId", userId);
  form.append("image", fs.createReadStream(filePath));
  // form.append(
  //   "image",
  //   fs.createReadStream(filePath, {
  //     encoding: "binary",
  //   })
  // );

  //Upload Image
  try {
    const token = req.query.token;
    // const form = req.body;

    const headers = {
      Authorization: "Bearer " + token,
      "Content-Type": "multipart/form-data",
    };

    const { status, data } = await backEndApi.post(
      BACKEND_ROUTES.images,
      form,
      { headers }
    );

    console.log("🚀 --- handler --- data", data);

    res.status(status).json(data);
  } catch (error) {
    console.log("🚀 --- Update User Image --- error", error);
    // console.log("🚀 --- Update User Image --- error", error.response);
    const errorMessage = error.response.data;
    res.status(error.response.status).json(errorMessage);
  }
}
