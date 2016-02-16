export default new Promise(res => {
  if (document.readyState !== 'loading') {
    res();
  } else {
    const handleReady = function handleReady() {
      document.removeEventListener(handleReady);
      res();
    };
    document.addEventListener('DOMContentLoaded', handleReady);
  }
});
