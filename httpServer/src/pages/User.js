import React, {Component, PropTypes as T} from 'react';

import {updateUsername} from '../actions';

import s from './User.css';

export default class User extends Component {
  static propTypes = {
    dispatch: T.func,
    user: T.shape({
      name: T.string.isRequired,
      id: T.string.isRequired,
    }),
  }

  handleChange = ({target: {value}}) => {
    this.props.dispatch(updateUsername(value));
  }

  render() {
    const {user} = this.props;
    return (
      <form className={s.form}>
        <label>
          User:&nbsp;
          <input value={user.name} onChange={this.handleChange} />
        </label>
        <label>
          ID:&nbsp;
          <input disabled value={user.id} />
        </label>
      </form>
    );
  }
}
