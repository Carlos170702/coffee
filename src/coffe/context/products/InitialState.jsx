import { useReducer } from "react";
import { Product } from "../../controller/product";
import { ADD_PRODUCT, DELETE_ALL_CAR, DELETE_PRODUCT, GET_COFFEES, GET_PRODUCT_BY_ID, GET_USER_BY_TOKEN } from "../types";
import { UserContext } from "./UserContext";
import UserReducer from "./UserReducer.js";

export const InitialState = ({ children }) => {
  const initialState = {
    products: [],
    car: [],
    user: []
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getCoffes = async () => {
    try {
      const data = await Product({
        method: "GET",
        url: "https://restserver-devjose.herokuapp.com/api/products/getproducts",
      });
      dispatch({
        type: GET_COFFEES,
        payload: data.products
      })

      return data.products
    } catch (e) {
      return []
    }
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

  const getProductById = async (dato) => {
    dispatch({
      type: GET_PRODUCT_BY_ID,
      payload: dato
    })
  }

  const getUserByToken = async (token) => {
    try {
      const data = await Product({
        url: "https://restserver-devjose.herokuapp.com/api/read/readToken",
        method: "POST",
        headers: {
          "x-token": JSON.parse(token)
        }
      });
      dispatch({
        type: GET_USER_BY_TOKEN,
        payload: data
      })
      return data
    } catch (e) {
      return e
    }
  };


  return (
    <UserContext.Provider
      value={{
        products: state.products,
        car: state.car,
        user: state.user,
        getCoffes,
        addProduct,
        deleteProduct,
        deleteAllProducts,
        getProductById,
        getUserByToken
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
