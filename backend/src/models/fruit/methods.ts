import { Fruit } from "./model";
import { fetchFruit } from "./query";

function instantiateFruitFromData(data: { [key: string]: any }) {
  return new Fruit(data);
}

async function getFruits(): Promise<Fruit[]> {
  const data = await fetchFruit();
  const results: Fruit[] = [];

  data.fruits.forEach((fruit: { [key: string]: any }) => {
    results.push(instantiateFruitFromData(fruit));
  });

  return results;
}

async function getFruitsByName(name: string): Promise<Fruit[]> {
  const allFruits = await getFruits();

  return allFruits.filter((fruit: Fruit) => fruit.name === name);
}

export { getFruits, getFruitsByName };
export const testModule = {
  instantiateFruitFromData,
  getFruits,
  getFruitsByName,
};
