import { Navigate, Route, Routes } from "react-router-dom"
import { CoffeePage } from "./CoffeePage"


export const CoffeeRouter = () => {
  return (
    <>
    
        <Routes>

            <Route path="coffee" element={<CoffeePage />} />
            <Route path="/*" element={<Navigate to='coffee' />} />

        </Routes>

    </>
  )
}
