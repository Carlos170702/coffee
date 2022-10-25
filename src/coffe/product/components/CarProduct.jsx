// css
import "./css/carproducts.css"

export const CarProduct = () => {
    return (
        <>
            <div className="carProducts">
                <div className="carProducts__image">
                    <img src="https://static.scientificamerican.com/espanol/cache/file/050D641B-C40F-460A-B892534B0024CB3C_source.jpg?w=590&h=800&4147C8A7-B3A4-4126-9293322177AC2D1C" alt="" />
                </div>
                <div className="carProducts__data">
                    <div className="carProducts__data__product">
                        <h4>Nombre</h4>
                        <p>prueba nombre</p>
                    </div>
                    <div className="carProducts__data__product">
                        <h4>precio</h4>
                        <p>$20.00 MX</p>
                    </div>
                    <div className="carProducts__data__product">
                        <h4>Categoria</h4>
                        <p> Cafe </p>
                    </div>
                    <div className="carProducts__data__product">
                        <h4>Stock</h4>
                        <p>90</p>
                    </div>
                    <div className="carProducts__data__product">
                        <h4>Descripsion</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem asperiores labore sapiente voluptates explicabo voluptatibus nihil optio, cum aut. Soluta.</p>
                    </div>
                </div>
                <div className="carProducts__buttons">
                    <button className="delete">Eliminar</button>
                    <button className="update">Actualizar</button>
                </div>
            </div>
        </>
    )
}
