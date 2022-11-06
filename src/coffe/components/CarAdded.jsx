import { useContext } from "react"
import { FiShoppingCart } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { UserContext } from "../context/products/UserContext"
import './css/caradded.css'

export const CarAdded = () => {
    const { car } = useContext(UserContext)
    
    return (
        <>
            <div className="dataCar">
                <span className="iconCount">{car?.length}</span>
                <Link to={'/Card'} className="iconCar">
                    <FiShoppingCart className="icon" />
                </Link>
            </div>
        </>
    )
}
