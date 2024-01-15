const CtoF = () => {
 const temp = document.getElementById('temp').value;
document.getElementById('output').innerHTML = `${temp}∘C is ${temp * 9/5 + 32}∘F`;
}

const FtoC = () => {
 const temp = document.getElementById('temp').value;
document.getElementById('output').innerHTML = `${temp}∘F is ${(temp - 32) *5/9}∘C`;
}