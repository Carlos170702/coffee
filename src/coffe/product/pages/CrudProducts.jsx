// icons
import { FiSearch } from "react-icons/fi"
// components
import { NavBar } from "../../components"
import { CarProduct } from "../components/CarProduct"
import { NewProduct } from "./NewProduct"
// hook
import { useCrudProducts } from "../hooks/useCrudProducts"
// css
import "../css/crudproducts.css"
import { UpdateProduct } from "./UpdateProduct"

export const CrudProducts = () => {
    const { user, products, id, newProduct, getCoffes, clickSearch, handleActive, handleChangeID, updateProduct } = useCrudProducts()

    return (
        <>
            {
                newProduct && <NewProduct handleActive={handleActive} />
            }

            <UpdateProduct Product={updateProduct} />

            <NavBar />
            {
                user?.rol === 'administrador'
                    ? <div className="CrudProducts">
                        <div className="CrudProducts__content">
                            <div className="CrudProducts__activity__activity">
                                <button className="CrudProducts__Add" onClick={handleActive}>Añadir producto</button>
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
                    : <div>
                        <h2 className="crudproducts__error">Error 404 usuario no valido</h2>
                    </div>
            }
        </>
    )
}
