import { useContext, useState } from "react";
import { UserContext } from "../../context/products/UserContext";
import { apiUpdatedProduct } from "../controller/apiProduct";
import { useForm } from "./useForm";

export const useUpdateProduct = () => {
  const { updateProduct, updateProductPage, getCoffes } =
    useContext(UserContext);
  const { data } = updateProduct;

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
    setIsLoading(true);
    //body
    var formdata = new FormData();
    formdata.append(
      "name",
      formState?.name === "" ? data?.name : formState?.name
    );
    formdata.append("file", file ? file : null);
    formdata.append(
      "price",
      formState?.price === "" ? data?.price : formState?.price
    );
    formdata.append(
      "description",
      formState?.description === "" ? data?.description : formState?.description
    );
    formdata.append(
      "stock",
      formState?.stock === "" ? data?.stock : formState?.stock
    );
    //header
    const token = localStorage.getItem("user");
    const headersList = { "x-token": JSON.parse(token) };

    try {
      const data = await apiUpdatedProduct(id, headersList, formdata);
      data.status && getCoffes();
      data.status &&
        setTimeout(() => {
          setIsLoading(false);
          updateProductPage();
        }, 2000);
    } catch (e) {
      setIsLoading(false);
      setError(e);
    }
  };

  return {
    isLoading,
    error,
    infError,
    updateProduct,
    formState,
    updateProductPage,
    makeUpdateProduct,
    onInputChange,
    newImage,
  };
};
