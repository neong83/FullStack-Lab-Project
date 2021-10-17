import { promises } from "fs";

async function readJsonDataFromFile(
  filePath: string
): Promise<{ [key: string]: any }> {
  const rawData = await promises.readFile(filePath);
  return JSON.parse(rawData.toString());
}

export { readJsonDataFromFile };
