/*
时间复杂度：
空间复杂度：

*/

function less(a, b) {
  return a < b;
}

function swap(a, i, j) {
  const tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
}

function insertSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (less(arr[j], arr[j - 1])) {
        swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
}

var arr = [6, 5, 4, 3, 2, 1];
insertSort(arr);

console.log(arr);
