import { FiKey } from 'react-icons/fi';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Loading } from '../../coffe/components/Loading';
import { Error } from '../components';
import { useFormLogin } from '../hooks';

export const Login = () => {
  const { email, password, message, loading, handleChangeDatas, handleLogin } = useFormLogin();

  return (
    <>
      {loading && <Loading />}
      <div className="container login">
        <div className="login__data">
          <form className="login__form animate__animated animate__jackInTheBox">
            <div className="login__img">
              <img src="https://static.vecteezy.com/system/resources/previews/000/585/220/non_2x/coffee-cup-logo-template-vector-icon-design.jpg" alt="imagen de cafe" />
            </div>

            <h1 className="login__titulo">Iniciar sesion</h1>
            <Error aviso={message} />
            <div className="login__inputBox">
              <div className="login__box">
                <div className="login_icon"><FiKey /></div>
                <div className='login__contInput'>
                  <input
                    onChange={handleChangeDatas}
                    className='login__input'
                    name="email"
                    type="email"
                    required="required"
                    value={email}
                  />
                  <p className='login__type '>Correo</p>
                </div>
              </div>
            </div>

            <div className="login__inputBox">
              <div className="login__box">
                <div className="login_icon"><FiKey /></div>
                <div className='login__contInput'>
                  <input
                    onChange={handleChangeDatas}
                    className='login__input'
                    name="password"
                    type="password"
                    required="required"
                    value={password}
                  />
                  <p className='login__type '>Contraseña</p>
                </div>
              </div>
            </div>

            <label className="login__Remember">
              <input className='login__checkbox' type="checkbox" />Recordarme
            </label>

            <div className="login__inputBox login__boxSubmit">
              <button
                className='login__inputSubmit'
                type="submit"
                onClick={handleLogin}
              >
                <FiLogIn />
                iniciar
              </button>
            </div>

            <div className='login__logRegis'>
              <p>No tienes una cuenta? </p>
              <Link to="/register" className="login__forgot">Registrarse</Link>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}
