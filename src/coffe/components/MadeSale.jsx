import { FiCheck } from 'react-icons/fi'
import './css/madesale.css'

export const MadeSale = ({ data }) => {
    const { msg, productOrder: { finish, id, totalToPay } } = data
    return (
        <>
            <div className="madeSale">
                <div className="madeSale__Content animate__animated animate__backInDown">
                    <h3 className='madeSale__titulo'>Venta realzada {<FiCheck className='icon' />}</h3>
                    <div className='InfProduct'>
                        <h4>{msg}</h4>
                        <p>Estado de los productos: <span>{!finish && 'Pagado, en espera de confirmación'}</span></p>
                        <p>Codigo: <span>{id}</span></p>
                        <p>Pago total: <span>$ {totalToPay}.00 MX</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
