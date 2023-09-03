//getDBs, but use parameters to pass what makes unique iD number ex. todo-lane(2), pass the 2
function paramDBs(x_od, y_id, f_id, i_name) {
    var outerDiv = document.getElementById('todo-lane' + x_od);
    let size = outerDiv.getElementsByTagName('p').length;
    //console.log('count of paragraphs in outerDiv: '+ size);

    //newly added return value
    let retUser2 = {};

    for (var i = 0; i < size; i++) {
        var innerDiv = outerDiv.querySelector('#testDynam' + y_id + i);
        var form = innerDiv.querySelector('#form' + f_id + '-' + i);
        //new code to refernce, ew to the numerical string refernce; based on <input> where button name="" is option + i, the selected one
        var selectedOption = form.querySelector('input[name="' + i_name + i + '"]:checked');
      
        //make sure user actually selected a value
        if (selectedOption) {
            var selectedValue = selectedOption.value;
            //get input value from paragraph
            var pElement = outerDiv.getElementsByTagName('p')[i].textContent;
            //console.log(i + ". |User input: " + pElement + ", Selected button: " + selectedValue);
            retUser2[pElement] =  selectedValue;      
        } else {
            //console.log("No button selected.");
            retUser2[pElement] =  null;   
        }
    }
    return retUser2;
}