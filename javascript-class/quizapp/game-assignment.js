let userName = prompt("add ur name", "");

let object = {
  holdUserName: "",
  question: [
    "what is the name of where we re having our internship",
    "what time do the activities of learnFactory start for the day",
    "what have you learnt from this learn factory internship",
    "what is the name of learn factory CEO",
    ""
  ],
  answers: ["learn factory", "9am", "javascript", "uchenna ukaegbu"],
  progress: 10,
  proC: []
};
let count = 0;
let pElement = document.getElementById("4");
let inpAnswer = document.querySelector("#ans");
let form = document.querySelector("form");
let failureCount = 0;
let array = [];
function gamePlay(e) {
  if (userName) {
    object["holdUserName"] = userName;
    alert(
      object["holdUserName"] + " welcome! Yyou may now proceed to play the game"
    );
  }
}
gamePlay();
function next(e) {
  count = count + 1;
  count = count % object["question"].length;
  pElement.innerText = object["question"][count];
  pElement.style.Color = "black";
  pElement.style.backgroundColor = "#fff";
  if (count === 4) {
    count--;
    let numberOfScore = 0;
    let scoreHolder;
    for (a of object.proC) {
      scoreHolder = numberOfScore += a;
    }

    if (scoreHolder > 0) {
      alert(
        object["holdUserName"] +
          " You scored: " +
          scoreHolder +
          "\n you answered " +
          object.proC.length +
          " question correctly of " +
          object["question"].indexOf(object.question[4])
      );
    } else {
      scoreHolder = 0;
      alert(
        object["holdUserName"] +
          " You scored: " +
          scoreHolder +
          "\n you answered " +
          object.proC.length +
          " question of " +
          object["question"].indexOf(object.question[4])
      );
    }
    alert("you have reached the end of the game");
  } else {
    inpAnswer.disabled = false;
  }
}

function answer(e) {
  for (let i = 0; i < object.answers.length; i++) {
    let ansHolder = object.answers[i];
    array.push(ansHolder);
  }

  for (let ansIndex in array) {
    if (pElement.innerText == object["question"][ansIndex]) {
      if (inpAnswer.value.toLowerCase() == object["answers"][ansIndex]) {
        console.log("yes");
        pElement.style.backgroundColor = "green";
        object["proC"].push(object["progress"]);
        console.log(object["proC"]);
        console.log(object["proC"].length);
        form.reset();
        inpAnswer.disabled = true;
        return true;
      }
    }
  }

  alert("sorry! you answered wrongly");
  inpAnswer.disabled = true;
  return true;
}

function stable(e) {
  pElement.innerText = object["question"][0];
  pElement.style.Color = "black";
}
