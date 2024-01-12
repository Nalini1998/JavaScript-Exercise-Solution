let ranNum = Math.ceil(Math.random() * 10);
let input = prompt('Guess the number between 1 and 10 inclusive');

document.getElementById("demo").innerHTML = (ranNum === input ? "Good Work" : `Not matched!<br>The random number is: ${ranNum} <br> Your input number is: ${input}`);