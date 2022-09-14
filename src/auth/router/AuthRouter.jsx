import { Login } from "../pages/Login"
import { Route, Routes } from "react-router-dom"

export const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={ <Login/> } />
        <Route path="register" element={ <Register/> } />
      </Routes>
    </>
  )
}
