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

//from twoUsersData.js
    //test input for user1
    let testData1 = {
        "doesnt like boba": "dealbreaker",
        "flat earther": "indifferent",
        "ugly af": "must-have",
    }
    let testData2 = {
        "sense of humor": 7,
        "has a birthday holiday": 10,
        "makes a lot of money": 5,
    }

    //init user1 data
    console.log("User 1----");
    for(let key in testData1) {
        let value = testData1[key];
        user1.setValue1(key, value);
        //in user1, this pushes a [key, value] into user1[0]
        //console.log("key: " + key + ", value: " + value);
    }
    //console.log("init twoUserData DB");

    for(let key2 in testData2) {
        let value2 = testData2[key2];
        user1.setValue2(key2, value2);
        //in user1, this pushes a [key, value] into user1[1]
        //console.log("key2: " + key2 + ", value2: " + value2);
    }
    //console.log("init twoUserData OC");

    //Testing getValue, print to html div element
    let temp = user1.getValue();
    //console.log("return twoUserData in div under button");

    //test .getValueaAt()
    console.log("Ideally this wroks 1st try: getValueat(x, y)---Test1s");
    //let num = user1[0].length;
   // console.log("user1[0].length: "+ num);
    for(let i = 0; i < user1.userData.length; i++) {
        for (let item of user1.userData[i]) {
            //iterate over the userData[i][These [x, y] values]
            let value = user1.getValueAt(i, item);
            console.log("getValueAt[" + i + "][" + item[0] + "]:  " + item[1]);
        }
    }

    //test getItemAt()
    let num1 = 0;
    let num2 = 1;
    console.log("getItemAt[" + num1 + "]: " + user1.getItemAt(num1));
    console.log("getItemAt[" + num2 + "]: " + user1.getItemAt(num2));

    //test sendtoSD()
    user1.sendtoSD();
*/