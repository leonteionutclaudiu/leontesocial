import { Link, useNavigate } from 'react-router-dom';
import classes from './Register.module.css';

function Register() {
  const navigate = useNavigate();

  const signUpHandler = (event) => {
    event.preventDefault();
    navigate('/');
    alert('Please log in now!');
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
              placeholder="Username"
              type="text"
              className={classes.loginInput}
              required
            />
            <input
              placeholder="Email"
              type="email"
              className={classes.loginInput}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className={classes.loginInput}
              required
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
