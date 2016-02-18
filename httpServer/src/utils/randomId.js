export default (length = 0) => Math.random().toString(16)
  .slice(2).slice(-length).toUpperCase();
