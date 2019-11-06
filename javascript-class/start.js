// var name = "10";
// console.log(name);
// var pencil = "black";
// function changeColor() {
//   pencil = "red";
//   var actor = "will smith";
//   console.log(pencil);
// }
// changeColor();
// console.log(pencil);
// // console.log(actor)

// let num = "";
// let age = 16;
// if (age > 18) {
//   console.log("u re eligible to vote");
// } else {
//   console.log("u will stay at home");
// }
// if (age > 12) {
//   console.log("watch a movie");
// } else {
//   console.log("stay");
// }

// let ages = 10;
// while (ages > 0) {
//   console.log(ages);
//   ages--;
// }

let names = "samson";
console.log((names[2] = "p"));

let array = [1, 2, 3, 4];
let arr = (array[2] = 7);
console.log(arr);
console.log(array);

let object = {
  name: "chima",
  color: "yellow",
  age: 23,
  school: "model school",
  address: "no 20 williams"
};
console.log(object["name"]);

array.push("more");
array.push({});
array.unshift([]);
// delete array[2]
console.log(array);
object.col = "bollus";
// delete object.name
console.log(object);

function add(num1, num2) {
  let some = num1 + num2;
  return some;
}

let mySum = add(7, 4);
console.log(add(3, 4));
console.log(mySum);

myObject = {
  name: "chima",
  level: "300 level",
  score: [20, 23, 45, 67],
  sum: function() {
    let count = 0;
    for (i = 0; i < myObject.score.length; i++) {
      count += myObject.score[i];
    }
    return (count);
  }
};
console.log(myObject.sum());
