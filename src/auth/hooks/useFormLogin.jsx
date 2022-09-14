import { useState } from "react";
import { FiKey, FiUser } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { datos } from "../components/controller/getUser";

export const useFormLogin = () => {
    const navigate = useNavigate();
    const [password, setPasword] = useState('')
    const [name, setName] = useState('')

    const nameData = [
        { id: 2, name: "Email", icon: <FiUser />, type: 'text' },
        { id: 1, name: "Password", icon: <FiKey />, type: 'password' },
    ]

    const handleChangeDatas = ({ name, value }) => {
        (name === 'Email')
            ? setName(value)
            : setPasword(value)
    }

    const onClickCoffee = async (e) => {
        e.preventDefault();
        const { token, response } = await datos(name, password)


        // console.log(response.status)
        await (response.status === 200)
            ? navigate('coffee', {
                replace: false,
            })
            : console.log('hola')
    }

    return {
        password,
        name,
        nameData,
        onClickCoffee,
        handleChangeDatas,
    }
}
