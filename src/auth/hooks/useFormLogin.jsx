import { useState } from "react";
import { FiKey, FiUser } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { datos } from '../controller/getUser';

export const useFormLogin = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [message, setMessage] = useState("")

    const nameData = [
        { id: 2, name: "Email", icon: <FiUser />, type: 'text' },
        { id: 1, name: "Password", icon: <FiKey />, type: 'password' },
    ]

    const handleChangeDatas = ({ name, value }) => {
        (name === 'Email')
            ? setEmail(value)
            : setPasword(value)
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const users = await datos({
            email,
            password,
          })
    
          if (users.token) {
            navigate('coffee')
          }
          localStorage.setItem('user', JSON.stringify(users.token))
        } catch (e) {
          setMessage("Error de usuario")
          setTimeout(() => {
            setMessage("")
          }, 3000);
        }
      }

    return {
        nameData,
        password,
        email,
        message,
        handleChangeDatas,
        handleLogin,
    }
}
