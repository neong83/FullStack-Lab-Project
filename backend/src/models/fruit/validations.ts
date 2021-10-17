function isStringEmpty(data: string | null | undefined, errorMessage: string) {
  if (!data) {
    throw new Error(errorMessage);
  }
}

export { isStringEmpty };
