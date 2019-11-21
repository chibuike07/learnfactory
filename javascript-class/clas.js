// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//     <title>Document</title>
//   </head>
//   <body>
//     <input type="text" name="" id="" />
//     <input type="text" name="" id="" />
//     <input type="text" name="" id="" />
//     <input type="text" name="" id="" />
//     <input type="text" name="" id="" />

//     <button onclick="inp()">click</button>
//     <script>
//       function inp() {
//         let clear = document.getElementsByTagName("input");
//         for (i = 0; i < clear.length; i++) {
//         //   console.log(clear[i]);
//           clear[i].value = "";
//         }
//       }

// let n = Number()
let arry = []
let inp4 = document.getElementById("22");
function num(n) {
  if (n) {
    for (i = 1; i <= n; i++) {
      arry.push(i);
      // console.log(i)
    }
  }
  console.log(arry);
}
// num(5)

function array(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === "girl") {
      continue;
    }
    console.log(arr[i]);
  }
}
array(["man", "woman", "sixtus", "girl", "boy"]);

// function arrt(arr) {
  //   console.log(arr.filter(n => n[0].includes("a")));
  //   console.log(arr);
  // }
  // arrt(["arr", "man", "jos", "jame", "adjust"]);
  
  
  
  
  
  
//   let arry = [];
//   function nums(loopNums) {
//     if (loopNums) {
//     for (i = 1; i <= loopNums; i++) {
//       arry.push(i);
//       console.log(i);
//     }
//   }
//   console.log(arry);
// }
// num(10)

// function array(loopArray) {
//   for (i = 0; i < loopArray.length; i++) {
//     if (loopArray[i] === "girl") {
//       continue;
//     }
//     console.log(loopArray[i]);
//   }
// }
// array(["man", "woman", "animal", "girl", "boy"]);
