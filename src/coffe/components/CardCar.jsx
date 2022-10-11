import { useContext } from 'react'
import { FiX } from 'react-icons/fi'
import { UserContext } from '../context/products/UserContext'
import './css/cardcar.css'

export const CardCar = ({ item }) => {
    const { addProduct } = useContext(UserContext)

    return (
        <>
            <div className="carProducts">
                <div className="carProduct">
                    <div className="carProductImg">
                        <img src={item.image} alt="" />
                    </div>
                </div>
                <div className="carInfo">
                    <div className="carData">
                        <h4 className="carName">{item.name}</h4>
                        <p className="carCategory">categoria: {item.category.name}</p>
                    </div>
                    <button
                        className="carButton"
                        onClick={() => addProduct(item)}
                    >
                        Agregar +1
                    </button>
                    <div className='carPrice'>
                        <span>${item.price}.00</span>
                    </div>
                </div>
                <div
                    className="carDelete"
                    onClick={ () => (console.log('object'))}
                >
                    <FiX className="iconDelete" />
                </div>
            </div>
        </>
    )
}
