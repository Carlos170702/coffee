import axios from "axios";

export const Product = async (options) => {
  const { data } = await axios.request(options);

  return data;
};
