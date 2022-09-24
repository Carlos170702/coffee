import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user')

  useEffect(() => {
    (!user) && navigate('login')
    return
  }, [])


  return children
}
