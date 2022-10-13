import { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import './css/carCoffee.css'

export const CarCoffee = ({ products, onclickAdd }) => {
  const [stock, setStock] = useState(products.stock)

  const hanldeClick = () => {
    onclickAdd(products)
  }

  return (
    <>
      <div className="card__coffees">
        <div className='card__Coffee'>
          <img className='img' src={products.image || 'https://tse4.mm.bing.net/th?id=OIP.MZaSnoQ_5jL33CM8yggKIAHaF7&pid=Api&P=0'} alt="" />
        </div>

        <div className='productInfo'>
          <h1 className='productName'>{products.name}</h1>
          <p
            className={`${stock > 0
              ? 'verde'
              : 'rojo'} productStock `}
          >{`${stock > 0
            ? 'Disponible:'
            : 'No disponible:'}`}
            <span>{stock}</span>
          </p>
          <p className='productPrice'>Precio: <span>{`$${products.price}.00`}</span></p>
        </div>

        <div className='productCar'>
          <button
            className={`prosuctAdd ${stock <= 0
              && 'productEmpty'}`}
            onClick={stock > 0
              ? hanldeClick
              : () => console.log()}
            name={products._id}
          >
            Agregar al carrito
            <FiShoppingCart className='productIconCar' />
          </button>
        </div>
      </div>
    </>
  )
}
