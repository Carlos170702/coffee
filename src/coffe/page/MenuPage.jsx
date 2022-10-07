import { useEffect, useState } from "react"
import { CarCoffee, NavBar } from "../components"
import { CarAdded } from "../components/CarAdded"
import { getProducts } from "../controller/GetProduct"
import '../css/coffee.css'

export const MenuPage = () => {
  const [products, setProducts] = useState([])

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
              <CarCoffee
                onclickAdd={handleAdd}
                products={item}
                key={item._id}
              />
            ))
          }
        </section>
        <CarAdded />
      </div>

    </>
  )
}
