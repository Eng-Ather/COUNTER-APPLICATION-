var counter = 0;

var displayBox = document.getElementById("displayBox");
var decrementBtn = document.getElementById("decrementBtn");
var even_odd = document.getElementById("even_odd");
var counter_ary = [];


//***************************** Increment Functio   ***************************** */
function increment() {
  counter = counter + 1;
  displayBox.innerText = counter;
  if (counter % 2 == 0) {
    displayBox.style.color = "orange";
    even_odd.innerText = "EVEN";
  } else {
    displayBox.style.color = "brown";
    even_odd.innerText = "ODD";
  }
  decrementBtn.disabled = false;

  counter_ary.push("(+)"+counter)  

  console.log(counter_ary);
}


//*****************************   Decrement Functio   ***************************** */

function decrement() {
  //console.log(counter);

  if (counter <= 0) {
    decrementBtn.disabled = true;
    alert("Initally Counter is at 0");
  }
  // when dceremnt function is invok so at the first step it check the counter value if it
  //found counter equal to or less then 0 so it disable the decrement function calling btn
  //and siplay alert message " counter is at 0"

  else if (counter > 0)
 {
            counter = counter - 1;
            displayBox.innerText = counter;

            if (counter == 0) {
            displayBox.style.color = "black";
            even_odd.innerText = "0";
            decrementBtn.disabled = true;
            } 
            else if (counter % 2 == 0) {
            displayBox.style.color = "orange";
            even_odd.innerText = "EVEN";
            } 
            else {
            displayBox.style.color = "brown";
            even_odd.innerText = "ODD";
            }

            counter_ary.push("(-)"+counter)  
            console.log(counter_ary);
  }
}
