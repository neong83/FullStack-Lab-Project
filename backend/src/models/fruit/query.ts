import { readJsonDataFromFile } from "../../base/database";
import { getDataPath } from "../../data/loader";
import { isFileExist } from "../../base/validates";

const DATA_FILE = "fruits.json";

async function fetchFruit(): Promise<{ [key: string]: any }> {
  const filePath = getDataPath(DATA_FILE);
  isFileExist(filePath, "unable to locate fruit data");
  return await readJsonDataFromFile(filePath);
}

export { fetchFruit };
