//getOCs, but use parameters to pass what makes unique iD number ex. todo-lane(2), pass the 2
function paramOCs(x_od, y_id, i_id) {
    var outerDiv = document.getElementById('todo-lane'+ x_od);
    let size = outerDiv.getElementsByTagName('p').length;
    console.log('count of paragraphs in outerDiv: '+ size);

    //newly added return value
    let retUser2 = {};

    for (var i = 0; i < size; i++) {
        var innerDiv = outerDiv.querySelector('#testDynam'+ y_id + i);
        var selectedValue = innerDiv.querySelector('#uniqueID' + i_id + i).value;

        if (selectedValue >= 0 && selectedValue <= 10) {
            //get input value from paragraph
            var pElement = outerDiv.getElementsByTagName('p')[i].textContent;
            console.log(i + ". |User input: " + pElement + ", Rangevalue: " + selectedValue);  
            retUser2[pElement] =  selectedValue;  
        } else {
            //this should almost never happen, because default value is 5. idk how user could input < 0 or > 10
            console.log("No Range selected/changed.");
            retUser2[pElement] =  null;  
        }
    } 
    return retUser2;
}