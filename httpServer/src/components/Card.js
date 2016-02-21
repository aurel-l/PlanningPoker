/* @flow */
import React, {PropTypes as T} from 'react';

import s from './Card.css';

const Card = ({children}/*: {children: ?Object}*/) => (
  <div>
    <div className={s.cardInner}>
      {children || 'Empty card'}
    </div>
  </div>
);
Card.propTypes = {
  children: T.node,
};

export default Card;
