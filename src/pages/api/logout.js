import { backEndApi } from "../../api/axios";
import { BACKEND_ROUTES } from "../../constants/backendRoutes";

export default async function handler(req, res) {
  try {
    const token = req.body.token;

    const { status, data } = await backEndApi.get(BACKEND_ROUTES.logout, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    res.status(status).json(data);
  } catch (error) {
    // console.log("🚀 --- Login --- error", error.response);
    const errorMessage = error.response.data;
    res.status(error.response.status).json(errorMessage);
  }
}
