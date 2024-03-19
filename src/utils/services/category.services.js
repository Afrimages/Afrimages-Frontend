import { publicApi } from "../configs/axios-instance";
export const fetchCategories = async () => {
  try {
    const { data } = await publicApi("/category");
    data.unshift({ _id: "all", title: "all" });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
