import { Navigate, Route, Routes } from "react-router-dom"
import { CoffeePage } from "../page/CoffeePage"
import { MenuPage } from "../page/MenuPage"

export const CoffeeRouter = () => {
  return (
    <> 
        <Routes>
            <Route path="coffee" element={<CoffeePage />} />
            <Route path="Menu" element={<MenuPage />} />
            <Route path="/*" element={<Navigate to='coffee' />} />
        </Routes>
    </>
  )
}
