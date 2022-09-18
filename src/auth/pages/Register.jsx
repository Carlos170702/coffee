import { FiLogIn } from 'react-icons/fi';

import { InputData } from '../components';
import { Link } from 'react-router-dom';
import { useFormRegister } from '../hooks';

export const Register = () => {

  const { email, name, password, handleChangeDatas, handleRegister, nameData } = useFormRegister();

  return (
    <>
      <div className="container login">
        <div className="login__data">
          <form className="login__form">

            <div className="login__img">
              <img src="https://static.vecteezy.com/system/resources/previews/000/585/220/non_2x/coffee-cup-logo-template-vector-icon-design.jpg" alt="imagen de cafe" />
            </div>

            <h1 className="login__titulo">Register</h1>

            {nameData.map((item) => (
              <InputData
                key={item.id}
                nameDato={item}
                onChangeDatas={handleChangeDatas}
              />
            ))}

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
                  onClick={ handleRegister }
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
