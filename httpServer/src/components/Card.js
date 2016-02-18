import React from 'react';

import s from './Card.css';

export default ({children}) => (
  <div>
    <div className={s.cardInner}>
      {children || 'Empty card'}
    </div>
  </div>
);
