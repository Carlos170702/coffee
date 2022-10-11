import { Navigate, Route, Routes } from "react-router-dom"
import { CardPage } from "../page/CardPage"
import { CoffeePage } from "../page/CoffeePage"
import { MenuPage } from "../page/MenuPage"
import { InitialState } from '../context/products/InitialState'

export const CoffeeRouter = () => {
  return (
    <>
      <Routes>
        <Route path="coffee" element={<CoffeePage />} />

        <Route path="Menu" element={
          <InitialState>
            <MenuPage />
          </InitialState>} />

        <Route path={"Card"} element={
          <InitialState>
            <CardPage />
          </InitialState>} />
        <Route path="/*" element={<Navigate to='coffee' />} />
      </Routes>
    </>
  )
}
