// define the myFunc1 function
function myFunc1() {
  // get the element
  let element = document.getElementById("demo");
  // access the first element childNode
  let textNode = element.childNodes[0];
  // access the data childNode
  let text = textNode.data;
  // set the Interval function
  setInterval(function() {
    // set the text rotate animation
    text = text[text.length -1] + text.substring(0, text.length -1);
    textNode.data = text;
    // set the timer  
  }, 100)
}