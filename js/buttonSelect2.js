//reference to button object rhough mutlipe element
function buttonSelect2() {
    /*static reference
    //div-div-form-amongst inut[radio]
    var outerDiv = document.getElementById('outerDiv');
    var innerDiv = outerDiv.querySelector('#innerDiv');
    var form = innerDiv.querySelector('#testForm');
    //new code to refernce
    var selectedOption = form.querySelector('input[name="option"]:checked');
  
    if (selectedOption) {
        var selectedValue = selectedOption.value;
      console.log("Selected button: " + selectedValue);
    } else {
      console.log("No button selected.");
    }
    */
    //div-div-form-amongst inut[radio]
    var outerDiv = document.getElementById('todo-lane');
    var innerDiv = outerDiv.querySelector('#testDynam0');
    var form = innerDiv.querySelector('#form-0');
    //new code to refernce
    var selectedOption = form.querySelector('input[name="option0"]:checked');
  
    if (selectedOption) {
        var selectedValue = selectedOption.value;
      console.log("Selected button: " + selectedValue);
    } else {
      console.log("No button selected.");
    }
    
  }