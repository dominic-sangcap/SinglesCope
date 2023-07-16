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
        this.userData = [[], []];
    }

    setValue1(stringVar, btnChoice) {
        this.userData[0].push([stringVar, btnChoice]);
    }

    setValue2(stringVar2, rangeVal) {
        this.userData[1].push([stringVar2, rangeVal]);
    }

    //dont know if this is needed, *only works if project is setup with modules
    getUserData() {
        return this.userData;
    }
    
    //returns either the dbArray at index[0] or ocArray at index[1]
    getItemAt(index) {
        //getValue at specified index
        if (index == 0) {
            return this.userData[0];
        }
        else if (index == 1) {
            return this.userData[1];
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
        //maybe just return the item at index
        const outputElement = document.getElementById('output1');
        const value = arrayItem[1];
        
        if (value != null) {
          outputElement.textContent = `Value at userData[${outerIndex}][${arrayItem[0]}]: ${value}`;
        } else {
          outputElement.textContent = `Invalid index provided.`;
        }
    }

    //send to storeData var
    sendtoSD() {
        allUserData.push(this.userData);
    }
}

//make var user here, so i could refernce them later on???

//the actual implementation of storing data and referencing it
//change to getting data from user1, user2, pushing onto global var: allUserData
function twoUsersData() {
    //console.log("in twoUserData");
    let user1 = new userData();
    let user2 = new userData();

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
//----------------------user2
    //test input for user2
    let testData3 = {
        "doesnt like boba": "must-have",
        "flat earther": "dealbreaker",
        "ugly af": "indifferent",
    }
    let testData4 = {
        "sense of humor": 2,
        "has a birthday holiday": 1,
        "makes no money": 5,
    }

    //init user1 data
    console.log("User 2----");
    for(let key3 in testData3) {
        let value3 = testData3[key3];
        user2.setValue1(key3, value3);
    }

    for(let key4 in testData4) {
        let value4 = testData4[key4];
        user2.setValue2(key4, value4);
    }

    //test sendtoSD()
    user2.sendtoSD();
}