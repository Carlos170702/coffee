import { DELETE_PRODUCT } from "../types";
import { ADD_PRODUCT } from "../types/";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_PRODUCT:
      const data = [...state.car];
      data.push(payload);
      return {
        ...state,
        car: data,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        car: data,
      };
  }
};
