/**
 *
 * @param output: studCodeExecutionResult.output Array
 * @param answer: answer set.
 */
export default function testcaseAssessment(output: Array<any>, answer: Array<any>): Array<any> {
  const assessment = [];
  let l = output.length;

  if (l != answer.length) return ["output length dosen't match answer length"];

  for (let i = 0; i < l; i++) {
    if (output[i] == answer[i]) {
      assessment.push("O");
    } else {
      assessment.push("X");
    }
  }
  return assessment;
}
