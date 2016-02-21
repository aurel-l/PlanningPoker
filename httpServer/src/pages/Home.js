/* @flow */
import React from 'react';
import Link from '../router/Link';

import s from './Home.css';

const Home = () => (
  <div className={s.home} data-page="home">
    <Link to="/user" style={{background: '#adf'}} className={s.user}>
      <p>User information</p>
    </Link>
    <Link to="/room" style={{background: '#e55'}} className={s.room}>
      <p>Join a specific room</p>
    </Link>
    <Link to="/room/random" style={{background: '#5fa'}} className={s.random}>
      <p>Join a random room</p>
    </Link>
    <Link to="/settings" style={{background: '#0df'}} className={s.settings}>
      <p>Settings</p>
    </Link>
  </div>
);

export default Home;
