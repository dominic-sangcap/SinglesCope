//reference to button object rhough mutlipe element
function buttonSelect2() {
    //div-div-form-amongst inut[radio]
    var outerDiv = document.getElementById('outerDiv');
    var innerDiv = outerDiv.querySelector('#innerDiv');
    var form = innerDiv.querySelector('#testForm');
  
    //new code to refernce
    var selectedOption = form.querySelector('input[name="option"]:checked').value;
  
    if (selectedOption) {
      console.log("Selected button: " + selectedOption);
    } else {
      console.log("No button selected.");
    }
    
  }