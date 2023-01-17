import { Link, useNavigate } from 'react-router-dom';
import classes from './Register.module.css';
import { useState } from 'react';
import { database } from '../login/Login';

function Register() {
  const [mailInput, setMailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const navigate = useNavigate();

  const signUpHandler = (event) => {
    event.preventDefault();

    database.push({
      email: mailInput,
      password: passwordInput,
    });

    alert('Please log in now!');

    navigate('/');

    console.log(database);
  };

  const handleMailChange = (e) => {
    setMailInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  return (
    <div className={classes.login}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeft}>
          <h3 className={classes.loginLogo}>LeonteSocial</h3>
          <span className={classes.loginDesc}>
            Connect with friends and the world around you on LeonteSocial
          </span>
        </div>
        <div className={classes.loginRight}>
          <form onSubmit={signUpHandler} className={classes.loginBox}>
            <input
              placeholder="Email"
              type="email"
              className={classes.loginInput}
              required
              value={mailInput}
              onChange={handleMailChange}
            />
            <input
              placeholder="Password"
              type="password"
              className={classes.loginInput}
              required
              value={passwordInput}
              onChange={handlePasswordChange}
            />

            <button className={classes.loginButton}>Sign up</button>
            <Link to="/">
              <button className={classes.loginRegisterButton}>
                Log into Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
