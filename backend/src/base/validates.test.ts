import { getDataPath } from "../data/loader";
import { isFileExist } from "./validates";

describe("global validates method validator", () => {
  const existFile = getDataPath("test.json");
  const noneExistFile = getDataPath("test1.json");

  test("isFileExist with exist file", () => {
    expect(() => {
      isFileExist(existFile, "cannot file test.json");
    }).not.toThrow();
  });

  test("isFileExist with none exist file", () => {
    expect(() => {
      isFileExist(noneExistFile, "cannot file test1.json");
    }).toThrow(Error);
  });
});
