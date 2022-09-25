import { NavBar } from '../components/navBar'
import '../css/coffee.css'
import { useCoffee } from '../hooks/useCoffee'
import { FiArrowRight } from "react-icons/fi";

export const CoffeePage = () => {
  const { handleMenu } = useCoffee();
  return (
    <>
      <NavBar />
      <section className="coffee">
        <div className="coffee__cotent">
          <div className="textBox">
            <h2 className="coffee__prase">It's not just coffee
              <br />
              It's <span>RapiCoffee</span></h2>
          </div>
          <button
            className='btn'
            type='submit'
            onClick={handleMenu}
          >
            Choose coffee <FiArrowRight />
          </button>
        </div>
        <div className='coffee__imgIni'>
        </div>
      </section>
    </>
  )
}
