export default new Promise(res => {
  if (document.readyState !== 'loading') {
    res();
  } else {
    document.addEventListener('DOMContentLoaded', function handleReady() {
      document.removeEventListener(handleReady);
      res();
    });
  }
});
