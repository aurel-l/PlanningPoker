/* @flow */
import React, {Component, PropTypes as T} from 'react';

import connect from '../higherOrder/connect';

import {updateSocketConnectionUrl} from '../actions/creators';

import s from './Settings.css';

class Settings extends Component {
  static propTypes = {
    dispatch: T.func,
    url: T.string.isRequired,
  };

  handleChange/*: function*/ = ({target: {value}}) => {
    this.props.dispatch(updateSocketConnectionUrl(value));
  };

  render() {
    const {url} = this.props;
    return (
      <form className={s.form}>
        <label>
          Socket URL:&nbsp;
          <input
            value={url}
            onChange={this.handleChange}
            type="url"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </label>
      </form>
    );
  }
}

const selector = ({socket: {url}}) => ({url});

export default connect(Settings, selector);
