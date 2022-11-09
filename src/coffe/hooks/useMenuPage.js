import { useContext } from "react";
import { useQuery } from "react-query";
import { UserContext } from "../context/products/UserContext";

export const useMenuPage = () => {
  const { getCoffes, addProduct, products } = useContext(UserContext);
  const { isLoading } = useQuery(["getProducts"], getCoffes);

  const handleAdd = (datos) => {
    addProduct(datos);
  };

  return {
    products,
    isLoading,
    handleAdd,
    getCoffes,
  };
};
