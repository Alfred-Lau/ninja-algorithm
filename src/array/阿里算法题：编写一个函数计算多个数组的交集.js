/*

万能的reduce

```js
const getIntersection = (...arrs) => {
    return Array.from(new Set(arrs.reduce((total, arr) => {
        return arr.filter(item => total.includes(item));
    })));
}

```


*/

function intersection(...args) {
  if (args.length === 0) {
    return [];
  }
  if (args.length === 1) {
    return args[0];
  }

  // 主要流程
  return [
    ...new Set(
      args.reduce((previous, current) =>
        previous.filter((item) => current.includes(item))
      )
    ),
  ];
}

const result = intersection([1, 2, 3, 4, 5], [3, 4, 5], [4, 5]);
console.log('result', result);
