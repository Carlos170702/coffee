import { useContext, useState } from "react";
import { UserContext } from "../../context/products/UserContext";
import { newProduct } from "../controller/apiProduct";
import { useForm } from "./useForm";

export const useNewProduct = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [infError, setInfError] = useState({
    titulo: "",
    message: "Otro error",
  });
  const [file, setFile] = useState(null);
  const { getCoffes } = useContext(UserContext);

  //Add img
  const newImage = (e) => {
    setFile(e.target.files[0]);
  };

  //create a new product
  const createNewProduct = async (e, dato, handleActive) => {
    const { name, stock, price, description } = dato;
    const token = localStorage.getItem("user");
    e.preventDefault();
    setIsLoading(true);
    const headersList = { "x-token": JSON.parse(token) };
    var formdata = new FormData();
    formdata.append("file", file ? file : {});
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("category", "631ab538a93c78947cd00f4c");
    formdata.append("stock", stock);
    formdata.append("description", description);

    try {
      const { status } = await newProduct(headersList, formdata);
      status === true && getCoffes();
      status === true && handleActive();
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      setInfError({
        titulo: "Error al crear producto",
        message: e?.response?.data?.err.errors,
      });

      setError(true);
      setTimeout(() => {
        setError(false);
        setInfError(null);
      }, 3000);
    }
  };

  //hook de formulario
  const { formState, onInputChange } = useForm({
    name: "",
    stock: "",
    price: "",
    description: "",
  });

  return {
    newImage,
    createNewProduct,
    onInputChange,
    formState,
    error,
    infError,
    isLoading,
  };
};
