export const isObjectEmpty = (obj: unknown): boolean => {
  return (
    obj === null ||
    (typeof obj === 'object' && Object.keys(obj || {}).length === 0)
  );
};
