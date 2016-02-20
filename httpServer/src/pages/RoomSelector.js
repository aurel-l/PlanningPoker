import React, {Component} from 'react';
import {Link} from 'react-router';

import randomId from '../utils/randomId';

import s from './RoomSelector.css';

const generateRandomRoom = () => ({id: randomId()});

export default class RoomSelector extends Component {
  constructor() {
    super();
    this.state = {id: null};
  }

  handleClick = () => {
    this.setState(generateRandomRoom());
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
        <button onClick={this.handleClick}>Create a random room</button>
        {id ? <Link to={`/room/${id}`}>Go to room {id}</Link> : null}
      </form>
    );
  }
}
