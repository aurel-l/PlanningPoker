/* @flow */
import React, {Component, PropTypes as T} from 'react';
import {connect} from 'react-redux';

import {updateUsername} from '../actions/creators';

import s from './User.css';

class User extends Component {
  static propTypes = {
    dispatch: T.func,
    name: T.string.isRequired,
    id: T.string.isRequired,
  };

  handleChange/*: function*/ = ({target: {value}}) => {
    this.props.dispatch(updateUsername(value));
  };

  render() {
    const {name, id} = this.props;
    return (
      <main className={s.form}>
        <label>
          User:&nbsp;
          <input value={name} onChange={this.handleChange} />
        </label>
        <label>
          ID:&nbsp;
          <input disabled value={id} />
        </label>
      </main>
    );
  }
}

const selector = ({user: {name, id}}) => ({name, id});

export default connect(selector)(User);
