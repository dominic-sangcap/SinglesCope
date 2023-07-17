//get all dynamically created dealbreakers/musthaves user input and console log results

function getDBs() {
    var outerDiv = document.getElementById('todo-lane');
    let size = outerDiv.getElementsByTagName('p').length;
    console.log('count of paragraphs in outerDiv: '+ size);

    //new return var
    let retUser1 = {};

    for (var i = 0; i < size; i++) {
        var innerDiv = outerDiv.querySelector('#testDynam' + i);
        var form = innerDiv.querySelector('#form-' + i);
        //new code to refernce, ew to the numerical string refernce; based on <input> where button name="" is option + i, the selected one
        var selectedOption = form.querySelector('input[name="option' + i + '"]:checked');
      
        //make sure user actually selected a value
        if (selectedOption) {
            var selectedValue = selectedOption.value;
            //get input value from paragraph
            var pElement = outerDiv.getElementsByTagName('p')[i].textContent;
            console.log(i + ". |User input: " + pElement + ", Selected button: " + selectedValue);  
            retUser1[pElement] =  selectedValue;
        } else {
            console.log("No button selected.");
            retUser1[pElement] =  null;
        }
    } 
    return retUser1;
}