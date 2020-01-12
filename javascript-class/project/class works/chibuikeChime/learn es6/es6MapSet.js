let arr = [1, 2, 2, 3, 4, 4];
let sets = new Set(arr);
console.log(sets);
let map = new Map();
map.set("me", "valu");
map.set(2, "caloon");
let b = map.keys();
console.log(b);

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O"
];
function unique(arr) {
  let set = new Set(arr);
  console.log(set);
  /* your code */
}

unique(values); // Hare, Krishna, :-O
// console.log(res)

function anagram(arr) {
  let map = new Map();
  for (let va of arr) {
    let sorted = va
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    map.set(sorted, va);
    console.log(va);
  }
  let res = Array.from(map.values());
  console.log(res);
}
anagram(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]);
