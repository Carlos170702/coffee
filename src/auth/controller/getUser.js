import axios from "axios";
import { Product } from "../../coffe/controller/product";

export const datos = async (datos) => {
  const { data } = await axios.post(
    "https://restserver-devjose.herokuapp.com/api/auth/login",
    datos
  );
  return data;
};

export const registered = async (datos) => {
  // console.log(datos)
  const data = await Product({
    url: "https://restserver-devjose.herokuapp.com/api/users/postuser",
    method: "POSt",
    data: datos,
  });
  return data;
};
