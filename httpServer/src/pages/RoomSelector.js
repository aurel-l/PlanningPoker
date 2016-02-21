/* @flow */
import React, {Component} from 'react';
import Link from '../router/Link';

import randomId from '../utils/randomId';

import s from './RoomSelector.css';

const generateRandomRoom = () => ({id: randomId()});

class RoomSelector extends Component {
  /*:: state: Object;*/
  constructor() {
    super();
    this.state = {id: null};
  }

  handleClick/*: function*/ = () => {
    this.setState(generateRandomRoom());
  };

  handleChange/*: function*/ = ({target: {value}}) => {
    this.setState({id: value});
  };

  render() {
    const {id} = this.state;
    return (
      <form className={s.form}>
        <label>
          Room name:&nbsp;
          <input
            value={id || ''}
            onChange={this.handleChange}
          />
        </label>
        <button onClick={this.handleClick}>Create a random room</button>
        {id ? <Link to={`/room/${id}`}>Go to room {id}</Link> : null}
      </form>
    );
  }
}

export default RoomSelector;
