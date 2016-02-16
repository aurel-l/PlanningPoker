import React, {Component} from 'react';
import {Link} from 'react-router';

import randomId from '../utils/randomId';

import s from './RoomSelector.css';

export default class RoomSelector extends Component {
  constructor() {
    super();
    this.state = {id: null};
  }

  generateRandomRoom = () => {
    this.setState({id: randomId()});
  }

  handleChange = ({target: {value}}) => {
    this.setState({id: value});
  }

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
        <button onClick={this.generateRandomRoom}>Create a random room</button>
        {id ? <Link to={`/room/${id}`}>Go to room {id}</Link> : null}
      </form>
    );
  }
}
