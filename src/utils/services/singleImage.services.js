import { getNewDimension } from "../helpers/getNewDimension";
import { publicApi } from "../configs/axios-instance";

export const fetchSingleImage = async (id) => {
  try {
    const { data } = await publicApi(`/image/${id}`);
    const {
      _id,
      title,
      description,
      dimensions,
      downloads,
      views,
      shares,
      createdAt,
      userId,
    } = data;
    const newDimension = getNewDimension(dimensions, "original");
    const newData = {
      _id,
      title,
      description,
      newDimension,
      downloads,
      views,
      shares,
      createdAt,
      userId,
    };
    return newData;
  } catch (error) {
    throw new Error(error.message);
  }
};
