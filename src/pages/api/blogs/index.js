import { backEndApi } from "../../../api/axios";
import { BACKEND_ROUTES } from "../../../constants/backendRoutes";

export default async function handler(req, res) {
  //Get Blogs
  if (req.method === "GET") {
    try {
      const token = req.query.token;
      const userId = req.query.userId;
      const category = req.query.category;

      const headers = {
        Authorization: "Bearer " + token,
      };

      const params = {
        userId,
        category,
      };

      const { status, data } = await backEndApi.get(BACKEND_ROUTES.blogs, {
        headers,
        params,
      });

      res.status(status).json(data);
    } catch (error) {
      console.log("🚀 --- Blogs --- error", error.response);
      const errorMessage = error.response.data;
      res.status(error.response.status).json(errorMessage);
    }
  }
  //Create Blog
  if (req.method === "POST") {
    try {
      const token = req.body.token;
      const postData = req.body.data;

      const headers = {
        Authorization: "Bearer " + token,
      };

      const { status, data } = await backEndApi.post(
        BACKEND_ROUTES.blogs,
        postData,
        { headers }
      );

      res.status(status).json(data);
    } catch (error) {
      console.log("🚀 --- Create Blog --- error", error.response);
      const errorMessage = error.response.data;
      res.status(error.response.status).json(errorMessage);
    }
  }
}
