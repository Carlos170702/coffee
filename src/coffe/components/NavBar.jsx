import { Link } from 'react-router-dom'
import '../css/coffee.css'

export const NavBar = () => {
    return (
        <>
            <nav className="coffee__nav">
                <Link to={"/"} >
                    <span className='coffee__Logo'>RappiCoffee</span>
                </Link>
                <ul className="coffee__links">
                    <Link className="coffee__link" to={"/Menu"}>Menu</Link>
                    <Link className="coffee__link" to={"profile"}>Profile</Link>
                </ul>
            </nav>
<<<<<<< HEAD
        </>
=======
        </> 
>>>>>>> a65fa3054abdc6300063dc2ecd583d04d191d23d
    )
}
