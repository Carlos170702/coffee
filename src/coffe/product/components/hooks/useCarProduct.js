import { useContext, useState } from "react";
import { UserContext } from "../../../context/products/UserContext";
import { deleteProduct } from "../../controller/apiProduct";

export const useCarProduct = () => {
  const { getCoffes, updateProductPage } = useContext(UserContext);

  async function deleteProducts(_id) {
    const token = JSON.parse(localStorage.getItem("user"));
    await deleteProduct(_id, token);
    await getCoffes();
  }

  return {
    deleteProducts,
    updateProductPage,
  };
};
