/*
htML COntent

    <!-- Template code refernce, can delete-->
<!-- 
    <div class="row-2">
        <div class="col-1">Empty Space</div>
        <div class="col-2">
            <ul>
                <li>Dealbreaker*</li>
                <li>Indifferent*</li>
                <li>Must-Haves*</li>
            </ul>
        </div>
    </div>
    <br>
    <\!---User inputted data and radio buttons--\>
    <div class="row-2" id="outerDiv">
        <div class="col-1 db-mh-input">Ex. Doesn't like Boba</div>
        <div class="col-2" id="innerDiv">
            <form id="testForm" name="noName">
                <input class="radio-form" type="radio" value="dealbreaker"  name="option">
                <input class="radio-form" type="radio" value="indifferent" name="option">
                <input class="radio-form" type="radio" value="musthave" name="option">
            </form>
        </div>
    </div>
    <br>
    <\!--test if button can be pulled from outside scope of intended form--\>
    <button type="button" onclick="buttonSelect()">Test Console</button>

    <\!--use buttonSelect2 as a testing ground--\>
    <button type="button" onclick="buttonSelect2()">Test Console Button 2</button>

    <\!--use getDBS as a testing ground for getting all --\>
    <button type="button" onclick="getDBs()">Get All dealBreakers</button>
-->


<!-- Template code refernce, can delete-->
<!--- 
    <div class="row-2" id="outerDiv2">
        <div class="col-1 fq-input">Ex. Has A Holiday Birthday</div>
        <div class="col-2" id="innerDiv2">
            <input class="slide-size" type="range" min="0" max="10" value="5" id="ocRange"></input>
        </div>
    </div>
    <br>
    <\!--testing outside of div scope--\>
    <button type="button" onclick="rangeSelect()">Test Console2</button>
    <\!--use getDBS as a testing ground for getting all --\>
    <button type="button" onclick="getOCs()">Get All Other Considerations</button>
-->


*/

/*
js COntent

og buttonSelect code
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

*/