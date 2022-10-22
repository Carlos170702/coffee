import { useState } from 'react'
import { FiAlignJustify, FiX, FiLogOut } from 'react-icons/fi'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './css/navbar.css'

export const NavBar = () => {
    const [active, setActive] = useState(true)
    const navigate = useNavigate()

    const handleOptions = () => {
        setActive(!active)
    }

    const handleLogout = () => {
        localStorage.clear("user")
        navigate("/login", {
            replace: true
        })
    }

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