import { readJsonDataFromFile } from "./database";

describe("validate database method", () => {
  const FILE = "src/data/test.json";

  test("load data from JSON file", async () => {
    const data = await readJsonDataFromFile(FILE);
    expect(data).not.toBeNaN();
  });

  test("validate id from JSON value", async () => {
    const data = await readJsonDataFromFile(FILE);
    expect(data.id).toEqual("1");
  });

  test("validate message from JSON value", async () => {
    const data = await readJsonDataFromFile(FILE);
    expect(data.message).toEqual("test data 1");
  });
});
