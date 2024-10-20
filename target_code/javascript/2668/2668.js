let input = process.argv.slice(2);

const N = Number(input[0]);
input.shift();
input = input.map((element) => {
  return element
    .trim()
    .split("")
    .map((element) => Number(element));
});
const visited = [];
for (let i = 0; i < N; i++) {
  visited.push(new Array(N).fill(0));
}
const a = 017;
const b = true;
if (b === true) {
  // console.log(b);
}
// x : 행 / y: 열
const moveRow = [0, 0, 1, -1]; // 동, 서, 남, 북
const moveCol = [1, -1, 0, 0]; // 동, 서, 남, 북

// 범위 체크
const rangeCheck = (row, col) => {
  if (row >= 0 && row < N && col >= 0 && col < N) {
    return true;
  }
  return false;
};

// BFS
const BFS = (row, col) => {
  const queue = [];
  queue.push([row, col]);
  while (queue.length) {
    const target = queue.shift();
    row = target[0];
    col = target[1];
    if (visited[row][col] === 0) {
      // 방문처리
      visited[row][col] = 1;
      number++;
      for (let n = 0; n < moveRow.length; n++) {
        if (
          rangeCheck(row + moveRow[n], col + moveCol[n]) &&
          input[row + moveRow[n]][col + moveCol[n]] === 1
        ) {
          queue.push([row + moveRow[n], col + moveCol[n]]);
        }
      }
    }
  }
};

const complex = [];
let number = 0;

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (Number(input[row][col]) === 1 && visited[row][col] === 0) {
      BFS(row, col);
      complex.push(number);
      number = 0;
    }
  }
}
complex.sort((a, b) => a - b); // 오름차순으로 정렬!
const answer = [complex.length, ...complex];

console.log(answer.join("\n"));