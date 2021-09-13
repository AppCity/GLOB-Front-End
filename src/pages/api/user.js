import { backEndApi } from "../../api/axios";
import { BACKEND_ROUTES } from "../../constants/backendRoutes";
import { userData } from "../../data/data";

export default async function handler(req, res) {
  try {
    // const payload = { ...req.body };

    const status = 200;
    const data = userData;
    // const { status, data } = await backEndApi.get(
    //   BACKEND_ROUTES.blogs,
    //   payload
    // );

    res.status(status).json(data);
  } catch (error) {
    console.log("🚀 --- User --- error", error.response);
    const errorMessage = error.response.data;
    res.status(error.response.status).json(errorMessage);
  }
}
