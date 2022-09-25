import { Navigate, Route, Routes } from "react-router-dom"
import { CoffeePage } from "../page/CoffeePage"
import { Menu } from "../page/Menu"


export const CoffeeRouter = () => {
  return (
    <> 
        <Routes>
            <Route path="coffee" element={<CoffeePage />} />
            <Route path="Menu" element={<Menu />} />
            <Route path="/*" element={<Navigate to='coffee' />} />
        </Routes>
    </>
  )
}
