import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../coffe/context/products/UserContext";

export const PrivateRouter = ({ children }) => {
  const navigate = useNavigate();
  const { getUserByToken } = useContext(UserContext)
  const token = localStorage.getItem('user')

  useEffect(() => {
    const user = async () => {
      await getUserByToken(token)
    }
    user()
  }, [])


  useEffect(() => {
    (!token) && navigate('login')
    return
  }, [])

  return children
}
