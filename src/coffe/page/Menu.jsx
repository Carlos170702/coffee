import { useEffect, useState } from "react"
import { getProduct } from "../Services/Products"
import '../css/menu.css'
import { NavBar } from "../components/NavBar"

export const Menu = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      const data = await getProduct();
      setProducts(data)
    })()
  }, [])

  return (
    <>
      <NavBar />

      <h2 className="titulo">Productos</h2>

      <div className="cards">
        {
          products.map(item => (
            <div className="card">
              <h1>{item.name}</h1>
            </div>
          ))
        }
      </div>
    </>
  )
}
