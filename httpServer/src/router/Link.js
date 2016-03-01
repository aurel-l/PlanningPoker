/* @flow */
import React, {Component, PropTypes as T} from 'react';

import {connect} from 'react-redux';
import {navigate} from '../actions/creators';

class Link extends Component {
  static propTypes = {
    dispatch: T.func.isRequired,
    children: T.node,
    external: T.bool,
    to: T.string.isRequired,
  };

  handleClick = e => {
    const {dispatch, to, external} = this.props;
    if (external) return;
    e.preventDefault();
    dispatch(navigate(to));
  };

  render() {
    const {to, children, className, style} = this.props;
    return (
      <a href={`#${to}`} onClick={this.handleClick} className={className} style={style}>
        {children}
      </a>
    );
  }
}

export default connect()(Link);
