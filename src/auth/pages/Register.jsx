import { FiLogIn, FiKey, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useFormRegister } from '../hooks';
import { AiOutlineMail } from "react-icons/ai";
import { Loading, Error } from '../components'

export const Register = () => {
  const { email, name, password, login, message, handleChangeDatas, handleRegister } = useFormRegister();

  return (
    <>
      <div className="container login">
        <div className="login__data">
          <form className="login__form">

            <div className="login__img">
              <img src="https://static.vecteezy.com/system/resources/previews/000/585/220/non_2x/coffee-cup-logo-template-vector-icon-design.jpg" alt="imagen de cafe" />
            </div>

            <h1 className="login__titulo">Register</h1>
            <Error aviso={message} />
            {login && <Loading />}
            <div className="login__inputBox">
              <div className="login__box">
                <div className="login_icon"><FiUser /></div>
                <div className='login__contInput'>
                  <input
                    onChange={handleChangeDatas}
                    className='login__input'
                    name="name"
                    type="text"
                    required="required"
                    value={name}
                  />
                  <p className='login__type '>name</p>
                </div>
              </div>
            </div>

            <div className="login__inputBox">
              <div className="login__box">
                <div className="login_icon"><AiOutlineMail /></div>
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
                  <p className='login__type '>Password</p>
                </div>
              </div>
            </div>

            <label className="login__Remember">
              <input
                className='login__checkbox'
                type="checkbox"
              />Remember me
            </label>

            <div className="login__inputBox">
              <div className="login__boxSubmit">
                <div className="login_icon login_icon--btn"><FiLogIn /></div>
                <input
                  className='login__inputSubmit'
                  type="submit"
                  value="Register"
                  onClick={handleRegister}
                />
              </div>
            </div>

            <div className='login__logRegis'>
              <p>Already have an account? </p>
              <Link to="/login" className="login__forgot">Login</Link>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}
