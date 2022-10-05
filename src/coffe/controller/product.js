import axios from "axios";

export const getProduct = async (options) => {
  const { data } = await axios.request(options);

  return data.products;
};
