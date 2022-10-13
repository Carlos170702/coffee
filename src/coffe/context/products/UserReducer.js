import { DELETE_PRODUCT, GET_COFFEES } from "../types";
import { ADD_PRODUCT } from "../types/";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_COFFEES:
      return {
        ...state,
        products: payload
      }

    case ADD_PRODUCT:
      const addeCoffee = state.products.find(item => item._id === payload)
      const itemExist = state.car.find(item => item._id === addeCoffee._id)

      return itemExist
        ? {
          ...state,
          car: state.car.map(item => item._id === addeCoffee._id
            ? { ...item, quantity: item.quantity + 1 }
            : item),
        }
        : {
          ...state,
          car: [...state.car, { ...addeCoffee, quantity: 1 }],
        };


    case DELETE_PRODUCT:
      return {
        ...state,
        car: data,
      };
  }
};
