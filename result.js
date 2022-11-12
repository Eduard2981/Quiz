// Transfer Data/////////////////////
window.addEventListener("load", ()=>{

  const name =localStorage.getItem("NAME");
const age =localStorage.getItem("AGE");
const city =localStorage.getItem("CITY");
const answerGen =localStorage.getItem("ANSWERGEN");
const answerTime = localStorage.getItem("ANSWERTIME");
})

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

//  Show result function//////////////////////////

 const resultEl = [
   {
     title: "Red Dead Redemption 2",
     intro:
       "Red Dead Redemption 2 promite sa spuna o poveste de viata din nemiloasa inima a Americii, lumea de joc vasta si plina de atmosfera urmand sa stea si la baza unei noi experiente multiplayer online.",
     enjoy:
       "In noul Red Dead, intri în bocancii lui Arthur Morgan, un cowboy care a fost crescut de van der Linde și care devine un fel de lider alături de Dutch.",
     image:
       "https://cdn-products.eneba.com/resized-products/6M1qP76B-j6vdX0T4bFCHgJeX99MaKBpXFxbpif1MqY_350x200_1x-0.jpeg",
   },

   {
     title: "Halo: Infinite",
     intro:
       "Cand orice speranta este pierduta si soarta umanitatii se afla in balanta, Master Chief este gata sa se confrunte cu cel mai nemilos dusman cu care s-a confruntat vreodata.",
     enjoy:
       "Intra in armura celui mai mare erou al umanitatii pentru a experimenta o aventura epica si a explora scara masiva a Halo ring.",
     image:
       "https://static.posters.cz/image/1300/postere/halo-infinite-planetside-i116575.jpg",
   },

   {
     title: "FIFA 23",
     intro:
       "EA SPORTS™ FIFA 23 aduce și mai mult din acțiunea și realismul fotbalului pe terenul de joc din sportul rege.",
     enjoy:
       "Bucură-te de o experiență mai reală a fotbalului în FIFA 23, cu noi caracteristici de joc care creează șuturi cu risc versus recompensă, lovituri libere, penaltiuri și cornere, precum și mai multă varietate de fotbal",
     image:
       "https://assets.reedpopcdn.com/fifa-main.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/fifa-main.jpg",
   },

   {
     title: "Days Gone",
     intro:
       "Situat in Pacific Northwest, Days Gone te invita sa explorezi o lume distrusa de oameni transformati in monstrii cunoscuti sub numele de Freakers. Lupta in peisaje pustii in cautarea resurselor si mai presus de tot, in cautarea unui motiv pentru a merge mai departe.",
     enjoy:
       "Intra in rolul fostului motociclist talhar Deacon St. John: un vagabond, un vanator de recompense, un ratacitor al umanitatii. Intr-o lume devastata, St. John pleaca singur la drum din taberele abandonate din salbaticie construite de ultimii supravietuitori ai omenirii.",
     image:
       "https://image.api.playstation.com/vulcan/ap/rnd/202011/0921/SypC9OYevRfIB2A4VfFi8qC5.jpg",
   }];


   function addContent(){
    const city = localStorage.getItem("CITY");
    const answerGen = localStorage.getItem("ANSWERGEN");
    let titleTxt=document.getElementById("title")
    let introTxt=document.getElementById("introText")
    let enjoyTxt=document.getElementById("enjoyText")
    let imageSrc=document.getElementById("gameImg") 
    let citySrc=document.getElementById("cityName")
    let action="action"
    let shooter="shooter"
    let sport="sport"
    let nothing="nothing"
    console.log(answerGen)
    citySrc.innerHTML=city
    
    if (answerGen===action) {   
        titleTxt.innerHTML = resultEl[0].title;
        introTxt.innerHTML = resultEl[0].intro;
        enjoyTxt.innerHTML = resultEl[0].enjoy;
        imageSrc.src = resultEl[0].image;
      }
     
       else if (answerGen===shooter){
       titleTxt.innerHTML = resultEl[1].title;
        introTxt.innerHTML = resultEl[1].intro;
        enjoyTxt.innerHTML = resultEl[1].enjoy;
        imageSrc.src = resultEl[1].image;
       }
       else if (answerGen===sport){
        titleTxt.innerHTML = resultEl[2].title;
        introTxt.innerHTML = resultEl[2].intro;
        enjoyTxt.innerHTML = resultEl[2].enjoy;
        imageSrc.src = resultEl[2].image;
       }
     else{
        titleTxt.innerHTML = resultEl[3].title;
        introTxt.innerHTML = resultEl[3].intro;
        enjoyTxt.innerHTML = resultEl[3].enjoy;
        imageSrc.src = resultEl[3].image;
     }
    }
   addContent()
   


  ///////Age button Function///////////////////////////
function formatAge() {
  const ageDate = localStorage.getItem("AGE");
  const ageNum = new Date(ageDate);
  let userYear = ageNum.getFullYear();
  let userMon = ageNum.getMonth()+1;
  let userDay = ageNum.getDate();
  userMon= checkTime(userMon)
  userDay= checkTime(userDay)
  let age = userYear + "-" + userMon + "-" + userDay;
  console.log(userMon);
  return age
}


var date = formatAge();
var calculate = document.querySelector('.button-49');
var result = document.querySelector('#ageLocation');

// set maximum date to today
// date.max = new Date().toISOString().split('T')[0];

function calculateAge() {
  var today = new Date();
  var birthDate = new Date(date);

  // Calculate years
  var years;
  if (today.getMonth() > birthDate.getMonth() || (today.getMonth() == birthDate.getMonth() && today.getDate() >= birthDate.getDate())) {
    years = today.getFullYear() - birthDate.getFullYear();
  }
  else {
    years = today.getFullYear() - birthDate.getFullYear() - 1;
  }

  // Calculate months
  var months;
  if (today.getDate() >= birthDate.getDate()) {
    months = today.getMonth() - birthDate.getMonth();
  }
  else if (today.getDate() < birthDate.getDate()) {
    months = today.getMonth() - birthDate.getMonth()-1;
  }
  // make month positive
  months = months < 0 ? months + 12 : months;

  // Calculate days
  var days;
  // days of months in a year
  var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (today.getDate() >= birthDate.getDate()) {
    days = today.getDate() - birthDate.getDate();
  } else {
    days = today.getDate() - birthDate.getDate() + monthDays[birthDate.getMonth()];
  }

  // Display result
  result.innerHTML = `<p class="birthdate">Te-ai nascut pe data de ${date}.</p>`;
  result.innerHTML += `<p class="age">Ai ${years} ani, ${months} luni si ${days} zile.</p>`;
  if (months == 0 && days == 0) {
    result.innerHTML += `<p class="wishing">Happy Birthday!🎂🎈🎈</p>`;
  }
}
calculate.addEventListener('click', calculateAge);


