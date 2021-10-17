import path from "path";

function getMediaPath(fileName: string): string {
  return path.resolve(__dirname, fileName);
}

export { getMediaPath };
