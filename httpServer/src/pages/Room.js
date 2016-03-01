/* @flow */
import React, {Component, PropTypes as T} from 'react';
import {connect} from 'react-redux';

import {enterRoom} from '../actions/creators';

import s from './Room.css';

class Room extends Component {
  static propTypes = {
    dispatch: T.func,
    id: T.string.isRequired,
  };

  componentDidMount() {
    console.log('room mounted');
    this.props.dispatch(enterRoom(this.props.params.roomId));
  }

  render() {
    const {id} = this.props;
    return (
      <main className={s.room}>
        Room {id}
      </main>
    );
  }
}

const selector = ({room: {id}}) => ({id});

export default connect(selector)(Room);
