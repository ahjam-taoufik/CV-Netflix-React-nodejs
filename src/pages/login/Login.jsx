import { useContext, useState } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import './login.scss';
import { login } from './../../authContext/apiCalls';
import { useNavigate } from 'react-router-dom';
import { toastError } from '../../utils/toastMessage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(!email || !password) {
      toastError({title:'Please enter email and password'})
      return;
    }
    try {    
      login({ email, password }, dispatch);
    } catch (error) {
    }
            
    }

  const handleSign = () => {
    navigate('/register');
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div className="testLoginPassword">
          <h2>Login Test : test@gmail.com</h2>
          <h2>Password Test : 123456</h2>
        </div>

        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="on"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix?{' '}
            <b className="b" onClick={handleSign}>
              Sign up now.
            </b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
