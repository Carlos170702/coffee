import { useContext, useState } from "react";
import { UserContext } from "../../context/products/UserContext";

export const useCrudProducts = () => {
  const [id, setId] = useState("");
  const [newProduct, setNewProduct] = useState(false);
  const { products, getCoffes, getProductById } = useContext(UserContext);

  products.length === 0 && getCoffes();

  const handleChangeID = (event) => {
    setId(event.target.value);
    console.log(id)
  };

  const clickSearch = () => {
    getProductById(id);
    setId("");
  };

  const handleActive = () => {
    setNewProduct(!newProduct);
  };

  return {
    newProduct,
    id,
    products,
    getCoffes,
    setNewProduct,
    handleChangeID,
    clickSearch,
    handleActive,
  };
};
