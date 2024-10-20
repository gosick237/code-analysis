import { TestCodeExecutionResult } from "../common/typesInDCA";
import execShell from "../common/execShell";
import * as CONSTS from "../common/constantsInDCA";

export default async function measurePerformance(
  quizId: number,
  target_language: string,
  codeFilePath: string
): Promise<TestCodeExecutionResult> {
  let fs = require("fs");
  const files = fs.readdirSync(codeFilePath, (err: Error, files: string[]) => {
    if (err) {
      console.log("Wrong quiz ID");
    } else {
      console.log(files);
      return files;
    }
  });
  const n = files.length - 2;
  let target_file: string = "";
  let test_studcode_command: string = "";
  let studCodeExecutionResult: TestCodeExecutionResult = {
    output: [],
    executionTime: [],
    memoryUsage: [],
  };
  for (let ii = 0; ii < n - 1; ii++) {
    let target_testCase = quizId + "_testcase" + String(ii + 1) + ".txt";
    let input = fs
      .readFileSync(codeFilePath + "/" + target_testCase)
      .toString()
      .split("\n")
      .join(" ");

    if (target_language == "javascript") {
      target_file = `${quizId}.${CONSTS.PROGRAMMING_LANGUAGE_FILE_EXTENTION.JAVASCRIPT}`;
      test_studcode_command = `${CONSTS.PROGRAMMING_LANGUAGE_RUN_COMMAND.JAVASCRIPT} ${codeFilePath}/${target_file} ${input}`; // working directory에 따라서 상대 경로 달라짐
    } else {
      target_file = `${quizId}.${CONSTS.PROGRAMMING_LANGUAGE_FILE_EXTENTION.OTHER_LANGUAGE}`;
      test_studcode_command = `${CONSTS.PROGRAMMING_LANGUAGE_RUN_COMMAND.OTHER_LANGUAGE} ${codeFilePath}/${target_file}`;
    }
    let start: number = new Date().getTime(); // ExecutionTime 측정 시작
    studCodeExecutionResult.output.push(await execShell(test_studcode_command, "test student's code"));
    //console.log(studCodeExecutionResult.output[ii]);
    let end: number = new Date().getTime(); // ExecutionTime 측정 종료

    studCodeExecutionResult.executionTime!.push((end - start).toString());
    studCodeExecutionResult.memoryUsage!.push("12.45");
  }
  return studCodeExecutionResult;
}
