import { publicApi } from "../configs/axios-instance";
import { getNewDimension } from "../helpers/getNewDimension";

export const fetchCategoryImages = async (Id) => {
  try {
    const resp = await publicApi(`/image?category=${Id}`);
    const respData = resp.data.data;
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
