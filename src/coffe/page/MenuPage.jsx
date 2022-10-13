import { useQuery } from "react-query"
import { CarCoffee, NavBar } from "../components"
import { CarAdded } from "../components/CarAdded"
import { Loading } from "../components/Loading"
import '../css/coffee.css'
import { useContext } from "react"
import { UserContext } from "../context/products/UserContext"

export const MenuPage = () => {
  const { getCoffes, addProduct, products, car } = useContext(UserContext)

  const { isLoading } = useQuery(['getProducts'], getCoffes)

  const handleAdd = (datos) => {
    addProduct(datos)
  }

  return (
    <>
      <div className="containercoffees">
        <NavBar />
        <section className="coffees__coffee">
          {
            isLoading
              ? <Loading />
              : products.map(item => (

                <CarCoffee
                  onclickAdd={handleAdd}
                  product={item}
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
