// ? Task:
// Реализуй функцию getArraysSum, которая принимает два массива чисел одинаковой длины, и возвращает сумму всех элементов этих массивов.

// Пример:

// getArraysSum([1, 2], [3, 4]) === 10  // 1 + 2 + 3 + 4 = 10
// getArraysSum([], []) === 0

// Solution 1

function getArraysSum(arr1, arr2) {
  let sumArrs = 0;

  function sum(arr) {
    if (arr) {
      const sumElArr = arr.reduce((acc, item) => acc + item, 0);

      return sumElArr;
    } else {
      return 0;
    }
  }
  sumArrs = sum(arr1) + sum(arr2);

  return sumArrs;
}

console.log(getArraysSum([1, 2], [3, 4]));
console.log(getArraysSum(getArraysSum([], [])));
