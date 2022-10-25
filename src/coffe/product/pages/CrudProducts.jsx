import { useContext } from "react"
import { FiSearch } from "react-icons/fi"
// useQuery
import { useQuery } from "react-query"
import { NavBar } from "../../components"
// useContext
import { UserContext } from "../../context/products/UserContext"
// components
import { CarProduct } from "../components/CarProduct"
// css
import "../css/crudproducts.css"

export const CrudProducts = () => {
    const { getCoffes } = useContext(UserContext)
    const { isLoading, data, isError } = useQuery("getProducts", getCoffes)
    
    return (
        <>
            <NavBar />
            <div className="CrudProducts">
                <div className="CrudProducts__content">
                    <div className="CrudProducts__activity__activity">
                        <button className="CrudProducts__Add">Añadir producto</button>

                        <div className="CrudProducts__SearchProduct">
                            <input placeholder="producto ID" className="CrudProducts__SearchProduct__search" type="text" />
                            <FiSearch className="CrudProducts__SearchProduct__icon" />
                        </div>
                    </div>
                    {
                        data?.map(item => (
                            <CarProduct />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
