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

export const CrudProducts = () => {
    const { products, id, newProduct, getCoffes, setNewProduct, clickSearch, handleActive, handleChangeID } = useCrudProducts()

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
