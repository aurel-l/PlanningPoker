/* @flow */
import React, {PropTypes as T, createElement} from 'react';
import {connect} from 'react-redux';

import Header from './components/Header';
import Footer from './components/Footer';

import getPageForRoute from './router/router';

import s from './App.css';

const App = ({user, socket, navigation}) => {
  console.log('rendering app');
  return (
    <div className={s.app}>
      <Header username={user.name} />
      {createElement(getPageForRoute(navigation.levels))}
      <Footer status={socket.status} url={socket.url} />
    </div>
  );
};
App.propTypes = {
  user: T.object.isRequired,
  socket: T.object.isRequired,
  navigation: T.object.isRequired,
};

export default connect(s => s)(App);
