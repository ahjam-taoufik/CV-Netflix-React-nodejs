import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.scss";
import  axios  from 'axios';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    try {
      await axios.post("auth/register", { email,username,password});
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const testMode = () => {
    navigate("/login");
  }

 
  return (
    <div className="register">
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
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <p className='testMode'>
             This is a test click on Sign In to enter       
          </p>

        {!email ? (
          <>
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            {/* <button className="registerButton" onClick={handleStart}>
              Get Started
            </button> */}
            <button className="registerButton"
              onClick={testMode}
             >
              Get Started
            </button>
          </div>
            <button className="loginButton" onClick={()=>{navigate('/login')}}>Sign In</button>
          </>
        ) : (
          <form className="input">
            <input type="username" placeholder="username"  onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}

      </div>
    </div>
  );
}