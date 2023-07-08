//after user inserts data into form, create an entry in respective area
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

//data for radio buttons
const data = {
    "dealbreaker": false,
    "indifferent": false,
    "must-have": false,
}

let dbmhCount = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;

    if (!value) return;

    const newTask = document.createElement("p");
    newTask.classList.add("task", "db-mh-input", "col-1");
    newTask.innerText = value;

    todoLane.appendChild(newTask);

    //testing 2 input formats
    //encapsulate in a div
    let divElement = document.createElement("div");
    divElement.classList.add("col-2");

    //get rid of this jargon, and just copy what i have in html template, and refernce later???
    for (let key in data) {
        //might not need this label creation
        let label = document.createElement("label");
        label.innerText = key;
        //radio button creation -- the juice
        let input = document.createElement("input");
        input.type = "radio";
        //this makes all instance of current buttons unique click amongst group
        input.name = "option" + dbmhCount; //need to add dynamicstring name so all buttons are different
        //allow for checking radio button state change
        input.addEventListener('change', () => {
            Object.keys(data).forEach(key => {
                data[key] = false;
            })
            data[key] = true;
        });
        label.appendChild(input);
        divElement.appendChild(label);
    }

    //put div element into todo Lane
    todoLane.appendChild(divElement);

    //fix this bc w/o it the input inline outputs, since previous element doesnt extend to entire line
    todoLane.appendChild(document.createElement('br'));
    //end test area
    dbmhCount += 1;
    input.value = "";
});