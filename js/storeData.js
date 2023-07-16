//unsure if want to store 1 userData or all userData in one area
//use var to store data, and calculate Stuff???
//create a different class userData with calculate functions???

//global variable
var allUserData = [];

//
/*
class storeData {
}
*/

function storeData() {
    console.log("size of allUserData: " + allUserData.length);
    console.log(allUserData[0]);
    console.log(allUserData[1]);
    for(let user in allUserData) {
        for(let index in allUserData[user]) {
            for(let item in allUserData[user][index]) {
                console.log("user: " + user + "| index: " + index + "| item: " + item 
                + "| Descrip: " + allUserData[user][index][item][0] + "-Value:" + allUserData[user][index][item][1]);
            }
        }
    }
}
