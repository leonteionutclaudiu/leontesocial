import { useNavigate } from 'react-router-dom';
import classes from './Register.module.css';
import { useState } from 'react';
import { database } from '../login/Login';
import { Diversity2 } from '@mui/icons-material';

function Register() {
  const [mailInput, setMailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const navigate = useNavigate();

  function loadingHandler2() {
    navigate('/loading');

    setTimeout(() => {
      navigate('/');
    }, 500);
  }

  const loadingHandler = (event) => {
    event.preventDefault();

    database.push({
      email: mailInput,
      password: passwordInput,
    });

    navigate('/loading');

    setTimeout(() => {
      navigate('/');
    }, 1000);
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
          <div className={classes.logoAndName}>
            <Diversity2 className={classes.logoIcon} />
            <h3 className={classes.loginLogo}>LeonteSocial</h3>
          </div>
          <span className={classes.loginDesc}>
            Connect with friends and the world around you on LeonteSocial
          </span>
        </div>
        <div className={classes.loginRight}>
          <form onSubmit={loadingHandler} className={classes.loginBox}>
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
            <button
              className={classes.loginRegisterButton}
              onClick={loadingHandler2}
            >
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
