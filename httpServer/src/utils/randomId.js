/* @flow */
// Radix to transform float to string
const RADIX = 36;
// Length to remove at the beginning
const SKIP = 2;
// Default length for ID
const DEFAULT = 12;

export default (length/*: number*/ = DEFAULT)/*: string*/ => (
  Math.random().toString(RADIX).toUpperCase().substr(SKIP, length)
);
