function arr(...array) {
  let res = array.filter((a, b, c) => c.indexOf(a) !== b).sort();
  // console.log(res.length);
  if (res.length % 2 == 0) {
    // console.log("the length of dupliate element is an odd number");
    return false;
  }
  // console.log("the length of duplicate number is even");
}
arr(1, 2, 3, 2, 1, 4, 4);
let counta = {};
function sorta(...array) {
  let sortedArr = array.sort((a, b) => a - b);
  sortedArr.forEach(value => {
    counta[value] = (counta[value] || 0) + 1;
  });
  // console.log(counta);
  let arrOfObj = Array.of(counta);
  console.log(arrOfObj);
  let result = arrOfObj
    .map(object => Object.keys(object).find(value => object[value] % 2 !== 0))
    .join("");
  return result;
}

// console.log(sorta(7, 7, 7, 1, 1, 7, 1, 3, 3, 7, 7, 3, 3, 3));

function pairs(n, ar) {
  let arr = ar.sort();
  let arrPairs = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] === arr[i + 1]) {
      arrPairs.push(arr[i]);
      arr.splice(i, 1);
      n--;
    }
  }
  return arrPairs.length;
  // return arr.length;
}

let a = pairs(14, [8, 2, 3, 5, 4, 5, 4, 3, 1, 1, 1, 1, 1, 1, 4]);
function hash(...arr) {
  let withHash, NotWithHash;
  for (i = 0; i < arr.length; i++) {
    arr[i] = "#";
    withHash = arr.filter(n => n == "#");
    NotWithHash = arr.filter(n => n !== "#").fill("-");
    // console.log(withHash.concat(NotWithHash).join(" "));
  }
}
hash(1, 2, 3, 4, 5, 6);

function romanFigure(matches, ...array) {
  let str = "i,ii,iii,iv,v,vi,vii,viii,ix,x";
  let strArr = str.split(",");
  for (let i in strArr) {
    if (matches == array[i]) {
      // console.log(strArr[i]);
    }
  }
}
romanFigure(3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

let sum = 0;
function sumTo(num) {
  for (let i = 1; i <= num; num--) {
    sum += num;
  }
  console.log(sum);
}
sumTo(4);
function factorial(n){
  return (n != 1) ? n * factorial(n - 1): 1
}
console.log(factorial(5))


  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }

  alert(fib(3)); // 2
  alert(fib(7)); // 13
  // fib(77); // will be extremely slow!
