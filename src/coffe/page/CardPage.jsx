import { useContext } from "react"
import { CardCar } from "../components/CardCar"
import { NavBar } from "../components/NavBar"
import { UserContext } from "../context/products/UserContext"
import '../css/carpage.css'

export const CardPage = () => {
    const { car } = useContext(UserContext)

    const data = () => {
        const data = car.filter(index => {
            index._id > 1
        })
        console.log(data)
    }

    data()

    return (
        <>
            <NavBar />
            <div className="carpage">
                <p className="carAdded">Tiene <span>{car.length}</span> prodductos en el carrito de compras:</p>
                {
                    car.map((item, index) => (
                        <CardCar key={index} item={item} />
                    ))
                }
            </div>
        </>
    )
}
