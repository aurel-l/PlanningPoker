export default (store, onChange, select = s => s) => {
  let currentState;

  const handleChange = () => {
    const nextState = select(store.getState());
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  };

  const unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
};
