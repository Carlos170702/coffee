import { Product } from "../../controller/product";

export const deleteProduct = async (dato, token) => {
  const data = await Product({
    method: "DELETE",
    url: `https://restserver-devjose.herokuapp.com/api/products/deleteProduct/${dato}`,
    headers: {
      "x-token": `${token}`,
    },
  });
  return data;
};

export const newProduct = async (token, dato) => {
  const data = await Product({
    url: "https://restserver-devjose.herokuapp.com/api/products/createProduct",
    method: "POST",
    headers: token,
    data: dato,
  });

  return data;
};
