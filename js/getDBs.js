function getDBs() {
    var outerDiv = document.getElementById('todo-lane');
    let size = outerDiv.getElementsByTagName('p').length;
    console.log('count of paragraphs in outerDiv: '+ size);

    for (var i = 0; i < size; i++) {
        var innerDiv = outerDiv.querySelector('#testDynam' + i);
        var form = innerDiv.querySelector('#form-' + i);
        //new code to refernce, ew to the numerical string refernce
        var selectedOption = form.querySelector('input[name="option' + i + '"]:checked');
      
        if (selectedOption) {
            var selectedValue = selectedOption.value;
            //get input value from paragraph
            var pElement = outerDiv.getElementsByTagName('p')[i].textContent;
            console.log("User input: " + pElement);
            console.log("Selected button: " + selectedValue);        
        } else {
            console.log("No button selected.");
        }
    } 
}