import axios from "axios";

export const Products = async (options) => {
  const { data } = await axios.request(options);

  return data;
};
