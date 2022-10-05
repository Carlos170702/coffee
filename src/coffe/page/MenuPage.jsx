import { useEffect, useState } from "react"
import { CarCoffee, NavBar } from "../components"
import { getProducts } from "../controller/GetProduct"
import '../css/Menu.css'

export const MenuPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      setProducts((await getProducts()))
    })()
  }, [])

  return (
    <>
      <div className="containercoffees">
        <NavBar />
        <section className="coffees__coffee">
          {
            products.map(item => (
              <CarCoffee key={item._id} products={item} />
            ))
          }
        </section>
      </div>

    </>
  )
}
