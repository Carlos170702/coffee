//icons
import { FiCheck, FiX } from "react-icons/fi"
//components
import { CarDataPedido } from "./index"
//hook
import { useCarProductHold } from "./hooks/useCarProductHold"
//css
import "./css/carproducthold.css"

export const CarProducHold = ({ data }) => {
    const { user, handleConfirmSale, handleDeleteSale } = useCarProductHold()
    const { client, date, finish, id, products, totalToPay } = data;
    console.log(products)

    return (
        <>
            {
                user?.rol === 'administrador'
                    ? <div className="ProductsOnHold animate__animated animate__fadeInDown">
                        <div className="holdOn__information">
                            <h2>Informacion</h2>
                            <div className="holdOninf">
                                <div className="holdOninf__personal">
                                    <div className="holdOninf__personal__img">
                                        <img src={client?.image} alt="imagen de perfil" />
                                    </div>
                                    <div className="holdOninf__personal__data holdOninf__personal__data__user">
                                        <h3>Name: <span>{client?.name}</span></h3>
                                        <h3>Correo: <span>{client?.email}</span></h3>
                                        <h3>Roll: <span>{client?.rol}</span></h3>
                                    </div>
                                </div>
                                <div className="holdOninf__personal__data">
                                    <h2>Informacion pedido</h2>
                                    <h3>Fecha: <span>{date.split("T")[0]}</span></h3>
                                    <h3>codigo: <span>{id}</span></h3>
                                    <h3 className="holdOninf__personal__data__confirmado">Estado: <span
                                        className={`${finish
                                            ? 'success'
                                            : 'denied'}`} >
                                        {finish
                                            ? <>
                                                confirmado
                                                <FiCheck />
                                            </>
                                            :
                                            <>
                                                Por Confirmar
                                                <FiX />
                                            </>}
                                    </span></h3>
                                    <h3>Total: <span>{`$${totalToPay}.00 MX`}</span></h3>
                                </div>
                            </div>
                            <h2>Pedidos</h2>
                            <div className="holdOninf">
                                {
                                    products.map((item, index) => (
                                        <CarDataPedido key={index} infProduct={item} />
                                    ))
                                }
                            </div>
                            <div className="holdOninf">
                                <button
                                    className="holdOninf__button success"
                                    onClick={() => handleConfirmSale(id)}
                                > <FiCheck /> Confirmar</button>
                                <button
                                    className="holdOninf__button denied"
                                    onClick={() => handleDeleteSale(id)}
                                > <FiX /> Cancelar</button>
                            </div>
                        </div>
                    </div>
                    : <div>
                        <h2 className="ProductsOnHold__error">Error 404 usuario no valido </h2>
                    </div>
            }

        </>
    )
}
