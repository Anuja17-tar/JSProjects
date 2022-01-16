console.log("Hi");
const time = document.getElementById("time");
const set = document.getElementById("alarmSet");
set.addEventListener('click',setAlarm)
function setAlarm(e){
    e.preventDefault();
    let date = new Date(time.value);
    now  = new Date();
    let timetoRun = date - now;
    if(timetoRun>=0){
       setTimeout(() => {
        play();  
       }, timetoRun);
    }


}

function play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
  }
//   play();