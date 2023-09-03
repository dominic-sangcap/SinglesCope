//schedule for deletion, was testing ground for static html elemnts

function rangeSelect() {
    //div-div-input[range]
    var outerDiv = document.getElementById('outerDiv2');
    var innerDiv = outerDiv.querySelector('#innerDiv2');
    var slideRange = innerDiv.querySelector('#ocRange');
    var rangeValue = slideRange.value;
  
    if (rangeValue) {
      //console.log("Range Slide Value: " + rangeValue);
    } else {
      //console.log("SHould still be set value of 5: " + rangeValue);
    }
    
  }