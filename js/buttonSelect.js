//possibly git rid of this file, testing ground for static code generated

//reference to button object rhough mutlipe element
function buttonSelect() {
  //div-div-form-amongst inut[radio]
  var outerDiv = document.getElementById('outerDiv');
  var innerDiv = outerDiv.querySelector('#innerDiv');
  var form = innerDiv.querySelector('#testForm');
  //new code to refernce
  var selectedOption = form.querySelector('input[name="option"]:checked');

  if (selectedOption) {
    var selectedValue = selectedOption.value;
    //console.log("Selected button: " + selectedValue);
  } else {
    //console.log("No button selected.");
  }
  
}
