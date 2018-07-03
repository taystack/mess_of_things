

class QuerySelectorInvalidType extends Error {}
class QuerySelectorMalformedSelector extends Error {}

// Selects ID, class, and any child
const makeQuerySelector = () => {
  if (document.querySelector) {
    document.querySelector = (selector = null) => {
      if (typeof selector !== "string") throw new QuerySelectorInvalidType();
      if (!selector.length) throw new QuerySelectorMalformedSelector();
      const DOM_TYPES = ["#", "."];
      const ATTR_MAP = {
        "#": "id",
        ".": "class",
      };

      function getPath(selector) {
        const split = selector.split(/( |>)/g);
        const ret = [];
        split.forEach((token) => {
          const trim = token.trim();
          if (trim.length) ret.push(trim);
        });
        return ret;
      }

      function checkPathToken(token) {
        const type = DOM_TYPES.indexOf(token[0]);
        if (type < 0) throw new QuerySelectorMalformedSelector("");
      }

      function matchesSelector(el, node) {
        if (node === null) return null;
        const attr = ATTR_MAP[el[0]];
        const val = node.getAttribute(attr);
        if (val === null) return false;
        return val.match(new RegExp(el.substring(1)));
      }

      function qs(selector) {
        const path = getPath(selector);
        const treewalker = document.createTreeWalker(
          document,
          NodeFilter.SHOW_ELEMENT,
        );
        path.forEach(token => checkPathToken);
        let found = false;
        let current;
        let currentToken = path.shift();
        while (!found || found === null) {
          const node = treewalker.nextNode();
          found = matchesSelector(currentToken, node);
          if (found) {
            current = node;
            if (path.length === 0) {
              found = current;
              break;
            } else {
              currentToken = path.shift();
              found = false;
            }
          }
        }
        return found;
      }
      return qs(selector);
    };
  }
};

export default makeQuerySelector;
