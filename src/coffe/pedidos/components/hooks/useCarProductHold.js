export const useCarProductHold = () => {
  const handleConfirmSale = async () => {
    const token = JSON.parse(localStorage.getItem("user"));
    const data = await finishPedido(token, id);
    console.log(data)
  };

  const handleDeleteSale = async () => {
    const token = JSON.parse(localStorage.getItem("user"));
    const data = await deleteOrder(token, id);
    console.log(data)
  };
  return {
    handleConfirmSale,
    handleDeleteSale,
  };
};
