const dateList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const newDate = new Date().getDay();
let hour = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();

let pre = (hour >= 12) ? "PM" : "AM";
hour = (hour >= 12) ? hour - 12 : hour;
  
if (hour === 0 && pre === "AM") {
  if (min === 0 && sec === 0) {
  hour = 12;
  pre === 'Midnight';
} else {
  hour = 12;
  pre === 'AM';
  }
}

if (hour === 0 && pre === "PM") {
  if (min === 0 && sec === 0) {
  hour = 12;
  pre === 'Noon';
} else {
  hour = 12;
  pre === 'PM';
  }
}

document.getElementById("demo1").innerHTML = `Today is : ${dateList[newDate]}`;
document.getElementById("demo2").innerHTML = `Current time is : ${hour} ${pre} : ${min} : ${sec}`;