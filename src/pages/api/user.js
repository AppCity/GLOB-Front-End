import { backEndApi } from "../../api/axios";
import { BACKEND_ROUTES } from "../../constants/backendRoutes";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const userId = req.query.userId;
      const token = req.query.token;

      const { status, data } = await backEndApi.get(BACKEND_ROUTES.user, {
        params: {
          userId,
        },
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      res.status(status).json(data);
    } catch (error) {
      console.log("🚀 --- User --- error", error.response);
      const errorMessage = error.response.data;
      res.status(error.response.status).json(errorMessage);
    }
  }
  if (req.method === "PUT") {
    try {
      const payload = { ...req.body.data };
      console.log("🚀 --- handler --- payload", payload);
      const token = req.body.token;
      console.log("🚀 --- handler --- token", token);

      const { status, data } = await backEndApi.put(
        BACKEND_ROUTES.user,
        payload,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      res.status(status).json(data);
    } catch (error) {
      console.log("🚀 --- User Update error", error.response);
      const errorMessage = error.response.data;
      res.status(error.response.status).json(errorMessage);
    }
  }
}
