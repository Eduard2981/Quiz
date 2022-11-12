
// Clock function////////////////////////////////////////////////////
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
startTime()

////////////////////////////Display next question after button was clicked ↓//////////////////////////////////////////////
function inputIsValid(input){
    if(input){
        return true;
    }
    return false;
}
// let nameBtn = document.getElementById("nameBtn");
nameBtn.addEventListener("click", displayName);

function displayName() {
    let second=document.getElementById("second")
    let hello= document.querySelector(".hello")
    let userName=document.querySelector(".userName")
    let nameloc= document.querySelector(".nameLoc")
    let message=document.querySelector(".message")
    if (!inputIsValid(userName.value)) {
      message.setAttribute("style","visibility:visible");
    } else {
      second.setAttribute("style","visibility:visible");
      message.setAttribute("style","visibility:hidden");
      nameloc.innerHTML = "Salutare " + userName.value + "!";
      hello.remove();
    }
}

function getStarted(){
  document.querySelector("#second").remove();
  document.getElementById("formDiv").setAttribute("style", "visibility:visible")
}

document.getElementById("startBtn").addEventListener("click", getStarted)

/////////Creating a funtion for Submit Button ↓ //////////////
function getSelected() {
  const answerEl = document.querySelectorAll(".gen");
  var answer = "Nu exista";

  answerEl.forEach((answerEl) => {
    if (answerEl.checked==true) {
      answer = answerEl.value;
    }
  });
console.log(answer);
  return answer;
}

function getSelected2() {
  const answerEl2 = document.querySelectorAll(".time");
  var answer2 = "Nu exista";

  answerEl2.forEach((answerEl2) => {
    if (answerEl2.checked==true) {
      answer2 = answerEl2.value;
    }
  });
console.log(answer2);
  return answer2;
}

function transferData() {
  const name = document.getElementsByClassName("userName").value;
  const age = document.getElementById("age").value;
  const city = document.getElementById("city").value;
  const answerGen = getSelected();
  const answerTime = getSelected2();

  localStorage.setItem("NAME", name);
  localStorage.setItem("AGE", age);
  localStorage.setItem("CITY", city);
  localStorage.setItem("ANSWERGEN", answerGen);
  localStorage.setItem("ANSWERTIME", answerTime);

  return;
}

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", transferData);

function validate(form){
  if (form.agree.checked == false ) {
      alert("Ahaa, ai crezut ca nu functioneaza casuta. :)");
	return false;
  } else {
	return true;
  }
}

