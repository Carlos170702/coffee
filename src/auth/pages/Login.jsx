import { FiKey } from 'react-icons/fi';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Error } from '../components/Error';
import { Loading } from '../components/loading';
import { useFormLogin } from '../hooks';

export const Login = () => {
  const { email, password, message, loading, handleChangeDatas, handleLogin } = useFormLogin();

  return (
    <>
      <div className="container login">
        <div className="login__data">
          <form className="login__form">
            {loading && <Loading />}
            <div className="login__img">
              <img src="https://static.vecteezy.com/system/resources/previews/000/585/220/non_2x/coffee-cup-logo-template-vector-icon-design.jpg" alt="imagen de cafe" />
            </div>

            <h1 className="login__titulo">Login</h1>
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
                  <p className='login__type '>Email</p>
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
                  <p className='login__type '>password</p>
                </div>
              </div>
            </div>

            <label className="login__Remember">
              <input className='login__checkbox' type="checkbox" />Remember me
            </label>

            <div className="login__inputBox">
              <div className="login__boxSubmit">
                <div className="login_icon login_icon--btn"><FiLogIn /></div>
                <input
                  className='login__inputSubmit'
                  type="submit"
                  value="Login"
                  onClick={handleLogin}
                />
              </div>
            </div>

            <div className='login__logRegis'>
              <p>don't have an account? </p>
              <Link to="/register" className="login__forgot">Register</Link>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}
