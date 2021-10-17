import { testModule } from "./methods";
import * as fetchMethod from "./query";

describe("fruit method validator", () => {
  const mockData = {
    id: "1",
    name: "test name",
    weight: "test weight",
    season: "test season",
    image: "test image",
  };

  beforeAll(() => {
    jest
      .spyOn(fetchMethod, "fetchFruit")
      .mockResolvedValue({ fruits: [mockData] });
  });

  test("instantiate fruit from data", () => {
    const fruit = testModule.instantiateFruitFromData(mockData);

    expect(fruit.id).toEqual(mockData.id);
    expect(fruit.name).toEqual(mockData.name);
    expect(fruit.weight).toEqual(mockData.weight);
    expect(fruit.season).toEqual(mockData.season);
    expect(fruit.image).toEqual(mockData.image);
  });

  test("get fruits", async () => {
    const fruits = await testModule.getFruits();
    expect(fruits[0].name).toEqual(mockData.name);
  });

  test("get fruits by name", async () => {
    const fruits = await testModule.getFruitsByName(mockData.name);
    expect(fruits.length).toEqual(1);
  });

  test("get fruits by name with no match name", async () => {
    const fruits = await testModule.getFruitsByName(mockData.weight);
    expect(fruits.length).toEqual(0);
  });
});
