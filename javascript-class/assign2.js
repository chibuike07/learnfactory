function isStrings(strs) {
  str = "a,b,c,d,e,f,g,h";
  let count = [];
  let cou = 0;
  for (a in strs) {
    if (str.indexOf(strs[a]) !== -1) {
      count.push(strs[a].toLowerCase());
    } else {
      cou++;
    }
  }
  console.log(count.join(""));
  console.log(cou + "/" + strs.length);
}

isStrings("hello");

let original = "a,b,c,d,e,f,g,h";
let h = str => {
  let r = original.split("");
  let splitStr = str.split("");
  let error = splitStr.filter(item => !r.includes(item));
  console.log(`error ${error.length}/ ${str.length}` );
};
h("chibuike");
function datas() {
  let nameData = [
    {
      name: "chima",
      age: 10,
      comp: "black"
    },
    {
      name: " ebuka",
      age: 5,
      comp: "fair"
    },
    {
      name: "juliet",
      age: 15,
      comp: "black"
    },
    {
      name: "oge",
      age: 8,
      comp: "fair"
    },
    {
      name: "junior",
      age: 14,
      comp: "black"
    }
  ];

  let blackLooks = nameData.filter(looks => looks.comp === "black");
  // console.log(blackLooks);

  let fairLooks = nameData.filter(looks => looks.comp === "fair");
  // console.log(fairLooks);

  let userNumber = nameData.filter(number => number);
  // console.log(userNumber.length);

  let lessDanTen = nameData.filter(ages => ages.age < 10);
  // console.log(lessDanTen)
}
datas();
