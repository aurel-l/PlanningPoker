/* @flow */
import localStorageManager from './localStorageManager';
import randomId from './randomId';

const smallIDSize = 3;

const defaultGetter = (key, def) => {
  const cached = localStorage.getItem(key);
  if (cached) return cached;
  localStorageManager.enqueue(key, def);
  return def;
};

export const defaultSocket = ()/*: string*/ => (
  defaultGetter('socketUrl', `ws://${location.hostname}:3000`)
);

export const defaultUsername = ()/*: string*/ => (
  defaultGetter('username', `Anonymous_${randomId(smallIDSize)}`)
);

export const defaultUserId = ()/*: string*/ => (
  defaultGetter('userId', randomId())
);

const ROOT_HASH = '/';
const INDEX_START_VARIABLE_HASH = 1;
export const defaultHash = ()/*: string*/ => {
  const hash = window.location.hash
    .split('?')[0].substr(INDEX_START_VARIABLE_HASH);
  if (hash) return hash;
  window.location.hash = ROOT_HASH;
  return ROOT_HASH;
};
