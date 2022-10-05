import { Login } from "../pages"
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
