import { useContext, useState } from "react";
import { UserContext } from "../../context/products/UserContext";
import { apiUpdatedProduct } from "../controller/apiProduct";
import { useForm } from "./useForm";

export const useUpdateProduct = () => {
  const { updateProduct, updateProductPage } = useContext(UserContext);
  const { formState, onInputChange } = useForm({
    name: "",
    stock: "",
    price: "",
    description: "",
  });

  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [infError, setInfError] = useState({
    titulo: "",
    message: "Otro error",
  });

  //Add img
  const newImage = (e) => {
    setFile(e.target.files[0]);
  };

  //peticion a apiUpdatedProduct
  const makeUpdateProduct = async (e, id) => {
    e.preventDefault();
    const { name, stock, price, description } = formState;
    const token = localStorage.getItem("user");
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
      const { status } = await apiUpdatedProduct(id, headersList, formdata);
      console.log(status);
      // status === true && getCoffes();
      // status === true && handleActive();
    } catch (e) {
      console.log(e);
      //   setIsLoading(false);
      //   setInfError({
      //     titulo: "Error al crear producto",
      //     message: e?.response?.data?.err.errors,
      //   });

      //   setError(true);
      //   setTimeout(() => {
      //     setError(false);
      //     setInfError(null);
      //   }, 3000);
      // }
    }
  };

  return {
    updateProduct,
    formState,
    updateProductPage,
    makeUpdateProduct,
    onInputChange,
    newImage,
  };
};
