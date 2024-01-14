import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <Link to={'/'}>
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login__SignIn">Sign In</button>
        </form>
        <p>
          By Signin you agree to amazon condition & Sale. Please seee our
          privacy notice.
        </p>
        <button className="login__register">Create your Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;
