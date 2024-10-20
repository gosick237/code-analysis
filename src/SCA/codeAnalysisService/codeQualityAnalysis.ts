import { ESLint } from "eslint";

export class codeQualityAnalysis {
  static async execAnalysisJavascript(quizId: number, codeFilePath: string, rules?: Object) {
    const config = require("../eslintConfigs/typescriptConfig");
    config["rules"] = {
      ...rules,
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": 2,
      "@typescript-eslint/no-var-requires": 1,
    };

    let lintOptions = {
      useEslintrc: false,
      rulePaths: [process.cwd() + "/src/SCA/waplEslint/rules"],
      overrideConfig: config,
    }; // rules are not applied... //plug-in and rule in config might be required.

    const eslint = new ESLint(lintOptions);
    // file will be linted.
    try {
      const eslintResult = await eslint.lintFiles([codeFilePath + "/" + quizId + ".js"]);
      let resultMessages = new Array();
      eslintResult[0].messages.forEach((value) => {
        resultMessages.push(value.message);
      });
      return resultMessages;
    } catch (error) {
      return error;
    }

    // print formatted eslintResult
    //const formatter = await eslint.loadFormatter("stylish");
    //console.log("<ESLint Result>", formatter.format(eslintResult));

    // print raw result
    //console.log("<raw result>", eslintResult[0].messages);

    //return eslintResult[0].messages;
  }
}

export default codeQualityAnalysis;
