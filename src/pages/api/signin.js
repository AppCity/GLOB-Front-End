import { backEndApi } from "../../api/axios";
import { BACKEND_ROUTES } from "../../constants/backendRoutes";

export default async function handler(req, res) {
  try {
    const payload = { ...req.body };

    const { status, data } = await backEndApi.post(
      BACKEND_ROUTES.login,
      payload
    );

    res.status(status).json(data);
  } catch (error) {
    console.log("🚀 --- slides --- error", error);
    const errorMessage = error.response.data;
    res.status(errorMessage.statusCode).json(error);
  }
}
