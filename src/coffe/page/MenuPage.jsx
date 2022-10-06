import { useEffect, useState } from "react"
import { NavBar } from "../components"
import { getCategory } from "../controller/GetProduct"
import { FiShoppingCart } from 'react-icons/fi'

import '../css/Menu.css'
import { Menu } from "./Menu"

export const MenuPage = () => {
  const [category, setCategory] = useState([])
  const [carAdded, setCarAdded] = useState([])

  useEffect(() => {
    (async () => {
      setCategory(await getCategory())
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
            category.map(item => (
              <h1 key={item._id} >{item.name}</h1>
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
