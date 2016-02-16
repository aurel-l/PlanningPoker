const queue = new window.Map();

const rIC = window.requestIdleCallback ?
  window.requestIdleCallback :
  (cb) => setTimeout(cb, 1);

const dequeue = () => {
  for (const [key, value] of queue) {
    localStorage.setItem(key, value);
  }
};

export default {
  enqueue(key, value) {
    // If the queue is empty
    if (queue.size) {
      // Ask the dequeuer to start whenever it can because we're about to...
      rIC(dequeue);
    }
    // Add a value to the queue
    queue.set(key, value);
  },
};
