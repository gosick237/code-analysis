import * as fs from "fs";
import measurePerformance from "./DCA/measurePerformance/measurePerformance";
import prerequisiteAnalysis from "./SCA/codeAnalysisService/prerequirsiteAnalysis";
import codeQualityAnalysis from "./SCA/codeAnalysisService/codeQualityAnalysis";
import getComplexity from "./utils/getComplexity";
import testcaseAssessment from "./utils/testcaseAssessment";

export default async function runCodeAnalysis(quizId: number, target_language: string, codeFilePath: string) {
  const testCaseAnswerFile = JSON.parse(
    fs.readFileSync(codeFilePath + "/" + quizId + "_testcaseAnswer.json", "utf-8")
  );

  let report = new Map<string, any>();
  report.set("quizId", quizId).set("language", target_language);

  try {
    // STEP1 : DCA - run student code & check output/complexity
    await measurePerformance(quizId, target_language, codeFilePath).then((value) => {
      report.set("codeResult", value);
      report.set("testCasePass", testcaseAssessment(value.output, testCaseAnswerFile.answer));
      const complexity = getComplexity(value);
      report
        .set("timeComplexity", complexity.timeComplexity)
        .set("spaceComplexity", complexity.spaceComplexity);
      //console.log("STEP1 report = ",report);
    });

    // STEP2 : SCA - prerequisite Analysis
    const praResult = prerequisiteAnalysis.notAllowUnUsedKeyword(quizId, codeFilePath);
    report.set("prerequisite", praResult);
    //console.log("STEP2 report = ", report);

    // STEP3 : SCA - CodeQuality Analysis
    await codeQualityAnalysis.execAnalysisJavascript(quizId, codeFilePath).then((value) => {
      report.set("codeQuality: ", value);
      //console.log("STEP3 report= ", report);
    });
    return report;
  } catch (e) {
    return "Error: " + e;
  }
}
