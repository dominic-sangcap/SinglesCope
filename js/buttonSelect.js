//reference to button object rhough mutlipe element
function buttonSelect() {
  //div-div-form-amongst inut[radio]
  var outerDiv = document.getElementById('outerDiv');
  var innerDiv = outerDiv.querySelector('#innerDiv');
  var form = innerDiv.querySelector('#testForm');
  var radioBtn = form.querySelectorAll('.radio-form');
  var selectedOption;

  for (var i = 0; i < radioBtn.length; i++) {
    if (radioBtn[i].checked) {
      selectedOption = radioBtn[i].value;
      break;
    }
  }

  if (selectedOption) {
    console.log("Selected button: " + selectedOption);
  } else {
    console.log("No button selected.");
  }
  
}