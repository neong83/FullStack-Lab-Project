import { existsSync } from "fs";

function isFileExist(filePath: string, errorMessage: string) {
  if (!existsSync(filePath)) {
    throw new Error(errorMessage);
  }
}

export { isFileExist };
