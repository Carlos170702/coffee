import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { datos, registered } from '../controller'

export const useFormRegister = () => {
  const navigate = useNavigate();

  const [password, setPasword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")
  const [image, setImage] = useState(null)

  const handleChangeDatas = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;

      case "email":
        setEmail(e.target.value);
        break;

      case "password":
        setPasword(e.target.value);
        break;

      case "image":
        setImage(e.target.files);
        break;

      default:
        break;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { status } = await registered({ image, name, password, email, rol: "client" })

      if (status) {
        const { token } = await datos({
          email,
          password,
        })
        if (token) {
          localStorage.setItem('user', JSON.stringify(token))
          navigate('coffee')
        }
      }
    } catch (error) {
      setMessage(error.response.data.err.errors[0].msg)
      setTimeout(() => {
        setMessage("")
        setName("")
        setEmail("")
        setPasword("")
      }, 1500);
    }
  }

  return {
    message,
    password,
    name,
    email,
    handleChangeDatas,
    handleRegister,
  };
};
