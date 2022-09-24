import { useState } from "react";
import { useNavigate } from "react-router-dom";
import register, { datos } from '../controller/getUser'

export const useFormRegister = () => {
  const navigate = useNavigate();

  const [password, setPasword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState(false);
  const [message, setMessage] = useState("")


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

      default:
        break;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLogin(true)
    try {
      const { status } = await register.registered({ name, password, email, rol: "client" })

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
      setTimeout(() => {
        setMessage(error.response.data.err.errors[0].msg)
        setLogin(false)
        setName("")
        setEmail("")
        setPasword("")
      }, 3000);
    }
  }

  // } else {
  //   setTimeout(() => {

  //     setLogin(false)
  //   }, 3000);


  return {
    login,
    message,
    password,
    name,
    email,
    handleChangeDatas,
    handleRegister,
  };
};
