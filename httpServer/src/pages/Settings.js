import React, {Component, PropTypes as T} from 'react';

import {updateSocketConnectionUrl} from '../actions';

import s from './Settings.css';

export default class Settings extends Component {
  static propTypes = {
    dispatch: T.func,
    socket: T.shape({
      url: T.string.isRequired,
    }),
  }

  handleChange = ({target: {value}}) => {
    this.props.dispatch(updateSocketConnectionUrl(value));
  }

  render() {
    const {socket} = this.props;
    return (
      <form className={s.form}>
        <label>
          Socket URL:&nbsp;
          <input
            value={socket.url}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
