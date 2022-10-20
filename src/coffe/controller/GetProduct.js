import { Product } from "./product";

export const getProducts = async () => {
  const data = await Product({
    method: "GET",
    url: "https://restserver-devjose.herokuapp.com/api/products/getproducts",
  });
  return data.products;
};

export const finishSale = async (token, dato) => {
  const data = await Product({
    method: "POST",
    url: "https://restserver-devjose.herokuapp.com/api/Orders/successOrder",
    headers: {
      "x-token": token,
    },
    data: {
      dataProducts: dato,
    },
  });
  return data;
};
