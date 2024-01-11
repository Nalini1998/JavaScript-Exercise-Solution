const side1 = 5;
const side2 = 6;
const side3 = 7;

// semi-perimeter calculation
const p = (side1 + side2 + side3) / 2;

// triangle area calculation with Heron formula
const area = Math.sqrt(p * (p-side1) * (p-side2) * (p-side3));

function myFunc1() {
  document.getElementById("demo").innerHTML = `Triangle area is: ${area}`;
}