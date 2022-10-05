import { useEffect, useState } from "react"
import { CarCoffee, NavBar } from "../components"
import { getProducts } from "../controller/GetProduct"
import { FiShoppingCart } from 'react-icons/fi'

import '../css/Menu.css'

export const MenuPage = () => {
  const [products, setProducts] = useState([])
  const [carAdded, setCarAdded] = useState([])

  useEffect(() => {
    (async () => {
      setProducts((await getProducts()))
    })()
  }, [])


  const handleAdd = (e) => {
    const newProduct = e.target.name;
    const temp = [...carAdded];
    temp.push(newProduct);
    setCarAdded(temp);
  }

  return (
    <>
      <div className="containercoffees">
        <NavBar />
        <section className="coffees__coffee">
          {
            products.map(item => (
              <CarCoffee key={item._id} products={item} onclickAdd={handleAdd} />
            ))
          }
        </section>
        <div className="dataCar">
          <span className="iconCount">{carAdded.length}</span>
          <FiShoppingCart className="iconCar" />
        </div>
      </div>

    </>
  )
}
