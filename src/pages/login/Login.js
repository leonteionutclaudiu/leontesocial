import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Login.module.css';

// User Login info
export const database = [
  {
    email: 'user1@leonte.com',
    password: 'pass1',
  },
  {
    email: 'user2@leonte.com',
    password: 'pass2',
  },
];

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    let { email, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.email === email.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages('Email or password incorrect!');
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Email not found
      setErrorMessages('Email or password incorrect!');
    }
  };

  const errorHandler = () => {
    setErrorMessages('');
  };

  const forgotHandler = () => {
    alert(
      'If you entered a correct email, you received an email to reset the password!'
    );
  };

  // JSX code for login form
  const renderForm = (
    <div className={classes.form}>
      <span className={classes.logo}>LeonteSocial</span>

      <form onSubmit={handleSubmit}>
        <div className={classes.inputContainer}>
          <input
            className={classes.loginInput}
            type="email"
            name="email"
            required
            placeholder="Email"
          />
        </div>
        <div className={classes.inputContainer}>
          <input
            className={classes.loginInput}
            type="password"
            name="pass"
            required
            placeholder="Password"
          />
        </div>
        <div className={classes.buttonContainer}>
          <button
            className={classes.loginBtn}
            onClick={errorHandler}
            type="submit"
          >
            Log in
          </button>
          <Link to="/register" className={classes.loginRegisterButton}>
            Sign up
          </Link>
          <div className={classes.forgot} onClick={forgotHandler}>
            Forgot your password?
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <div className={classes.login}>
      <div className={classes.loginForm}>
        {isSubmitted ? (
          <>
            <Link to="/home" className={classes.loginNow}>
              I'm sure, I want to Log in!
            </Link>
          </>
        ) : (
          renderForm
        )}
        <span className={classes.error}>{errorMessages}</span>
      </div>
    </div>
  );
}

export default Login;
