import { NavBar } from "../components/NavBar"


// css
import '../css/ProductsCanceled.css';
import { CarProducHold } from "../pedidos/components";

export const ProductsCanceled = () => {

    return (
        <>
            <NavBar />
            <div className="canceled">
                {/* <CarProducHold data={data} /> */}
            </div>
        </>
    )
}
