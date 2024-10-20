// import testStudCode from "./DCA/testStudCode";

// async function dca(): Promise<void> {
//     let quizId: number = 2667;
//     let target_language: string = "javascript"
//     await testStudCode(quizId, target_language);

// }

// dca();

import runCodeAnalysis from "./codeAnalysisService";
import { setCodeFilePath } from "./utils/setCodeFilePath";
const test= new setCodeFilePath(2668, "javascript");
runCodeAnalysis(test.quizId,test.target_language, test.codeFilePath).then((value)=>console.log("report= ", value)).catch(e=>{console.log(e)});
