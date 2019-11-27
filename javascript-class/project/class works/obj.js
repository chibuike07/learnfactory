let array = [
  {
    name: "chime",
    numb: 2
  },
  {
    name: "emma",
    numb: 5
  },
  {
    name: "chima",
    numb: 1.5
  }
];

const result = array.sort((a, b) => a.numb-b.numb);

console.log(result);

// let n = result.sort(numb => {
//   return numb;
// });
// console.log(n);
