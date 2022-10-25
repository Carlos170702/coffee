import { Products } from "./products";

export const ProductsHold = async () => {
    const data = await Products({
      method: "GET",
      url: "https://restserver-devjose.herokuapp.com/api/Orders/getOrders",
    });
  
    return data;
  };
  
  export const getproductById = async(ID) => {
    const data = await Products({
      method: "GET",
      url: `https://restserver-devjose.herokuapp.com/api/products/getProductsById/${ID}`
    })

    return data
  }