import { useContext, useState } from "react";
import { UserContext } from "../../context/products/UserContext";
import { newProduct } from "../controller/apiProduct";
import { useForm } from "./useForm";

export const useNewProduct = () => {
  const [error, setError] = useState(false);
  const [infError, setInfError] = useState(null);
  const [file, setFile] = useState(null);
  const { getCoffes } = useContext(UserContext);

  //Add img
  const newImage = (e) => {
    setFile(e.target.files[0]);
  };

  //create a new product
  const createNewProduct = async (e, dato, handleActive) => {
    const { name, stock, price, description } = dato;
    e.preventDefault();
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "x-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzU3NmU5YjRkNjIxNjNmZWU0ZmJlYWUiLCJpYXQiOjE2NjY2NzQzMzJ9.SPMk-ejj_s0a-EdIedPt-GpJiW0w8D5H92o_lt3Ll9A",
    };
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
      setError(true);
      setInfError(e.response.data.err.errors);
      setTimeout(() => {
        setError(false);
        setInfError(null)
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
  };
};
