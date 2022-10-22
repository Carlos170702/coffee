import { useQuery } from "react-query"
import { NavBar } from "../../coffe/components/NavBar"
import { CarProducHold } from "../components/index"
import { ProductsHold } from "../controller/getDataProducts"
import '../css/productsOnHold.css'

export const ProductsOnHold = () => {

    const { isLoading, data } = useQuery(["holdProducts"], ProductsHold)
    return (
        <>
            <NavBar />
            {
                data?.listOrders.map((item, index) => (
                    <CarProducHold key={index} data={item} />
                ))
            }
        </>
    )
}
