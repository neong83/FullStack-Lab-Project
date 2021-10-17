import * as getMethod from "../../data/loader";
import { fetchFruit } from "./query";

describe("query validator", () => {
  test("get test file", async () => {
    jest.spyOn(getMethod, "getDataPath").mockReturnValue("src/data/test.json");
    const result = await fetchFruit();
    expect(result).not.toBeNaN();
  });

  test("get none exist test file", async () => {
    jest.spyOn(getMethod, "getDataPath").mockReturnValue("src/data/test1.json");
    await expect(fetchFruit()).rejects.toThrow(Error);
  });
});
