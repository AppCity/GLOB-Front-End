import { backEndApi } from "../../../api/axios";
import { BACKEND_ROUTES } from "../../../constants/backendRoutes";
import { blogs } from "../../../data/data";

export default async function handler(req, res) {
  try {
    // const payload = { ...req.body };
    const id = req.query.id;

    // const status = 200;
    // const data = blogs.find((item) => item.id === id);

    const { status, data } = await backEndApi.get(BACKEND_ROUTES.blogs, {
      params: { id },
    });

    res.status(status).json(data);
  } catch (error) {
    console.log("🚀 --- Blog ID --- error", error.response);
    const errorMessage = error.response.data;
    res.status(error.response.status).json(errorMessage);
  }
}
