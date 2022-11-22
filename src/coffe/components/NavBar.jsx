//others libraries
import { Link } from 'react-router-dom'
// icons
import { FiAlignJustify, FiX, FiLogOut } from 'react-icons/fi'
//css
import './css/navbar.css'

import { useNavBar } from './hooks/useNavBar'
import { UserContext } from '../context/products/UserContext'
import { useContext } from 'react'

export const NavBar = () => {
    const { handleLogout, active, handleOptions } = useNavBar()
    const { user } = useContext(UserContext)

    return (
        <>
            <nav className="coffee__nav">
                <Link to={"/"} >
                    <span className='coffee__Logo'>RappiCoffee</span>
                </Link>
                {
                    active
                        ? (
                            <div className='coffee__hamburger'>
                                <FiAlignJustify
                                    onClick={handleOptions}
                                    className='coffee__hamburger'
                                />
                            </div>
                        )
                        : (
                            <div className='coffee__hamburger'>
                                <FiX
                                    onClick={handleOptions}
                                    className='coffee__hamburger'
                                />
                            </div>
                        )
                }
                <ul className={`coffee__links data ${active && 'active'}`}>
                    <Link className="coffee__link coffee__link__profile" to={"/profile"}>
                        <img className='coffee__links__img' src={user?.image} alt={`imagen de ${user?.name}`} />
                        {user?.name?.toUpperCase()}
                    </Link>
                    <Link className="coffee__link" to={"/Menu"}>Menu</Link>
                    {user.rol === 'administrador' && <Link className="coffee__link" to={"/ProductsOnHold"}>pendientes</Link>}
                    {user.rol === 'administrador' && <Link className="coffee__link" to={"/products"}>Productos</Link>}
                    <button
                        className="coffee__logout"
                        onClick={handleLogout}
                    >
                        Cerrar sesion<FiLogOut className='coffe__Logout__icon' />
                    </button>
                </ul>
            </nav>
        </>
    )
}
