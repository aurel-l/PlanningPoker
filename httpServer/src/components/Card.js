import React, {PropTypes as T} from 'react';

import s from './Card.css';

const Footer = ({children}) => (
  <div>
    <div className={s.cardInner}>
      {children || 'Empty card'}
    </div>
  </div>
);
Footer.propTypes = {
  children: T.node,
};

export default Footer;
