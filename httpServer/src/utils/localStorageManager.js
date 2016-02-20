/* @flow */
const queue = new window.Map();

const fallbackTimeoutLength = 1;

const rIC = window.requestIdleCallback ?
  window.requestIdleCallback :
  (cb) => setTimeout(cb, fallbackTimeoutLength);

const dequeue = () => {
  for (const [key, value] of queue) {
    localStorage.setItem(key, value);
  }
};

export default {
  enqueue(key/*: string*/, value/*: string*/) {
    // If the queue is empty
    if (queue.size) {
      // Ask the dequeuer to start whenever it can because we're about to...
      rIC(dequeue);
    }
    // Add a value to the queue
    queue.set(key, value);
  },
};
