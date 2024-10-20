import codeQualityAnalysis from "../codeAnalysisService/codeQualityAnalysis";

const codeFilePath = process.cwd() + "/target_code/javascript/2668";

console.log("-----cleanCode Test-----");
//let cleanCodeResult = new Array();
codeQualityAnalysis
  .execAnalysisJavascript(2668, codeFilePath)
  .then((value) => {
    //cleanCodeResult.push(value);
    //console.log("raw value: ",cleanCodeResult[0]);
    //codeQualityAnalysis = JSON.parse(cleanCodeResult[0].toString);
    //console.log("codeQualityAnalysis: ",codeQualityAnalysis);
    console.log("codeQualityAnalysis: ", value);
  })
  .catch((e) => {
    process.exitCode = 1;
    console.error(e);
  });
