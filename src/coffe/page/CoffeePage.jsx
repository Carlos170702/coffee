
import { Link } from 'react-router-dom'
import '../coffee.css'

export const CoffeePage = () => {
  return (
    <>
      <section className="coffee">
        <header className="coffee__nav">
          <a href="#">
            <img className='coffe__conLogo' src="https://firebasestorage.googleapis.com/v0/b/coffee-fad35.appspot.com/o/logo.png?alt=media&token=0c1a08b6-7132-40b5-b527-fee60f431b06" alt="img logo" />
          </a>
          <ul className="coffee__links">
            <li className="coffee__list"><Link className="coffee__link" to={"/"}>Home</Link></li>
            <li><Link className="coffee__link" to={"/"}>Menu</Link></li>
          </ul>
        </header>

        <div className="cotent">
          <div className="textBox">
            <h2>It's not just coffee <br />It's <span>RapiCoffee</span></h2>
          </div>
        </div>

      </section>
    </>
  )
}
