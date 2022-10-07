import { Product } from "./product";

export const getProducts = async () => {
  const data = await Product({
    method: "GET",
    url: "https://restserver-devjose.herokuapp.com/api/products/getproducts",
  });
  return data.products
};