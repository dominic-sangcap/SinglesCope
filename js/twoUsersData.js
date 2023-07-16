//testing ground for Data stuff

//test 1, turn let userData into a class w/ constructor
/*
Notables:
let userData -> class userData
userData: ... -> constructor() ...
items in array -> methods of a class object
*/
class userData {
    constructor() {
        this.userData= [[], []];
    }

    setValue1(stringVar, btnChoice) {
        this.userData[0].push([stringVar, btnChoice]);
    }

    setValue2(stringVar2, rangeVal) {
        this.userData[1].push([stringVar2, rangeVal]);
    }

    //dont know if this is needed
    getUserData() {
        return this.userData;
    }

    //returns a value at key
    getValueAt(outerIndex, innerIndex) {
        //getValue at specified index
        if (outerIndex >= 0 && outerIndex < this.userData.length) {
            const innerArray = this.userData[outerIndex];
            if (innerIndex >= 0 && innerIndex < innerArray.length) {
                return innerArray[innerIndex];
            }
        }
        return null;
    }
    //write to html, testing IP
    getValue() {
        //returns a copy of all user data in 
        const outputElement = document.getElementById('output');

        let formatting = ["Deal-breakers/Must-haves", "Other Considerations"];

        let output = '';
        output += "<br>"; //aestheics fo website

        //my prompt
        let index = 0;
        for(let header of formatting) {
            output += header + "<br>";
            for(let item of this.userData[index]) {
                //honestly this refernce is cooked, and im brute forcing it
                output += "->" + item[0] + ": "+ item[1] + "<br>";
            }
            output += "<br>";
            index++;
        }

        outputElement.innerHTML = output;
    }

    //write to html, testing IP using output1, so i can make sure other stuff works
    //NOte** might have to really think about the structure of how elements stored
    getValueAt(outerIndex, arrayItem) {
        //output element??
        const outputElement = document.getElementById('output1');
        const value = arrayItem[1];
        
        if (value != null) {
          outputElement.textContent = `Value at userData[${outerIndex}][${arrayItem[0]}]: ${arrayItem[1]}`;
        } else {
          outputElement.textContent = `Invalid index provided.`;
        }
    }
}

//make var user here, so i could refernce them later on???

//the actual implementation of storing data and referencing it
function twoUsersData() {
    //console.log("in twoUserData");
    let user1 = new userData();
    let user2 = new userData();

    //test input for user1
    let testData1 = {
        "doesnt like boba": "dealbreaker",
        "flat earther": "dealbreaker",
        "ugly af": "dealbreaker",
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

    /*
    //init user2 data
    user2.setValue1();
    user2.setValue2();
    */
}