/* @flow */
import React, {Component, PropTypes as T, createElement} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Socket from './invisible/Socket';

import getPageForRoute from './router/router';

import rootReducer from './reducers/root';
import {init} from './actions/creators';

import s from './App.css';

export default class App extends Component {
  /*:: state: Object;*/
  static childContextTypes = {
    dispatch: T.func.isRequired,
    state: T.object.isRequired,
  };

  constructor() {
    super();
    // Set the initial App state
    this.state = rootReducer({}, init());
  }

  getChildContext()/*: Context*/ {
    return {
      dispatch: this.dispatch,
      state: this.state,
    };
  }

  // Custom
  dispatch/*: function*/ = action => {
    this.setState(rootReducer(this.state, action));
  };

  // Render
  render() {
    console.log('rendering app');
    const {user, socket, navigation} = this.state;
    return (
      <div className={s.app}>
        <Header username={user.name} />
        {createElement(getPageForRoute(navigation.levels))}
        <Footer status={socket.status} url={socket.url} />
        <Socket dispatch={this.dispatch} socket={socket} />
      </div>
    );
  }
}
