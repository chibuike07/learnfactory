let courseInp = document.getElementById("tex");
let thead,
  tbody,
  tableRow,
  input,
  array = [];
table = document.getElementById("table");
table.setAttribute('border', '3')
function addTableHead(...inp) {
  table = document.getElementById("table");
  thead = document.getElementById("thead");
  let th = document.createElement("th");
  inp.map(n => n);
  th.innerText = inp;
  thead.appendChild(th);
  table.appendChild(thead);
  console.log(inp);
  return inp;
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

  array.push(input);
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

}

function totalScore() {
 let allScore;
let row;
    for(let i = 0; i < table.rows.length; i++) {
    row = table.rows[i];
    allScore = 
    Number(row.cells[1].innerText)+
    Number(row.cells[2].innerText)+
    Number(row.cells[3].innerText)+
    Number(row.cells[4].innerText)+
    Number(row.cells[5].innerText);
    row.cells[6].innerText = allScore;
    console.log(allScore);
   
}
input.tot = allScore; 
let avg = Number(row.cells[6].innerText) / 5
row.cells[7].innerText = avg
input.avg = avg 
console.log(input)
}
// totalScore()

function grading(){
    let flat = Math.round(input.avg);
    let grade = '', row;

    if(flat <= 39){grade = 'F'}
    else if(flat <= 49){grade = 'D'}
    else if(flat <= 59){grade = 'C'}
    else if(flat <= 69){grade = 'B'}
    else if(flat >= 70 ){grade = 'A'}
    input.grade = grade
    console.log(grade)
    for(let i = 0; i < table.rows.length; i++){
         row = table.rows[i];
        }
        row.cells[8].innerText = grade
}
