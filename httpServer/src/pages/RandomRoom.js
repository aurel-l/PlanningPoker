import React from 'react';

import Link from '../router/Link';

import randomId from '../utils/randomId';

const RANDOM_ID_LENGTH = 6;

export default () => (
  <section>
    <Link to={`/room/${randomId(RANDOM_ID_LENGTH)}`}/>
  </section>
);
