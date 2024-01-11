let newDate = new Date();
let day = newDate.getDate();
let month = newDate.getMonth();
let year = newDate.getFullYear();

if(month < 10) {
  month = `${month}`;
}

if(day < 10) {
  day = `${day}`;
}

function myFunc1() {
  document.getElementById("demo").innerHTML = `${month+1}-${day}-${year}`;
}

function myFunc2() {
  document.getElementById("demo").innerHTML = `${month+1}/${day}/${year}`;
}

function myFunc3() {
  document.getElementById("demo").innerHTML = `${day}-${month+1}-${year}`;
}

function myFunc4() {
  document.getElementById("demo").innerHTML = `${day}/${month+1}/${year}`;
}

// document.getElementById("demo1").innerHTML = window.print();
//document.getElementById("demo2").innerHTML = `Current time is : ${hour} ${pre} : ${min} : ${sec}`;