import { useState } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CardCar } from "../components/CardCar"
import { MadeSale } from "../components/MadeSale"
import { NavBar } from "../components/NavBar"
import { UserContext } from "../context/products/UserContext"
import { finishSale } from "../controller/GetProduct"
import '../css/carpage.css'

export const CardPage = () => {
    const { car, deleteAllProducts, products } = useContext(UserContext)
    const [status, setStatus] = useState(false)
    const [dataProduct, setDataProduct] = useState({})

    const Total = () => {
        const Total = car.reduce((acomulador, Actual) => acomulador + Actual.price * Actual.quantity, 0)
        return Total
    }

    // funncion que guarda el array de productos agregados al carrito { Id, quantity }
    const handleTotal = () => {
        const productsSell = []
        car.map(item => {
            productsSell.push({
                productId: item._id, quantity: item.quantity
            })
        })
        return productsSell
    }

    // funcion que ase la compra mandandole el array de productos y el token
    const handleSale = async () => {
        const token = JSON.parse(localStorage.getItem("user"))
        const data = handleTotal()

        const { msg, status, productOrder } = await finishSale(token, data) //ejecuta la funcion de metodo post hacer venta
        setStatus(status)
        setDataProduct({ productOrder, msg })

        setTimeout(() => {
            setStatus(!status)
            deleteAllProducts()
        }, 3000);
    }

    return (
        <>
            <NavBar />
            <div className="carpage">
                <p className="carAdded">Tiene <span>{car.length}</span> productos en el carrito de compras:</p>
                {
                    status && <MadeSale data={dataProduct} />
                }
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
                <div className="carDataFinish">
                    <div className='carPay'>
                        <h2>Total a pagar</h2>
                        <div className="carDataPay">
                            <div className="carDataInf">
                                <h3>Subtotal:</h3>
                                <span>${Total()}.00</span>
                            </div>
                            <hr />
                            <div className="carDataInf">
                                <h3>Entrega:</h3>
                                <p>Entrega en tienda</p>
                            </div>
                            <hr />
                            <div className="carDataInf">
                                <h3>Total:</h3>
                                <span>${Total()}.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carButton carButton--purchase"
                    onClick={handleSale}
                >
                    Realizar compra
                </button>
            </div>
        </>
    )
}