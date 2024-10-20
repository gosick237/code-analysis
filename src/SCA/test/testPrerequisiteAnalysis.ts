import prerequisiteAnalysis from "../codeAnalysisService/prerequirsiteAnalysis";
const codeFile = process.cwd() + "/target_code/javascript/2668";

const praResult = prerequisiteAnalysis.notAllowUnUsedKeyword(2668, codeFile);
console.log("praResult:", praResult);
