const myFunc1 = () => {
  for(let i=2014; i<=2050; i++) {
    let d = new Date(i, 0, 1); 
    if(d.getDay() === 0) {
      document.getElementById("demo").innerHTML += `<li> 1st January is being a Sunday in the year: ${i}</li><br>`
    }
  }
}