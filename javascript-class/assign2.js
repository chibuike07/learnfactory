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

isStrings("chime chibuike");

let original = "a,b,c,d,e,f,g,h";
let h = str => {
  let r = original.split("");
  let splitStr = str.split("");
  let error = splitStr.filter(item => !r.includes(item));
  console.log(`error ${error.length}/ ${str.length}`);
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
// let userD = prompt('add name', '')
// let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// function use(){
//   co = 0;
// if(userD.length < 4){
// console.log('yes')
// return 'yes'
// }
// // console.log('no')
// else if(userD.length > 8){
// console.log('input greater than 8')
// return 'input greater than 8'

// }

//   // console.log('correct')
// }

// use()

function colorChange() {
  alert("yes");
  let inp = document.getElementById("inp");
  let div = document.getElementById("div");

  div.style.backgroundColor = inp.value;
  inp.value = "";
}

function guessNumber() {
  let guessNum = document.getElementById("guess");
  let backgroundToChange = document.getElementById('ran');
  let numbersToGet = [2,7,11];
  for(i = 0; i < numbersToGet.length; i++){
console.log(numbersToGet[i])
  }
    let arr = ['green', 'red', 'blue']
    let rand = Math.floor(Math.random() * arr.length)
    let r = arr[rand]
    
    if (numbersToGet.includes(guessNum.value)) {
    alert("wow! congratulation!!!");
    
    congrat = () =>{
      backgroundToChange.style.backgroundColor = r
      let b = setInterval(congrat, 2000);
    }
    return false;
  } else {
    alert("you guessed wrongly");
    return false;
  }
}
