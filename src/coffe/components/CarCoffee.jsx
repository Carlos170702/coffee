import { FiShoppingCart } from 'react-icons/fi'
import './css/carCoffee.css'

export const CarCoffee = ({ product, onclickAdd }) => {
  const { stock, _id, image, name, price } = product;

  const hanldeClick = () => {
    onclickAdd(product._id)
  }

  return (
    <>
      <div className="card__coffees animate__animated animate__jackInTheBox">
        <div className='card__Coffee'>
          <img className='img' src={image || 'https://tse4.mm.bing.net/th?id=OIP.MZaSnoQ_5jL33CM8yggKIAHaF7&pid=Api&P=0'} alt="" />
        </div>

        <div className='productInfo'>
          <h1 className='productName'>{name}</h1>
          <p
            className={`${stock > 0
              ? 'verde'
              : 'rojo'} productStock `}
          >{`${stock > 0
            ? 'Disponible:'
            : 'No disponible:'}`}
            <span>{stock} KG</span>
          </p>
          <p className='productPrice'>Precio: <span>{`$${price}.00`}</span></p>
        </div>

        <div className='productCar'>
          <button
            className={`prosuctAdd ${stock <= 0
              && 'productEmpty'}`}
            onClick={stock > 0
              ? hanldeClick
              : () => console.log()}
            name={_id}
          >
            Agregar al carrito
            <FiShoppingCart className='productIconCar' />
          </button>
        </div>
      </div>
    </>
  )
}
