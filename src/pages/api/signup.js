import { backEndApi } from "../../api/axios";
import { BACKEND_ROUTES } from "../../constants/backendRoutes";

export default async function handler(req, res) {
  try {
    const payload = { ...req.body };

    const { status, data } = await backEndApi.post(
      BACKEND_ROUTES.signup,
      payload
    );

    res.status(status).json(data);
  } catch (error) {
    // console.log("🚀 --- SignUp --- error", error.response);
    const errorMessage = error.response.data;
    res.status(error.response.status).json(errorMessage);
  }
}
