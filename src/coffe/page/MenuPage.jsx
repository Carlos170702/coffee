import { useQuery } from "react-query"
import { CarCoffee, NavBar } from "../components"
import { CarAdded } from "../components/CarAdded"
import '../css/coffee.css'
import { useContext } from "react"
import { UserContext } from "../context/products/UserContext"

export const MenuPage = () => {
  const { getCoffes, addProduct } = useContext(UserContext)

  const { isLoading,data } = useQuery(['getProducts'], getCoffes)

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
              ? <span className="Loadng">Cargando...</span>
              : data?.map(item => (

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
