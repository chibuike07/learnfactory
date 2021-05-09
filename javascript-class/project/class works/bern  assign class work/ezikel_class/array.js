users = [
  {
    name: "ekene",
    age: 25,
    sibling: ["mark", "john", "stella"],
    state: "abia"
  },
  {
    name: "mary",
    age: 14,
    sibling: ["ann", "annes", "jenni"],
    state: "imo"
  },
  {
    name: "paul",
    age: 15,
    sibling: ["dani", "obi", "peter"],
    state: "lagos"
  }
];

for (let i = 0; i < users.length; i++) {
  //   console.log(users[i]);
}
users.forEach(user => {
  //   console.log(user);
});

users.filter(user => {
  //   console.log(user.age >= 18);
});
console.log(typeof !!"3");

let obj = users.map(values => {
  if (values.name) {
    values.name = `chime ${values.name}`;
    values.age = values.age * 2;
  }
  return values;
});

// object distructuring
const userObj = {
  name: "chibuike",
  age: 20,
  isMarried: false
};
const object = {
  name: "paul",
  age: 20,
  isMarried: true
};

const { name, age, isMarried } = userObj;
// console.log(isMarried);
//renaming const value
const { name: secName, age: secAge, isMarried: secIsmarried } = object;
console.log(secName, secAge);
//destructuring of array
const valuesArr = ["ada", 23, [1, 2, 3]];
const [ladyName, ladyAge, sibling] = valuesArr;
// console.log(ladyAge);

//using spread in obj

const secUser = {
  name: "winber",
  age: 24
};
const thirdUser = {
  id: 1,
  ...secUser
};
// console.log(secUser);
// console.log(thirdUser);

//default params// assing values to the pararmeter // if passed values in the function it overrides the result
const check = (age = 2, size = 4) => {
  console.log(`${age} ${size}`);
};
check(4);
// arguments key word
const arg = function() {
  let args = Array.from(arguments);
  // console.log(args);
  let ansa = args.reduce((a, b) => a + b, 0);
  console.log(ansa);
};
arg(1, 2, 3, 4);

//for of loop

const removeDuplicateValue = (...array) => {
  return array.filter((value, index, arr) => arr.indexOf(value) === index);
};
console.log(removeDuplicateValue(1, 1, 2, 5, 4, 4, 6));

const returnCharactThatAppealsDMost = str => {
  let result = str.split("").reduce((a, b) => {
    a[b] = a[b] + 1 || 1;
    return a;
  }, {});
  // return result
  let max = Math.max(...Object.values(result));
  let res = Object.keys(result).filter(value => result[value] === max);
  return `${max} ${res}`;
};
console.log(returnCharactThatAppealsDMost("helooll"));

const findMinMaxInArray = (...arr) => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return { min, max };
};
console.log(findMinMaxInArray(1, 2, 3, 4, 5));

const countVowelSound = vowe => {
  let vowel = "aeiouAEIOU";
  let splitVowel = [...vowel];
  let arrStr = [...vowe].filter(v => {
    return splitVowel.includes(v);
  });
  let len = arrStr.length;
  return { arrStr, len };
};
console.log(countVowelSound("chibuike"));

let names = ["chi", "me", "color"].filter(v => v.endsWith("r"));
let namess = ["chi", "me", "color"].filter(v => v.startsWith("c"));
for (let i = 0; i < names.length; i++) {
  console.log(names[i].startsWith("c"));
}
console.log(names);
console.log(namess);
// chibuike read up this
// constructor proptotypal inheritance, es6 classes

const secondNum = nums => {
  let result = nums.filter((a, b, c) => c.indexOf(a) === b);
  let ansa = result.sort((a, b) => b - a);
  console.log(ansa[1]);
};
secondNum([1, 2, 3, 4, 5, 6, 6, 5, 5, 5, , 99, 99, 99, 100]);

const chuck = (arr, target) => {
  let arrs = [];
  for (let i = 0; i < arr.length; i++) {
    if (i + 1) {
      let res = arr.splice(i--, target);
      arrs.push(res);
    }
  }
  console.log(arrs);
};
chuck([1, 2, 3, 4, 5], 1);
