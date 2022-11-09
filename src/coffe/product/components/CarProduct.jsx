// componentes
import { CardInf } from "./CardInf"
//hook
import { useCarProduct } from "./hooks/useCarProduct"
// css
import "./css/carproducts.css"

export const CarProduct = ({ data }) => {
    const { deleteProducts } = useCarProduct()

    const infoProduct = [
        { name: 'Nombre', about: data?.name },
        { name: 'Precio', about: `$${data?.price}.00` },
        { name: 'Categoria', about: data?.category.name },
        { name: 'Stock', about: `${data?.stock} KG` },
        { name: 'Descripsion', about: data?.description },
    ]

    return (
        <>
            <div className="carProducts">
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
                        onClick={() => console.log("ola")}
                    >Actualizar</button>
                </div>
            </div>
        </>
    )
}