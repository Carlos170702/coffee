import { NavBar } from '../components/navBar'
import '../css/coffee.css'

export const CoffeePage = () => {
  return (
    <>
      <NavBar />
      <section className="coffee">
        <div className="coffee__cotent">
          <div className="textBox">
            <h2 className="coffee__prase">It's not just coffee <br />It's <span>RapiCoffee</span></h2>
          </div>
          <img src="https://tse4.mm.bing.net/th?id=OIP.YBUcv36ewFuq0tfhMWU5TQHaE8&pid=Api&P=0" alt="image of coffee" />
        </div>

      </section>
    </>
  )
}
