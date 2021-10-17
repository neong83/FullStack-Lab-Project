import { isStringEmpty } from "./validations";

describe("fruit validations", () => {
  test("is string empty with none empty string", () => {
    expect(() => {
      isStringEmpty("test", "error message");
    }).not.toThrow();
  });

  test("is string empty with empty string", () => {
    expect(() => {
      isStringEmpty("", "error message");
    }).toThrow(Error);
  });

  test("is string empty with null", () => {
    expect(() => {
      isStringEmpty(null, "error message");
    }).toThrow(Error);
  });

  test("is string empty with undefined", () => {
    expect(() => {
      isStringEmpty(undefined, "error message");
    }).toThrow(Error);
  });
});
