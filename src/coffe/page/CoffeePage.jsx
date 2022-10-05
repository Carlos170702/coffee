import { NavBar } from '../components'
import '../css/coffee.css'
import { useCoffee } from '../hooks'
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
            className='btn btn--chooseCOfffee'
            type='submit'
            onClick={handleMenu}
          >
            Choose coffee <FiArrowRight className='coffee__ArrowChoose' />
          </button>
        </div>
        <div className='coffee__imgIni'>
        </div>
      </section>
    </>
  )
}
