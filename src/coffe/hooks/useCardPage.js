import { useContext, useState } from "react";
import { UserContext } from "../context/products/UserContext";
import { finishSale } from "../controller/GetProduct";

export const useCardPage = () => {
  const { car, deleteAllProducts, products } = useContext(UserContext);
  const [status, setStatus] = useState(false);
  const [dataProduct, setDataProduct] = useState({});

  const Total = () => {
    const Total = car.reduce(
      (acomulador, Actual) => acomulador + Actual.price * Actual.quantity,
      0
    );
    return Total;
  };

  // funncion que guarda el array de productos agregados al carrito { Id, quantity }
  const handleTotal = () => {
    const productsSell = [];
    car.map((item) => {
      productsSell.push({
        productId: item._id,
        quantity: item.quantity,
      });
    });
    return productsSell;
  };

  // funcion que ase la compra mandandole el array de productos y el token
  const handleSale = async () => {
    const token = JSON.parse(localStorage.getItem("user"));
    const data = handleTotal();

    const { msg, status, productOrder } = await finishSale(token, data); //ejecuta la funcion de metodo post hacer venta
    setStatus(status);
    setDataProduct({ productOrder, msg });

    setTimeout(() => {
      setStatus(!status);
      deleteAllProducts();
    }, 1500);
  };

  return {
    car,
    products,
    status,
    dataProduct,
    Total,
    handleSale,
  };
};
