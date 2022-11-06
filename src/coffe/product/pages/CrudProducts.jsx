import { useState } from "react"
import { useContext } from "react"
import { FiSearch } from "react-icons/fi"
// useQuery
import { NavBar } from "../../components"
// useContext
import { UserContext } from "../../context/products/UserContext"
// components
import { CarProduct } from "../components/CarProduct"
// css
import "../css/crudproducts.css"
import { NewProduct } from "./NewProduct"

export const CrudProducts = () => {
    const [id, setId] = useState('')
    const [newProduct, setNewProduct] = useState(false)
    const { products, getCoffes, getProductById } = useContext(UserContext)
    products.length === 0 && getCoffes()

    const handleChangeID = (event) => {
        setId(event.target.value)
    }

    const clickSearch = () => {
        getProductById(id)
        setId('')
    }

    const handleActive = () => {
        setNewProduct(!newProduct)
    }

    return (
        <>
            {
                newProduct && <NewProduct handleActive={handleActive} />
            }
            <NavBar />
            <div className="CrudProducts">
                <div className="CrudProducts__content">
                    <div className="CrudProducts__activity__activity">
                        <button className="CrudProducts__Add" onClick={() => setNewProduct(!newProduct)}>Añadir producto</button>
                        <button className="CrudProducts__Add" onClick={() => getCoffes()}>Todos los productos</button>
                        <div className="CrudProducts__SearchProduct">
                            <input
                                placeholder="producto ID"
                                className="CrudProducts__SearchProduct__search"
                                type="text"
                                onChange={handleChangeID}
                                value={id}
                            />
                            <FiSearch
                                className="CrudProducts__SearchProduct__icon"
                                onClick={clickSearch}
                            />
                        </div>
                    </div>
                    {
                        products.length > 0
                            ? (products?.map((item, index) => (
                                <CarProduct key={index} data={item} />
                            )))
                            : <span className="Loading">Produtos no encontrados</span>
                    }
                </div>
            </div>
        </>
    )
}




