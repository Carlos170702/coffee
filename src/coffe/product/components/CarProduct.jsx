import { useContext } from "react"
import { UserContext } from "../../context/products/UserContext"
import { deleteProduct } from "../controller/apiProduct"
import { CardInf } from "./CardInf"
// css
import "./css/carproducts.css"

export const CarProduct = ({ data }) => {
    const { _id } = data
    const { getCoffes } = useContext(UserContext)

    const infoProduct = [
        { name: 'Nombre', about: data?.name },
        { name: 'Precio', about: `$${data?.price}.00` },
        { name: 'Categoria', about: data?.category.name },
        { name: 'Stock', about: `${data?.stock} KG` },
        { name: 'Descripsion', about: data?.description },
    ]

    const deleteProducts = async () => {
        const token = JSON.parse(localStorage.getItem("user"))
        await deleteProduct(_id, token)
        await getCoffes()
    }

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
                        onClick={deleteProducts}
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