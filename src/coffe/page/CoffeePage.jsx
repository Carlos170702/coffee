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
            <h2 className="coffee__prase">Esto no es cafe,
              <br />
              esto es <span>RapiCoffee</span></h2>
          </div>
          <button
            className='btn btn--chooseCOfffee'
            type='submit'
            onClick={handleMenu}
          >
            Elegir cafe <FiArrowRight className='coffee__ArrowChoose' />
          </button>
        </div>
        <div className='coffee__imgIni'>
        </div>
      </section>
    </>
  )
}
