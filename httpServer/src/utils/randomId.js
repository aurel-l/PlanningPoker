/* @flow */
const HEX = 16;
// Length to remove at the beginning
const SLICED = 2;

export default (length/*: ?number*/)/*: string*/ => {
  const randomHexStr = Math.random().toString(HEX).slice(SLICED).toUpperCase();
  if (length) return randomHexStr.slice(-length);
  return randomHexStr;
};
