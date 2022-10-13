import { DELETE_PRODUCT } from "../types";
import { ADD_PRODUCT } from "../types/";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_PRODUCT:
      
      const data = [...state.car];
      console.log(data)
      data.length > 0
        ? state.car.map((item) => {
            item.value._id === payload._id
              ? console.log('si existe')
              : (() => {
                console.log('no existe')
                data.push({
                  cantidad: 1,
                  value: payload,
                });
              })()
          })
        : data.push({
            cantidad: 1,
            value: payload,
          });

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
