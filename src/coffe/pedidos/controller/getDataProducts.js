import { Products } from "./products";

export const ProductsHold = async () => {
  const data = await Products({
    method: "GET",
    url: "https://restserver-devjose.herokuapp.com/api/Orders/getOrders",
  });

  return data;
};

export const getproductById = async (ID) => {
  const data = await Products({
    method: "GET",
    url: `https://restserver-devjose.herokuapp.com/api/products/getProductsById/${ID}`,
  });

  return data;
};

export const finishPedido = async (token, dato) => {
  console.log(token)
  const data = await Products({
    method: "POST",
    url: `https://restserver-devjose.herokuapp.com/api/sales/postsale/${dato}`,
    headers: {
      "x-token":`${token}`,
    },
  });
  return data;
};


export const deleteOrder = async (token, dato) => {
  console.log(token)
  const data = await Products({
    method: "DELETE",
    url: `https://restserver-devjose.herokuapp.com/api/Orders/deleteOrder/${dato}`,
    headers: {
      "x-token":`${token}`,
    },
  });
  return data;
};
