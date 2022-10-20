import { useReducer } from "react";
import { Product } from "../../controller/product";
import { ADD_PRODUCT, DELETE_ALL_CAR, DELETE_PRODUCT, GET_COFFEES } from "../types";
import { UserContext } from "./UserContext";
import UserReducer from "./UserReducer.js";

export const InitialState = ({ children }) => {
  const initialState = {
    products: [],
    car: []
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getCoffes = async () => {
    const data = await Product({
      method: "GET",
      url: "https://restserver-devjose.herokuapp.com/api/products/getproducts",
    });
    dispatch({
      type: GET_COFFEES,
      payload: data.products
    })

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

  const deleteAllProducts = () => {
    dispatch({
      type: DELETE_ALL_CAR,
      payload: []
    })
  }

  return (
    <UserContext.Provider
      value={{
        products: state.products,
        car: state.car,
        getCoffes,
        addProduct,
        deleteProduct,
        deleteAllProducts
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
