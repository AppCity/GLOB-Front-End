import { backEndApi } from "../../api/axios";
import { BACKEND_ROUTES } from "../../constants/backendRoutes";

export default async function handler(req, res) {
  try {
    const token = req.query.token;
    const userId = req.query.userId;

    const { status, data } = await backEndApi.get(BACKEND_ROUTES.favorites, {
      headers: {
        Authorization: "Bearer " + token,
      },
      params: {
        userId,
      },
    });

    res.status(status).json(data);
  } catch (error) {
    // console.log("🚀 --- Favorites --- error", error.response);
    const errorMessage = error.response.data;
    res.status(error.response.status).json(errorMessage);
  }
}
