/**
 * @param studCodeExecutionResult: output, executionTime, memoryUsage Arrays.
 */
export default function getComplexity(studCodeExecutionResult: any) {
  const results: any = {};

  //console.log("timeComplexity get:", studCodeExecutionResult.executionTime);

  results["timeComplexity"] = Math.max(...studCodeExecutionResult.executionTime);
  results["spaceComplexity"] = Math.max(...studCodeExecutionResult.memoryUsage);

  return results;
}
