import { useContext } from 'react'
import { FiX } from 'react-icons/fi'
import { UserContext } from '../context/products/UserContext'
import './css/cardcar.css'

export const CardCar = ({ item }) => {
    const { name, category, image, price, quantity, _id } = item
    const { addProduct } = useContext(UserContext)

    return (
        <>
            <div className="carProducts">
                <div className="carProduct">
                    <div className="carProductImg">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="carInfo">
                    <div className="carData">
                        <h4 className="carName">{name}</h4>
                        <p className="carCategory">categoria: {category.name}</p>
                    </div>
                    <button
                        className="carButton"
                        onClick={() => addProduct(_id)}
                    >
                        Agregar +1
                    </button>
                    <div className='carPrice'>
                        <span>${price}.00 x {quantity}</span>
                        <h5>Total a pagar: ${price * quantity}</h5>
                    </div>
                </div>
                <div
                    className="carDelete"
                    onClick={() => (console.log('object'))}
                >
                    <FiX className="iconDelete" />
                </div>
            </div>
        </>
    )
}
