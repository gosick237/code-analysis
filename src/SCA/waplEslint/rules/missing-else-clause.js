// custom rule by lhj - "if ... else if" constructs should end with "else" clauses
"use strict";

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "require `else` clause in `if else-if` clauses",
      recommended: false,
    },
    schema: [
      {
        type: "object",
        properties: {
          commentPattern: {
            type: "string",
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      missingElseClause: "Expected a else clause.",
    },
  },
  create(context) {
    function getLeastChild(node) {
      let leastChild = node;
      while (leastChild.alternate) {
        leastChild = leastChild.alternate;
      }
      return leastChild;
    }
    let cnt = 0;
    return {
      IfStatement(node) {
        const leastChild = getLeastChild(node);
        if (leastChild === node) {
          return;
        }
        if (cnt < 1) {
          const hasElse = leastChild.alternate === null;
          if (hasElse) {
            context.report({ node, messageId: "missingElseClause" });
          }
          cnt++;
        }
      },
    };
  },
};
