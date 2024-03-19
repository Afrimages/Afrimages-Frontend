import { getNewDimension } from "../helpers/getNewDimension";
import { publicApi } from "../configs/axios-instance";

export const fetchImages = async () => {
  try {
    const resp = await publicApi("/image?limit=100");
    const respData = await resp.data.data;
    if (respData) {
      const newImages = respData.map((item) => {
        const { _id, title, description, dimensions, categories, userId } =
          item;
        const newDimension = getNewDimension(dimensions, "original");
        return { _id, title, description, newDimension, categories, userId };
      });
      return newImages;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
