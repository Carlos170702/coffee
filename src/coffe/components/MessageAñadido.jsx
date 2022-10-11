import { FiShoppingCart, FiCheckCircle } from "react-icons/fi"
import './css/messageAñadido.css'

export const MessageAñadido = ({ product }) => {
    return (
        <>
            <div className="messageAñadido">
                <h2><FiCheckCircle /> {product.name} se a añadido a tu carrito</h2>
                <button> <FiShoppingCart className="iconCar" /> Ver carrito</button>
            </div>
        </>
    )
}
