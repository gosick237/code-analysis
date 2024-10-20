const target = "class";

module.exports = {
  meta: {
    type: "problem", // null or `problem`, `suggestion`, or `layout`
    docs: {
      description: "custom rule",
      recommended: false,
    },
    fixable: null,
  },

  create(context) {
    const sourceCode = context.getSourceCode();

    function unUsedRender() {
      for (let token of sourceCode.ast.tokens) {
        if (token.value === target) {
          return false;
        }
      }
      return true;
    }

    return {
      Program(node) {
        if (unUsedRender()) {
          context.report({
            node,
            message: target + " must be included",
          });
        }
      },
    };
  },
};
