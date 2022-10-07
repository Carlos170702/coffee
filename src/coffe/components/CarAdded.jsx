import { FiShoppingCart } from "react-icons/fi"
import { Link } from 'react-router-dom'
import './css/caradded.css'
export const CarAdded = () => {
    return (
        <>
            <div className="dataCar">
                <span className="iconCount">0</span>
                <a href="#" className="">
                    <FiShoppingCart className="iconCar" />
                </a>
            </div>
        </>
    )
}
