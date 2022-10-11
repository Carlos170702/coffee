import { useReducer } from "react";
import { Product } from "../../controller/product";
import { ADD_PRODUCT, DELETE_PRODUCT } from "../types";
import { UserContext } from "./UserContext";
import UserReducer from "./UserReducer.js";

export const InitialState = ({ children }) => {
  const initialState = {
    products: [],
    car: [],
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getCoffes = async () => {
    const data = await Product({
      method: "GET",
      url: "https://restserver-devjose.herokuapp.com/api/products/getproducts",
    });
    return data.products
  };

  const addProduct = (datos) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: datos
    })
  };

  const deleteProduct = (datos) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: datos
    })
  };

  return (
    <UserContext.Provider
      value={{
        products: state.products,
        car: state.car,
        getCoffes,
        addProduct,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
