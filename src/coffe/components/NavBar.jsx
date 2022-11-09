//others libraries
import { Link } from 'react-router-dom'
// icons
import { FiAlignJustify, FiX, FiLogOut } from 'react-icons/fi'
//css
import './css/navbar.css'

import { useNavBar } from './hooks/useNavBar'

export const NavBar = () => {
    const { handleLogout, active, handleOptions } = useNavBar()

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
                    <Link className="coffee__link" to={"/Menu"}>Menu</Link>
                    <Link className="coffee__link" to={"profile"}>perfil</Link>
                    <Link className="coffee__link" to={"/ProductsOnHold"}>pendientes</Link>
                    <Link className="coffee__link" to={"/products"}>Products</Link>
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
