/* no flow at the moment (problem with compouted property) */
const p = Symbol('Private');

class TemplateHandler {
  /*:: [p]: Symbol;*/
  constructor(
    page/*: Object*/,
    pattern/*: RegExp|string*/ = /.*/,
    ...children/*: Array<function>*/
  ) {
    this[p] = {page, children};
    this.test = pattern.test ?
      ::pattern.test :
      text => pattern === text || pattern.toLowerCase() === text.toLowerCase();
  }

  get children() {
    return this[p].children;
  }

  get page() {
    return this[p].page;
  }
}

export default TemplateHandler;
