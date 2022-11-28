import { NavBar } from "../components/NavBar"


// css
import '../css/ProductsCanceled.css';
import { CarProducHold } from "../pedidos/components";
export const ProductsCanceled = () => {

    // const data = {
    //     client: 'carlos daniel',
    //     date: '23432',
    //     finish: false,
    //     id: 1,
    //     products,
    //     totalToPay
    // }

    return (
        <>
            <NavBar />
            <div className="canceled">
                {/* <CarProducHold data={data} /> */}
            </div>
        </>
    )
}
