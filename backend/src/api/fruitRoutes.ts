import { getRouter } from "../base/getRouter";
import { isStringEmpty } from "../models/fruit/validations";
import { apiResponse } from "../base/apiResponse";

const router = getRouter();

router.get("/", async (req, res) => {
  const { getFruits } = await import("../models/fruit/methods");

  try {
    const result = await getFruits();
    apiResponse.successResponse(res, result);
  } catch (error) {
    apiResponse.internalErrorResponse(res, error);
  }
});

router.post("/", async (req, res) => {
  const { getFruitsByName } = await import("../models/fruit/methods");

  console.log(JSON.stringify(req.body));
  try {
    isStringEmpty(req.body.name, "fruit name is required");
  } catch (error) {
    apiResponse.userErrorResponse(res, error);
    return;
  }

  try {
    const result = await getFruitsByName(req.body.name);
    apiResponse.successResponse(res, result);
  } catch (error) {
    apiResponse.internalErrorResponse(res, error);
  }
});

export { router };
