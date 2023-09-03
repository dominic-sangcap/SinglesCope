//dynamic creation from user input into form for section 2.2 *consider
var form2 = document.getElementById("todo-form2");
var input2 = document.getElementById("todo-input2");
var todoLane2 = document.getElementById("todo-lane2");

let fqCount = 0;

form2.addEventListener("submit", (e) => {
    e.preventDefault();
    var value2 = input2.value;

    if (!value2) return;

    //turn section 2.2 into display: block; on first instance only
    if (fqCount == 0) {
        var hiddenBtn = document.getElementById('wasHidden0');
        hiddenBtn.style.display = "block";
    }

    var newTask2 = document.createElement("p");
    newTask2.classList.add("task", "fq-input", "col-1");
    newTask2.innerText = value2;

    todoLane2.appendChild(newTask2);

    //testing 2 input formats
    let divElement = document.createElement("div");
    divElement.classList.add("col-2");
    //add unique id here???
    divElement.id = "testDynam2" + fqCount.toString();

    var rangeSlider = document.createElement("input");
    rangeSlider.type = "range";
    rangeSlider.min = "0";
    rangeSlider.max = "10";
    rangeSlider.value = "5";
    rangeSlider.classList.add("slide-size");
    //this makes all instance of current buttons unique click amongst group, not need name one unless needed for css purposes
    rangeSlider.name = "option" + fqCount.toString();
    rangeSlider.id = "uniqueID" + fqCount.toString();

    divElement.appendChild(rangeSlider);
    todoLane2.appendChild(divElement);
    
    //for visual refernces
    todoLane2.appendChild(document.createElement('br'));
    
    //end test area
    fqCount += 1;
    input2.value = "";
});