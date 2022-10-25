import { useQuery } from 'react-query'
import { getproductById } from '../controller/getDataProducts'
import './css/cardatapedido.css'

export const CarDataPedido = ({ infProduct }) => {
    const { productId, quantity } = infProduct
    const { data = [] } = useQuery(["productsById", productId], () => getproductById(productId))

    return (
        <>
            <div className="holdOninf__pedido holdOninf__personal__data holdOninf__personal__data--pedidos">
                <h3>Name: <span>{data?.productById?.name} </span></h3>
                <h3>Precio: <span> ${data?.productById?.price}.00 MX</span></h3>
                <h3>Categoria: <span>{data?.productById?.category.name}</span></h3>
                <h3>Cantidad: <span>{quantity} KG</span></h3>
            </div>
        </>
    )
}
