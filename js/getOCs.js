function getOCs() {
    var outerDiv = document.getElementById('todo-lane2');
    let size = outerDiv.getElementsByTagName('p').length;
    console.log('count of paragraphs in outerDiv: '+ size);

    for (var i = 0; i < size; i++) {
        var innerDiv = outerDiv.querySelector('#testDynam' + i);
        //new code to refernce, ew to the numerical string refernce
        var selectedValue = innerDiv.querySelector('#uniqueID' + i).value;
        //console.log("Rangevalue: " + selectedOption);  

        if (selectedValue >= 0 && selectedValue <= 10) {
            //get input value from paragraph
            var pElement = outerDiv.getElementsByTagName('p')[i].textContent;
            console.log("User input: " + pElement);
            console.log("Rangevalue: " + selectedValue);        
        } else {
            console.log("No Range selected/changed.");
        }
    } 
}