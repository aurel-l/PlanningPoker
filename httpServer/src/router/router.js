/* @flow */
import rootHandler, {ROOT} from './handlers/root';

const getPageForRoute = function getPageForRoute(
  handler/*: function*/,
  current/*: string*/,
  next/*: string*/,
  ...other/*: Array<string>*/
)/*: Object*/ {
  // If no deeper level, we will return the current handler's page
  if (!next) return handler.page;
  // Otherwise, try to match one of its children
  const nextHandler = handler.children.find(child => child.test(next));
  if (!nextHandler) throw new Error('404');
  return getPageForRoute(nextHandler, next, ...other);
};

export default (levels/*: Array<string>*/)/*: Object*/ => (
  getPageForRoute(rootHandler, ROOT, ...levels)
);
