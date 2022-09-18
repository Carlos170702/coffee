import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiKey, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Error } from "../components/Error";
import register from '../controller/getUser'

export const useFormRegister = () => {

  const nameData = [
    { id: 2, name: "Name", icon: <FiUser />, type: `Text` },
    { id: 3, name: "Email", icon: <AiOutlineMail />, type: `Email` },
    { id: 1, name: "Password", icon: <FiKey />, type: `Password` },
  ];

  const [password, setPasword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeDatas = ({ name, value }) => {
    switch (name) {
      case "Name":
        setName(value);
        break;

      case "Email":
        setEmail(value);
        break;

      case "Password":
        setPasword(value);
        break;

      default:
        break;
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    register.data()
  }

  return {
    password,
    name,
    email,
    nameData,
    handleChangeDatas,
    handleRegister,
  };
};
