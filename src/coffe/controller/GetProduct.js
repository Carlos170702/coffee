import { getProduct } from "./product";

export const getProducts = async() => {
  const data = await getProduct({
    method: "GET",
    url: "https://restserver-devjose.herokuapp.com/api/products/getproducts",
  });
  return data
};
