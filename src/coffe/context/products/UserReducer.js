import {
  DELETE_ALL_CAR,
  DELETE_PRODUCT,
  GET_COFFEES,
  GET_PRODUCT_BY_ID,
  GET_USER_BY_TOKEN,
  GET__ORDERS,
  UPDATE_PRODUCT,
} from "../types";
import { ADD_PRODUCT } from "../types/";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_COFFEES:
      return {
        ...state,
        products: payload,
      };

    case ADD_PRODUCT:
      const addeCoffee = state.products.find((item) => item._id === payload);
      const itemExist = state.car.find((item) => item._id === addeCoffee._id);

      return itemExist
        ? {
            ...state,
            car: state.car.map((item) =>
              item._id === addeCoffee._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            car: [...state.car, { ...addeCoffee, quantity: 1 }],
          };

    case DELETE_PRODUCT:
      const productExist = state.car.find((item) => item._id === payload);
      const productPosition = state.car.findIndex(
        (item) => item._id === payload
      );

      return productExist
        ? {
            ...state,
            car: state.car.splice(productPosition, 1),
          }
        : {
            ...state,
            car: state.car,
          };

    case DELETE_ALL_CAR:
      return {
        ...state,
        car: [],
      };

    case GET_PRODUCT_BY_ID:
      const productById = state.products.find((item) => item._id === payload);
      return productById
        ? {
            ...state,
            products: [productById],
          }
        : {
            ...state,
            products: [],
          };

    case GET_USER_BY_TOKEN:
      return {
        ...state,
        user: payload,
      };

    case GET__ORDERS:
      return {
        ...state,
        orders: payload,
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProduct: payload,
      };
  }
};
