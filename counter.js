var counter = 0;

        var displayBox = document.getElementById("displayBox");
        var decrementBtn = document.getElementById("decrementBtn")

        function increment() {
            counter = counter + 1;
            displayBox.innerText = counter
            if(counter%2 == 0){ displayBox.style.color="orange"}
            else{displayBox.style.color="brown"}
            decrementBtn.disabled = false
        }

        function decrement() {

            if (counter <= 0) { decrementBtn.disabled = true }
            // disable decrement button when counter is less than 0

            else {  //decrease count when count hold value
                counter = counter - 1;
                displayBox.innerText = counter;
                if(counter%2 == 0){ displayBox.style.color="orange"}
            else{displayBox.style.color="brown"}
            }

        }
        

