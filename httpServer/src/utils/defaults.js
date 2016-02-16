import localStorageManager from './localStorageManager';
import randomId from './randomId';

const defaultGetter = (key, def) => {
  const cached = localStorage.getItem(key);
  if (cached) return cached;
  localStorageManager.enqueue(key, def);
  return def;
};

export const defaultSocket = () => (
  defaultGetter('socketUrl', `ws://${location.hostname}:3000`)
);

export const defaultUsername = () => (
  defaultGetter('username', `Anonymous_${randomId(3)}`)
);

export const defaultUserId = () => defaultGetter('userId', randomId(3));
