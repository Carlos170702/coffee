import { useEffect } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { InputData } from '../components';
import { Error } from '../components/Error';
import { useFormLogin } from '../hooks';

export const Login = () => {
  const navigate = useNavigate();
  const { email, password, message, nameData, handleChangeDatas, handleLogin } = useFormLogin();

  useEffect(() => {
    const user = localStorage.getItem('user')
    user && navigate('coffee')
  }, [])

  return (
    <>
      <div className="container login">
        <div className="login__data">
          <form
            className="login__form"
            onSubmit={handleLogin}
          >

            <div className="login__img">
              <img src="https://static.vecteezy.com/system/resources/previews/000/585/220/non_2x/coffee-cup-logo-template-vector-icon-design.jpg" alt="imagen de cafe" />
            </div>

            <h1 className="login__titulo">Login</h1>

            <Error aviso={message} />

            {nameData.map(item => (
              <InputData
                key={item.id}
                nameDato={item}
                onChangeDatas={handleChangeDatas} />
            ))}

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
