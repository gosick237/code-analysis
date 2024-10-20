import { exit } from "process";
import measurePerformance from "./measurePerformance/measurePerformance";

import { TestCodeExecutionResult } from "./common/typesInDCA";

async function testStudCode(quizId: number, target_language: string, codeFileath: string) {
    console.log("Test Start!");

    let studCodeExecutionResult: TestCodeExecutionResult = await measurePerformance(quizId, target_language, codeFileath);

    if (studCodeExecutionResult.output[studCodeExecutionResult.output.length - 1] == "Execution Failed") {
        console.log("코드 실행이 실패하여 코드 테스트를 종료합니다.")
        exit;
    }

    console.log("\nRESULT:");
    console.log("--------------------------");
    console.log("< Console Output >");
    console.log(studCodeExecutionResult.output);
    console.log("< Execution Time >");
    console.log(`${studCodeExecutionResult.executionTime}(ms)\n`);
    console.log("< Memory Usage >");
    console.log(`${studCodeExecutionResult.memoryUsage}(MB)\n`);
    console.log("--------------------------");

    console.log("Test Complete!");
}

export default testStudCode;
