//create the *2nd users form
//create th portion of dealbreakers again, ideally unselected radio buttons
function makeUser() {
    //get data form from first user: Need---------------New code
    var outerDiv = document.getElementById('todo-lane');
    let size = outerDiv.getElementsByTagName('p').length;

    var outerDiv2 = document.getElementById('todo-lane2');
    let size2 = outerDiv2.getElementsByTagName('p').length;


    //do nothing if user not input anything yet
    if (!size && !size2) {
        //console.log("size1: " + size + "size2: " + size2);
        return;
    }

    //recreate DB part
    const todoLane3 = document.getElementById("todo-lane3");
    for (let i = 0; i < size; i++) {
        //probably only need this in for loop from getDBs
        const pElement = outerDiv.getElementsByTagName('p')[i].textContent;

        //now recreate todo.js functionality in new section
        const newTask = document.createElement("p");
        newTask.classList.add("task", "db-mh-input", "col-1");
        newTask.innerText = pElement;
        todoLane3.appendChild(newTask);

        //encapsulate in a div
        let divElement = document.createElement("div");
        divElement.classList.add("col-2");
        //add unique id here???
        divElement.id = "testDynam3" + i;

        //encapsulate labels and input into a form
        let formElement = document.createElement("form");
        let dynamFormid = "form2-" + i;
        formElement.id = dynamFormid;

        //get rid of this jargon, and just copy what i have in html template, and refernce later???
        for (let key in data) {
            //might not need this label creation
            let label = document.createElement("label");
            label.innerText = key;
            //radio button creation -- the juice
            let inputB = document.createElement("input");
            inputB.type = "radio";
            //substantiate the input value with a corresponding value == innerText
            inputB.value = key;
            //this makes all instance of current buttons unique click amongst group
            inputB.name = "secUser" + i; //need to add dynamicstring name so all buttons are different
            //allow for checking radio button state change, honestly dont even know if this works or nots
            /*
            //probably get rid of this, does not work...probably didnt work bc input already defined by const at beg of file
            input.addEventListener('change', () => {
                Object.keys(data).forEach(key => {
                    data[key] = false;
                })
                data[key] = true;
            });
            */
            label.appendChild(inputB);
            formElement.appendChild(label);
        }

        //put form element into todo Lane
        divElement.appendChild(formElement);

        //put div element into todo Lane
        todoLane3.appendChild(divElement);

        //fix this bc w/o it the input inline outputs, since previous element doesnt extend to entire line
        todoLane3.appendChild(document.createElement('br'));
    }
    
    //recreate OC part - insert for loop
    const todoLane4 = document.getElementById("todo-lane4");
    for (let j = 0; j < size2; j++) {
        //get text content
        const pElement2 = outerDiv2.getElementsByTagName('p')[j].textContent;

        //recreate todo2.js functionality
        const newTask2 = document.createElement("p");
        newTask2.classList.add("task", "fq-input", "col-1");
        newTask2.innerText = pElement2;

        todoLane4.appendChild(newTask2);

        //testing 2 input formats
        let divElement = document.createElement("div");
        divElement.classList.add("col-2");
        //add unique id here???
        divElement.id = "testDynam4" + j;

        var rangeSlider = document.createElement("input");
        rangeSlider.type = "range";
        rangeSlider.min = "0";
        rangeSlider.max = "10";
        rangeSlider.value = "5";
        rangeSlider.classList.add("slide-size");
        //this makes all instance of current buttons unique click amongst group, not need name one unless needed for css purposes
        rangeSlider.name = "option2" + j;
        rangeSlider.id = "uniqueID2" + j;

        divElement.appendChild(rangeSlider);
        todoLane4.appendChild(divElement);
        
        //for visual refernces
        todoLane4.appendChild(document.createElement('br'));
    }
    //disable lock in button, so no more adding onto 2nd+ user
    const user1Btn = document.getElementById('Lock-In-Btn');
    user1Btn.disabled = true;

    //also disable Add+ buttons, so no more fields can be created for first user
    const dbBtn = document.getElementById('add_dB');
    dbBtn.disabled = true;
    const ocBtn = document.getElementById('add_oC');
    ocBtn.disabled = true;

    //turn off hidden visiblity when makining second user in section 3.2, probably turn this into a function later
    //only create this if there are OCs
    if (size2) {
        const hiddenBtn = document.getElementById('wasHidden1');
        hiddenBtn.style.display = "block";
    }
    
}