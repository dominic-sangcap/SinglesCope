//get all dynamically created other considerations: range slider user input and console log results

function getOCs() {
    var outerDiv = document.getElementById('todo-lane2');
    let size = outerDiv.getElementsByTagName('p').length;
    console.log('count of paragraphs in outerDiv: '+ size);

    //new return var
    let retUser1 = [];

    for (var i = 0; i < size; i++) {
        var innerDiv = outerDiv.querySelector('#testDynam2' + i);
        var selectedValue = innerDiv.querySelector('#uniqueID' + i).value;

        if (selectedValue >= 0 && selectedValue <= 10) {
            //get input value from paragraph
            var pElement = outerDiv.getElementsByTagName('p')[i].textContent;
            console.log(i + ". |User input: " + pElement + ", Rangevalue: " + selectedValue); 
            retUser1[pElement] =  selectedValue;
        } else {
            //this should almost never happen, because default value is 5. idk how user could input < 0 or > 10
            console.log("No Range selected/changed.");
            retUser1[pElement] =  null;
        }
    } 
    return retUser1;
}