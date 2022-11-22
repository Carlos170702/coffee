import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../coffe/product/hooks/useForm";
import { datos, registered } from '../controller'

export const useFormRegister = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState(null)
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const { formState, onInputChange } = useForm({
    name: '',
    email: '',
    password: ''
  })

  const handleChangeimg = (e) => {
    setImage(e.target.files[0])
  }


  const handleRegister = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("name", formState?.name);
    formdata.append("email", formState?.email);
    formdata.append("password", formState?.password);
    formdata.append("file", image);
    formdata.append("rol", "client");

    try {
      const response = await registered(formdata)
      console.log(response)

      if (response?.status) {
        const { token } = await datos({
          email: formState?.email,
          password: formState?.password,
        })
        if (token) {
          setTimeout(() => {
            setIsLoading(false)
            localStorage.setItem('user', JSON.stringify(token))
            navigate('coffee')
          }, 2000);
        }
      }
    } catch (e) {
      setMessage(e.response.data.err.errors[0].msg)
      setTimeout(() => {
        setIsLoading(false)
        setMessage("")
      }, 1500);
    }
  }

  return {
    isLoading,
    message,
    ...formState,
    onInputChange,
    handleRegister,
    handleChangeimg
  };
};
