import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const PublicRouter = ({ children }) => {
  const user = localStorage.getItem('user')
  const navigate = useNavigate();
  
  useEffect(() => {
    user && navigate('coffee')
    return
  }, [])

  return children
}



