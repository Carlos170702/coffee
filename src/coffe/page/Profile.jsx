//components
import { useContext } from "react"
import { NavBar } from "../components"
import { UserContext } from "../context/products/UserContext"

//css
import '../css/Profile.css'

export const Profile = () => {
    const { user } = useContext(UserContext)

    return (
        <>
            <NavBar />
            <div className="profile" >
                <div className="profile__titulo">
                    <h2 className="">Datos de usuario</h2>
                </div>
                <div className="profile__content">
                    <div className="profile__image">
                        <img src={user.image} alt={`imagen de {${user.name}}`} />
                    </div>
                    <div className="profile__data">
                        <div className="profile__inf">
                            <p>Correo: <span>{user?.email?.toUpperCase()}</span></p>
                            <p>Nombre: <span>{user?.name?.toUpperCase()}</span></p>
                        </div>

                        <div className="profile__inf">
                            <p>Rol: <span>{user?.rol?.toUpperCase()}</span></p>
                            <p>Estado de la cuenta:
                                <span
                                    className={`${user.estado ? 'activo' : 'inactivo'}`}
                                >
                                    {`${user?.estado ? 'Activo' : 'Desactivada'}`.toUpperCase()}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
