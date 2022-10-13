import { useState } from "react"
import { useQuery } from "react-query"
import { CarCoffee, NavBar } from "../components"
import { CarAdded } from "../components/CarAdded"
import { Loading } from "../components/Loading"
import '../css/coffee.css'
import { useContext } from "react"
import { UserContext } from "../context/products/UserContext"

export const MenuPage = () => {
  const [carAdded, setCarAdded] = useState([])
  const { getCoffes, addProduct } = useContext(UserContext)

  // isFetching es para revalidar si los datos que estan en cache ya existen que revalide y obtenga los que afaltan
  const { isError, isLoading, data } = useQuery(['getProducts'], getCoffes, {
    // refetchOnWindowFocus: false, // que cuando l cursor entre a la pagina no aga la consulta
    // cacheTime: 3000, //tiempo que dilatara la cache 
    // retry: 2, //intentos antes de mandar el Error
    // retryDelay: 1000 //tiempo de cada reintento
  })

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
              : data.map(item => (

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
