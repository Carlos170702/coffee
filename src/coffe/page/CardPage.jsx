//icons
import { Link } from "react-router-dom"
//components
import { CardCar } from "../components/CardCar"
import { MadeSale } from "../components/MadeSale"
import { NavBar } from "../components/NavBar"
//hooks
import { useCardPage } from "../hooks/useCardPage"
//css
import '../css/carpage.css'

export const CardPage = () => {
    const { car, status, dataProduct, Total, handleSale } = useCardPage()

    return (
        <>
            <NavBar />
            <div className="carpage">
                <p className="carAdded">Tiene <span>{car.length}</span> productos en el carrito de compras:</p>
                {
                    status && <MadeSale  data={dataProduct} />
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