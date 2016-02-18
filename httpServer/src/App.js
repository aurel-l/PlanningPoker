import React, {Component, PropTypes as T, cloneElement} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Socket from './Socket';

import s from './App.css';

import rootReducer from './reducers/root';

export default class App extends Component {
  static propTypes = {
    children: T.node.isRequired,
  }

  constructor() {
    super();
    this.state = rootReducer(undefined, {});
  }

  // Custom
  dispatch = action => {
    this.setState(rootReducer(this.state, action));
  }

  // Render
  render() {
    const {user, room, socket} = this.state;
    return (
      <div className={s.app}>
        <Header username={user.name} />
        <main>
          {cloneElement(
            this.props.children,
            {user, room, socket, dispatch: this.dispatch}
          )}
        </main>
        <Footer status={socket.status} url={socket.url} />
        <Socket dispatch={this.dispatch} socket={socket} />
      </div>
    );
  }
}
