function getSelectedOption() {
    var fromForm = document.getElementsByClassName('option');
    var selectedOption;
  
    for (var i = 0; i < fromForm.length; i++) {
      if (fromForm[i].checked) {
        selectedOption = fromForm[i].value;
        break;
      }
    }
  
    if (selectedOption) {
      console.log("Selected color: " + selectedOption);
    } else {
      console.log("No color selected.");
    }
  }
  