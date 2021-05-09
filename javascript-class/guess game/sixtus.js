function hideWelcome() {
  let hideWel = document.getElementById("wel");
  let startgame = document.querySelector(".hide");
  let p = document.getElementById("para");
  let input = document.getElementById("input1");
  let sub = document.getElementById("sub");
  hideWel.style.display = "none";
  startgame.style.display = "block";
  input.style.display = "block";
  sub.style.display = "block";
  p.style.display = "none";
}

function gameTerms() {
  let p = document.getElementById("para");
  let input = document.getElementById("input1");
  let sub = document.getElementById("sub");
  let inputstring = [2];

  for (let i in inputstring) {
    console.log(inputstring[i]);
    if (input.value.includes(inputstring[i])) {
      alert("pretty cool, you are correct!");
      p.style.display = "block";
      input1.style.display = "none";
      sub.style.display = "none";
      input.focus();
      return false;
    } else if (!input.value.includes(inputstring[i])) {
      alert("wrong");
      return false;
    }
  }
}
function gameEnd() {
  let hideWel = document.getElementById("wel");
  let startgame = document.querySelector(".hide");
  hideWel.style.display = "block";
  startgame.style.display = "none";
}

function replay() {
  let hideWel = document.getElementById("wel");
  let startgame = document.querySelector(".hide");
  let p = document.getElementById("para");
  let input = document.getElementById("input1");
  let sub = document.getElementById("sub");
  hideWel.style.display = "none";
  startgame.style.display = "block";
  input.style.display = "block";
  sub.style.display = "block";
  p.style.display = "none";
  input.value = "";
}
