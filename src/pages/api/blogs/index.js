import { backEndApi } from "../../../api/axios";
import { BACKEND_ROUTES } from "../../../constants/backendRoutes";
import { blogs } from "../../../data/data";

export default async function handler(req, res) {
  //Get Blogs
  if (req.method === "GET") {
    try {
      const token = req.query.token;
      const userId = req.query.userId;

      const headers = {
        Authorization: "Bearer " + token,
      };

      const params = {
        userId,
      };

      const { status, data } = await backEndApi.get(BACKEND_ROUTES.blogs, {
        headers,
        params,
      });

      //TODO: Remove later, for testing only
      // const status = 200;
      // const data = blogs;

      res.status(status).json(data);
    } catch (error) {
      console.log("🚀 --- Blogs --- error", error.response);
      const errorMessage = error.response.data;
      res.status(error.response.status).json(errorMessage);
    }
  }
}
