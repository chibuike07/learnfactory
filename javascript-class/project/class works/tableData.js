// data[varriable] = "lawrencel"
// "lawrencel"
// data
// Object { name: "lawrencel" }

// data["amount"] = "lawrencel"
// "lawrencel"
// data
// Object { name: "lawrencel", amount: "lawrencel" }

// ​

let courseInp = document.getElementById("tex");
let thead = document.getElementById('thead'),
tbody,
tableRow,
array = [],
input,
position = document.getElementById("position"),
higestAvg = document.getElementById("average"),
table = document.getElementById("table");
table.setAttribute("border", "3");
co = 0;
function addTableHead(...inp) {
  co++
  table = document.getElementById("table");
  thead = document.getElementById("thead");
  let th = document.createElement("th");
  inp.map(n => n);
  th.innerText = inp;
  thead.appendChild(th);
  table.appendChild(thead);
  console.log(inp, co);
  // console.log(inp);
  // return inp;
if(co == 2){
  alert('yes')
}
}
function addTableBody(...keys) {
  tbody = document.getElementById("tbody");
  tableRow = table.insertRow(table.length);
  
  input = {
    nam: document.getElementById("nm").value,
    eng: document.getElementById("en").value,
    math: document.getElementById("mt").value,
    econs: document.getElementById("ec").value,
    agric: document.getElementById("ag").value,
    art: document.getElementById("art").value
  };
  
  cell1 = tableRow.insertCell(0);
  cell2 = tableRow.insertCell(1);
  cell3 = tableRow.insertCell(2);
  cell4 = tableRow.insertCell(3);
  cell5 = tableRow.insertCell(4);
  cell6 = tableRow.insertCell(5);
  cell7 = tableRow.insertCell(6);
  cell8 = tableRow.insertCell(7);
  cell9 = tableRow.insertCell(7);
  
  cell1.innerText = input.nam;
  cell2.innerText = input.eng;
  cell3.innerText = input.math;
  cell4.innerText = input.econs;
  cell5.innerText = input.agric;
  cell6.innerText = input.art;
  cell7.innerText = Number();
  cell8.innerText = Number();
  cell9.innerText = String();
  tbody.appendChild(tableRow);
  
  array.push(input);
  console.log(array);
}

function totalScore() {
  let allScore;
  let row;
  for (let i = 0; i < table.rows.length; i++) {
    row = table.rows[i];
    allScore =
    Number(row.cells[1].innerText) +
    Number(row.cells[2].innerText) +
    Number(row.cells[3].innerText) +
    Number(row.cells[4].innerText) +
      Number(row.cells[5].innerText);
      row.cells[6].innerText = allScore;
      console.log(allScore);
  }
  input.tot = allScore;
  let avg = Number(row.cells[6].innerText) / 5;
  row.cells[7].innerText = avg;
  input.avg = avg;
  console.log(input);
}
// totalScore()

function grading() {
  let flat = Math.round(input.avg);
  let grade = "",
  row;
  
  if (flat <= 39) {
    grade = "F";
  } else if (flat <= 49) {
    grade = "D";
  } else if (flat <= 59) {
    grade = "C";
  } else if (flat <= 69) {
    grade = "B";
  } else if (flat >= 70) {
    grade = "A";
  }
  input.grade = grade;
  console.log(grade);
  for (let i = 0; i < table.rows.length; i++) {
    row = table.rows[i];
  }
  row.cells[8].innerText = grade;
}

function len() {
  let avgArr = [];
  if (table.rows.length == 2) {
    alert("you have reach the maximum length of table");
    let ArrObj = array.filter(n => n.avg);
    ArrObj.map(n => avgArr.push(n.avg));
    let avgMax = Math.max(...avgArr);
    let maxNamObj = array.filter(nam => nam.avg == avgMax);
    let maxNam = maxNamObj.map(nam => nam.nam);
    higestAvg.innerText = `${maxNam} ${avgMax}`;
    console.log(avgMax);
    console.log(avgArr);
  }
}
function sortFromHighestToLowest() {
  let sortedArrayByAvg = array.sort((a, b) => b.avg - a.avg);
  let namesBySort = sortedArrayByAvg.map(n => `${n.nam} ${n.avg}\n`).join("");
  position.innerText = namesBySort
  console.log(namesBySort);
}
document.addEventListener('DOMContentLoaded', () => {
  let th = document.createElement('th');
  th.innerText = 'Name';
  thead.appendChild(th);

});

function emptyCells(arr){
  let spacedCell;
  if(table.rows.length - 1 == 2){}
spacedCell = arr.filter(spaces => {
      spaces.eng == "" ||
      spaces.math == "" ||
      spaces.econs == "" ||
      spaces.agric == "" ||
      spaces.art == ""
      console.log(spaces)
      
})
spac = Object.keys(spacedCell).filter(key => spacedCell[key] == '');
console.log(spac)
}

// let a = [1, 2, 3, 4, 5].map(n => console.log(n + 1));
// console.log(a);
// return a
