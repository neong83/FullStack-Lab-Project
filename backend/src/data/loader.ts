import path from "path";

function getDataPath(fileName: string): string {
  return path.resolve(__dirname, fileName);
}

export { getDataPath };
