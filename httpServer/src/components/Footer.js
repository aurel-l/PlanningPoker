/* @flow */
import React, {PropTypes as T} from 'react';

import s from './Footer.css';

const colorLookup = {
  connected: 'green',
  connecting: 'orange',
  disconnected: 'red',
};

const Footer = ({status, url}/*: {status: string, url: string}*/) => (
  <footer
    style={{background: colorLookup[status] || 'grey'}}
    className={s.footer}
  >
    <p>{status} to {url}</p>
  </footer>
);
Footer.propTypes = {
  status: T.string.isRequired,
  url: T.string.isRequired,
};

export default Footer;
