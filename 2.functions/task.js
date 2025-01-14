function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = (function () {
    let sum = arr.reduce((a, b) => a + b, 0);
    let result = Number((sum / arr.length).toFixed(2));
    return result;
  })();
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  let sum = arr.reduce((a, b) => a + b, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };

  let sumEvenElement = 0;
  let scountEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      scountEvenElement++;
    }
  }
  return sumEvenElement / scountEvenElement;
}


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let maxResult = func(...arrOfArr[i]);
    if (maxResult > maxWorkerResult) {
      maxWorkerResult = maxResult;
    }
  }
  return maxWorkerResult;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, averageEvenElementsWorker))