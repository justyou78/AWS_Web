import React, { useState } from 'react';
import sideImg from '../assets/images/background.png';
import headImg from '../assets/images/head.png';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

const Login = () => {
  const bottomImageCount = [...Array(8)].map((a, i) => i);

  console.log(bottomImageCount);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login">
      <Link to="/Main">
        <div className="login__take__a__look">
          <img src={headImg} alt="" className="login__top__img" />
          <button>Take a look</button>
        </div>
      </Link>
      <img src={sideImg} alt="" className="login__background" />
      <div className="login__gird">
        <div className="login__side">
          <h2>Donggue Study</h2>
        </div>
        <div className="login__main">
          <div className="login__box">
            <h2>Login</h2>
            <div>
              <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID" />
            </div>
            <div>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                name="password"
              />
            </div>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
