import { Navigate, Route, Routes } from "react-router-dom"
import { CardPage } from "../page/CardPage"
import { CoffeePage } from "../page/CoffeePage"
import { MenuPage } from "../page/MenuPage"
import { InitialState } from '../context/products/InitialState'
import { ProductsOnHold } from "../pedidos/pages/ProductsOnHold"
import { CrudProducts } from "../product/pages/CrudProducts"
import { Profile } from "../page/Profile"

export const CoffeeRouter = () => {
  return (
    <>
      <Routes>
        <Route path="coffee" element={<CoffeePage />} />

        <Route path="Menu" element={
          <MenuPage />
        }
        />

        <Route path={"Card"} element={
          <CardPage />
        } />

        <Route path="ProductsOnHold" element={
          <ProductsOnHold />
        } />

        < Route path="Products" element={
          <CrudProducts />
        } />

        < Route path="profile" element={
          <Profile />
        } />

        <Route path="/*" element={<Navigate to='coffee' />} />


      </Routes >
    </>
  )
}
