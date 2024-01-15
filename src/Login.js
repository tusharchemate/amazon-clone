import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPasswordHandler,
  signInWithEmailAndPasswordHandler,
} from './firebase';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPasswordHandler(email, password)
      .then((signedUser) => {
        if (signedUser) {
          navigate('/');
        }
      })
      .catch((err) => console.log('--err--', err.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPasswordHandler(email, password)
      .then((createdUser) => {
        if (createdUser.auth) {
          navigate('/');
        }
      })
      .catch((err) => console.log('--err--', err.message));
  };

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
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login__SignIn">
            Sign In
          </button>
        </form>
        <p>
          By Signin you agree to amazon condition & Sale. Please see our privacy
          notice.
        </p>
        <button onClick={register} className="login__register">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
