import { Linter } from "eslint";
import * as fs from "fs";

export default class prerequisiteAnalysis {
  private ruleDir = process.cwd() + "/src/SCA/waplEslint/";
  private prefixRuleName = "rules/no-unused-";

  /**
   * Running Linter()
   * @param quizId
   * @param codeFilePath: quiz repository
   */
  static notAllowUnUsedKeyword(quizId: number, codeFilePath: string) {
    // Set Linter() with all rules
    const customLinter = new Linter();
    const customRules = require(codeFilePath + "/prerequisites");
    customLinter.defineRules(customRules.rules);

    // Set 1.Code & 2.Configuration (with active Rule)
    const activeRules = { "no-unused-fill": 2, "no-unused-shift": 2, "no-unused-class": 2 };
    let config = require("../eslintConfigs/typescriptConfig");
    config.rules = activeRules;
    const code = fs.readFileSync(codeFilePath + "/" + quizId + ".js").toString();

    // Run & result (violated rules)
    const results = customLinter.verify(code, config);
    let violatedRules = new Array();
    results.forEach((val) => violatedRules.push(val.ruleId));

    // Assessment: whether prerequisites are satisfied or not.
    let prerequisiteResult = new Array();
    Object.keys(activeRules).forEach((value) => {
      if (violatedRules.includes(value.toString())) {
        prerequisiteResult.push("X");
      } else {
        prerequisiteResult.push("O");
      }
    });

    return prerequisiteResult;
  }

  /**
   * Rule Generator with keyword that must be included.
   * @param keyword: 'no-unused-{keyword}' in custom rule.
   */
  public ruleGeneratorByKeyword(keyword: String) {
    const code = fs.readFileSync(this.ruleDir + "skeletons/no-unused-keyword.js").toString();
    const newCode = code.replace("KEYWORD", keyword.valueOf());

    fs.writeFile(this.ruleDir + this.prefixRuleName + keyword.valueOf() + ".js", newCode, function (error) {
      console.log("rules/no-unused-" + keyword.valueOf() + ".js is created.");
    });
  }
}
