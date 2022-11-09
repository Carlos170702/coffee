//components
import { CarCoffee, Loading, NavBar } from "../components"
import { CarAdded } from "../components/CarAdded"
//hook
import { useMenuPage } from "../hooks/useMenuPage"
//css
import '../css/coffee.css'

export const MenuPage = () => {
  const { handleAdd, products, isLoading, } = useMenuPage()

  return (
    <div className="containercoffees">
      <NavBar />
      <section className="coffees__coffee">
        {
          isLoading
            ? <Loading />
            : products?.length === 0
              ? <h2 className="Empty">No cuentas con productos</h2>
              : products?.map(item => (
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
  )
}