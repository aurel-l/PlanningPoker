/* @flow */
import React, {PropTypes as T} from 'react';

export default (
  Composed/*: ReactClass*/,
  selector/*: function*/ = () => ({})
)/*: function*/ => {
  const Wrapper = (directProps, context/*: Context*/)/*: React.Element*/ => {
    const {dispatch, state} = context;
    return (
      <Composed {...directProps} {...{dispatch}} {...selector(state)} />
    );
  };
  Wrapper.contextTypes = {
    dispatch: T.func.isRequired,
    state: T.object.isRequired,
  };
  return Wrapper;
};
