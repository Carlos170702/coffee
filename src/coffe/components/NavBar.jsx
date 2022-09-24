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
                    <li><Link className="coffee__link" to={"/"}>Home</Link></li>
                    <li><Link className="coffee__link" to={"/"}>Menu</Link></li>
                </ul>
            </nav>
        </>
    )
}
