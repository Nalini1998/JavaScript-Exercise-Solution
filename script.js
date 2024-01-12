const myFunc1 = () => {
  let input = document.getElementById("input").value;
  document.getElementById("demo").innerHTML = (input % 100 === 0) ? (input % 400 === 0) : (input % 4 === 0);
}