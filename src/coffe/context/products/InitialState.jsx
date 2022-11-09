import { useReducer } from "react";
import { getProducts } from "../../controller/GetProduct";
import { Product } from "../../controller/product";
import { ProductsHold } from "../../pedidos/controller/getDataProducts";
import { ProductsOnHold } from "../../pedidos/pages/ProductsOnHold";
import { ADD_PRODUCT, DELETE_ALL_CAR, DELETE_PRODUCT, GET_COFFEES, GET_PRODUCT_BY_ID, GET_USER_BY_TOKEN, GET__ORDERS } from "../types";
import { UserContext } from "./UserContext";
import UserReducer from "./UserReducer.js";

export const InitialState = ({ children }) => {
  const initialState = {
    products: [],
    orders: [],
    car: [],
    user: []
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  //obtener los cafes
  const getCoffes = async () => {
    try {
      const data = await getProducts()
      dispatch({
        type: GET_COFFEES,
        payload: data
      })
    } catch (e) {
    }
  };

  //obtener las ordenes a confirmar
  const getPendientes = async () => {
    try {
      const data = await ProductsHold()
      dispatch({
        type: GET__ORDERS,
        payload: data.listOrders
      })

    } catch (e) {
      console.log(e)
    }
  }

  const deleteOrder = async () => {
    
  }

  // añade producto a el carrito
  const addProduct = (datos) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: datos
    })
  };

  //eliminar producto de pagina productos
  const deleteProduct = (datos) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: datos
    })
  };

  //elimina todos los productos del carrito
  const deleteAllProducts = () => {
    dispatch({
      type: DELETE_ALL_CAR,
      payload: []
    })
  }

  //obtiene producto por ID
  const getProductById = async (dato) => {
    dispatch({
      type: GET_PRODUCT_BY_ID,
      payload: dato
    })
  }

  //obtiene usuario por token
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
        orders: state.orders,
        getCoffes,
        addProduct,
        deleteProduct,
        deleteAllProducts,
        getProductById,
        getUserByToken,
        getPendientes
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
