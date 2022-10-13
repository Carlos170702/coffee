import { useContext } from "react"
import { Link } from "react-router-dom"
import { CardCar } from "../components/CardCar"
import { NavBar } from "../components/NavBar"
import { UserContext } from "../context/products/UserContext"
import '../css/carpage.css'

export const CardPage = () => {
    const { car } = useContext(UserContext)

    return (
        <>
            <NavBar />
            <div className="carpage">
                <p className="carAdded">Tiene <span>{car.length}</span> productos en el carrito de compras:</p>
                {
                    car.length > 0
                        ? car.map((item, index) => (
                            <CardCar key={index} item={item} />
                        ))
                        : <div className="carEmpty">
                            <Link to={'/Menu'} className=''>
                                Agregar productos
                            </Link>
                        </div>
                }
            </div>
        </>
    )
}
