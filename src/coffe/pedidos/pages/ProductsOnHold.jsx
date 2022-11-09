//otros
import { useContext } from "react"
import { useQuery } from "react-query"
// Context
import { UserContext } from "../../context/products/UserContext"
// components
import { NavBar } from "../../components/NavBar"
import { CarProducHold } from "../components/index"
import { Loading } from '../../components/Loading'
// css
import '../css/productsOnHold.css'

export const ProductsOnHold = () => {
    const { orders, getPendientes } = useContext(UserContext)
    const { isLoading } = useQuery(["getPendientes"], getPendientes)

    return (
        <>
            <NavBar />
            {
                isLoading
                    ? <Loading />
                    : orders?.length > 0
                        ? orders?.map((item, index) => (
                            <CarProducHold key={index} data={item} />
                        ))
                        : <h3
                            className="container"
                            style={
                                {
                                    color: 'white',
                                    padding: '30px',
                                    width: '100%',
                                    textAlign: 'center'
                                }
                            } >No hay productos pendientes</h3>
            }
        </>
    )
}
