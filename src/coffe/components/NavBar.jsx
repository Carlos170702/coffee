import { Link } from 'react-router-dom'
import '../css/coffee.css'

export const NavBar = () => {
    return (
        <>
            <nav className="coffee__nav">
                <Link to={"/"} className="coffee__link">
                    <span className='coffee__Logo'>RappiCoffee</span>
                </Link>
                <ul className="coffee__links">
                    <Link className="coffee__link" to={"/Menu"}>Menu</Link>
                    <Link className="coffee__link" to={"profile"}>Profile</Link>
                </ul>
            </nav>
        </> 
    )
}
