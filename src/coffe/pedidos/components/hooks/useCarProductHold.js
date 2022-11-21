import { useContext } from "react";
import { UserContext } from "../../../context/products/UserContext";
import { deleteOrder, finishPedido } from "../../controller/getDataProducts";

export const useCarProductHold = () => {
  const { getPendientes, user } = useContext(UserContext);

  const handleConfirmSale = async (id) => {
    const token = JSON.parse(localStorage.getItem("user"));
    await finishPedido(token, id);
    getPendientes();
  };

  const handleDeleteSale = async (id) => {
    const token = JSON.parse(localStorage.getItem("user"));
    await deleteOrder(token, id);
    getPendientes();
  };

  return {
    user,
    handleConfirmSale,
    handleDeleteSale,
  };
};
