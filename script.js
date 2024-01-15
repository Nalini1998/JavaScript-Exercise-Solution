// set function
const myFunc = () => {
  // set today
  let today = new Date();
  // set xmas
  let xmas = new Date(today.getFullYear(), 11, 25);
  // set if condition
  if(today.getMonth() === 11 && today.getDate() > 25) {
  xmas.setFullYear(today.getFullYear() + 1);    
  }
  // miliseconds in a day
  const oneDay = 1000 * 60 * 60 * 24;
  // output the result
  document.getElementById('demo').innerHTML = `${Math.floor((xmas.getTime() - today.getTime())/oneDay)} day(s) left to the next Christmas!`;
}