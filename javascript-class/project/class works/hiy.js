// function arr(...array) {
//   let res = array.filter((a, b, c) => c.indexOf(a) !== b).sort();
//   // console.log(res.length);
//   if (res.length % 2 == 0) {
//     // console.log("the length of dupliate element is an odd number");
//     return false;
//   }
//   // console.log("the length of duplicate number is even");
// }
// arr(1, 2, 3, 2, 1, 4, 4);
// let counta = {};
// function sorta(...array) {
//   let sortedArr = array.sort((a, b) => a - b);
//   sortedArr.forEach(value => {
//     counta[value] = (counta[value] || 0) + 1;
//   });
//   // console.log(counta);
//   let arrOfObj = Array.of(counta);
//   console.log(arrOfObj);
//   let result = arrOfObj
//     .map(object => Object.keys(object).find(value => object[value] % 2 !== 0))
//     .join("");
//   return result;
// }

// // console.log(sorta(7, 7, 7, 1, 1, 7, 1, 3, 3, 7, 7, 3, 3, 3));

// function pairs(n, ar) {
//   let arr = ar.sort();
//   let arrPairs = [];
//   for (let i = 0; i < n; i++) {
//     if (arr[i] === arr[i + 1]) {
//       arrPairs.push(arr[i]);
//       arr.splice(i, 1);
//       n--;
//     }
//   }
//   return arrPairs.length;
//   // return arr.length;
// }

// let a = pairs(14, [8, 2, 3, 5, 4, 5, 4, 3, 1, 1, 1, 1, 1, 1, 4]);

// function hash(...arr) {
//   let withHash, NotWithHash;
//   for (i = 0; i < arr.length; i++) {
//     arr[i] = "#";
//     withHash = arr.filter(n => n == "#");
//     NotWithHash = arr.filter(n => n !== "#").fill("-");
//     // console.log(withHash.concat(NotWithHash).join(" "));
//   }
// }
// hash(1, 2, 3, 4, 5, 6);

// function num(name) {
//   let arr = [];
//   for (let i = 1; i <= name; i++) {
//     arr.push(i);
//   }
//   // console.log(arr);
//   for (i = 0; i < arr.length; i++) {
//     arr[i] = "#";
//     withHash = arr.filter(n => n == "#");
//     NotWithHash = arr.filter(n => n !== "#");
//     // console.log(withHash.join(""));
//   }
// }
// num(5);
// // chyke 08138242433
// function romanFigure(matches, ...array) {
//   let str = "i,ii,iii,iv,v,vi,vii,viii,ix,x";
//   let strArr = str.split(",");
//   for (let i in strArr) {
//     if (matches == array[i]) {
//       // console.log(strArr[i]);
//     }
//   }
// }
// romanFigure(3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// let sum = 0;
// function sumTo(num) {
//   for (let i = 1; i <= num; num--) {
//     // sum += i;
//   }
//   // console.log(sum);
// }
// sumTo(4);
// function factorial(n){
//   return (n != 1) ? n * factorial(n - 1): 1
// }
// console.log(factorial(5))

//   function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//   }

//   alert(fib(3)); // 2
//   alert(fib(7)); // 13
// fib(77); // will be extremely slow!

function primeNum(...arr) {
  let res = arr.filter(n => {
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) return false;
    }
    return true;
  });
  return res;
}
primeNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function matrix(m, n) {
//   var result = [];
//   for (var i = 0; i < n; i++) {
//     result.push(new Array(m).fill(1));
//   }
//   return result;
// }
// // console.log(matrix(3, 3));

function matrixNum(a) {
  let x1 = 0;
  let x2 = 0;
  let aLen = a.length;
  a.map((n, i) => {
    x1 += a[i][i];
    x2 += a.reverse()[i][i];
  });
  let res = Math.abs(x1 - x2);
  // console.log(res);
}
matrixNum([
  [2, 3, 1, 5],
  [3, 4, 7, 1],
  [7, 2, 8, 2],
  [4, 6, 7, 3]
]);

function steps(str) {
  count = 0;
  lens = str.length;
  let arr = [];
  let c = 0;
  let s;
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i], lens);
    if (str[i].indexOf("U") !== -1) {
      arr.push(1);
    } else {
      arr.push(-1);
    }
  }
  // console.log(arr);
  if (arr) {
    for (let a in arr) {
      if (count[0] == count[0] + 1) {
        count += arr[a][a];
      }
        // count = count;
    }
  }
  // console.log(count);
  if (count >= 1) {
    // console.log("down the valley " + count);
    
  } else if (count < 1) {
    count++;
    // console.log("up the mountain " + count);
  } else if (count == -1) {
    count++;
  }
}
steps("UUDDUDUU");
steps("DDDUUDUU");
steps("DDUDUDUUUUDD");
steps("DDUUUUDD");
steps("DDUUDDUDUUUD");

function fillElementIntoArray(num, filledValue) {
  let a = [1, 2, 3, 4, 5, 6];
  let b = a.fill(filledValue, num);
  console.log(b);
}
fillElementIntoArray(3, "pass");

function fillArray(n, val) {
  let r = Array.apply(null, Array(n)).map(Number.prototype.valueOf, val);
  // console.log(r);
}
fillArray(6, 5);

function fillTextValue(n, val) {
  let r = Array.apply(null, Array(n)).map(String.prototype.valueOf, val);
  console.log(r);
}
// fillTextValue(4, "chi");

function fillWithGeneratedInteger(start, end) {
  var arr = new Array(end);
  for (i = 0; i < end; i++, start++) {
    arr[i] = start;
  }
  console.log(arr);
}
fillWithGeneratedInteger(3, 7);
fillWithGeneratedInteger(-6, 4);
fillWithGeneratedInteger(-4, 7);

var str = "chibuike";
var shuffle = str.split("").sort(function() {
    return 0.5 - Math.random()
  })
  .join("");
console.log(shuffle)
