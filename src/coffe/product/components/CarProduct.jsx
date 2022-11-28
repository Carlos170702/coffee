// componentes
import { CardInf } from "./CardInf"
//hook
import { useCarProduct } from "./hooks/useCarProduct"
// css
import "./css/carproducts.css"

export const CarProduct = ({ data }) => {
    const { deleteProducts, updateProductPage } = useCarProduct()
    const { name, price, category, stock, description } = data

    const infoProduct = [
        { name: 'Nombre', about: name },
        { name: 'Precio', about: `$${price}.00` },
        { name: 'Categoria', about: category.name },
        { name: 'Stock', about: `${stock} KG` },
        { name: 'Descripsion', about: description },
    ]

    return (
        <>
            <div className="carProducts animate__animated animate__fadeInDown">
                <div className="carProducts__image">
                    <img src={data.image} alt="" />
                </div>
                <div className="carProducts__data">
                    {
                        infoProduct.map((item, index) =>
                        (
                            <CardInf key={index} data={item} />
                        )
                        )
                    }
                </div>
                <div className="carProducts__buttons">
                    <button
                        className="delete"
                        onClick={() => deleteProducts(data._id)}
                    >Eliminar</button>

                    <button
                        className="update"
                        onClick={() => updateProductPage( data )}
                    >Actualizar</button>
                </div>
            </div>
        </>
    )
}