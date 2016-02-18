import React, {Component, PropTypes as T} from 'react';

import {enterRoom} from '../actions/creators';

import s from './Room.css';

export default class Room extends Component {
  static propTypes = {
    dispatch: T.func,
    params: T.shape({
      roomId: T.string.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    this.props.dispatch(enterRoom(this.props.params.roomId));
  }

  render() {
    const {roomId: id} = this.props.params;
    return (
      <section className={s.room}>
        Room {id}
      </section>
    );
  }
}
