export const getNewDimension = (dimensions, size) => {
  if (dimensions) {
    return dimensions?.find((item) => item.size === size);
  }
};
