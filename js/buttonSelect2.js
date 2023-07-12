//schedule to delete this js folder/function, i believe this is merely testing ground code

//reference to button object rhough multipe element
function buttonSelect2() {
    //using 0th element as test case, will have to variable this element
    //string + num apparently = stringvalue; @innerDiv, form, selectedOption....pElement
    var outerDiv = document.getElementById('todo-lane');
    var innerDiv = outerDiv.querySelector('#testDynam' + 0);
    var form = innerDiv.querySelector('#form-' + 0);
    //new code to refernce, ew to the numerical string refernce
    var selectedOption = form.querySelector('input[name="option' + 0 + '"]:checked');
  
    if (selectedOption) {
        var selectedValue = selectedOption.value;
        //get input value from paragraph
        var pElement = outerDiv.getElementsByTagName('p')[0].textContent;
        console.log("User input: " + pElement);
        console.log("Selected button: " + selectedValue);        
    } else {
        console.log("No button selected.");
    }
  }
  