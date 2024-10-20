module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    project: ["./tsconfig.json"], // Specify it only for TypeScript files
  },
};
