//unsure if want to store 1 userData or all userData in one area
//use var to store data, and calculate Stuff???
//create a different class userData with calculate functions???

//global variable
var allUserData = [];

//will i need a variable to stoe calculations???
var calcCS = [[], []];

const dataVar = {
    "dealbreaker": -1,
    "indifferent": 0,
    "must-have": 1
}

class compareData {
    constructor() {
        this.compareData = calcCS;
    }
    //consoel log data in allUserData !!!Not calcCS
    showAllUserData() {
        console.log("size of allUserData: " + allUserData.length);
        //console.log(allUserData[0]);
        //console.log(allUserData[1]);
        for(let user in allUserData) {
            for(let index in allUserData[user]) {
                for(let item in allUserData[user][index]) {
                    console.log("user: " + user + "| index: " + index + "| item: " + item 
                    + "| Descrip: " + allUserData[user][index][item][0] + "-Value:" + allUserData[user][index][item][1]);
                }
            }
        }
    }
    //console/log data in calcCS
    show_calCS() {
        console.log("size of calcCS: " + calcCS.length);
        for (let each in calcCS) {
            for(let item in calcCS[each]) {
                console.log(calcCS[each][item]);
            }
        }
    }
    //calulate db/mh differences put into calcCS[0]
    calc_db_diffs() {
        console.log("Calc differences: ");
        let user1 = 0;
        let user2 = 1;
        for(let item in allUserData[0][0]) {
            console.log("user: " + user1 + "| index: " + 0 + "| item: " + item 
            + "| Descrip: " + allUserData[user1][0][item][0] + "-Value:" + allUserData[user1][0][item][1]);
            console.log("user: " + user2 + "| index: " + 0 + "| item: " + item 
            + "| Descrip: " + allUserData[user2][0][item][0] + "-Value:" + allUserData[user2][0][item][1]);
            
            //compare to other in allUserData, push certain value into calcCS
            let matric1 = dataVar[allUserData[user1][0][item][1]];
            let matric2 = dataVar[allUserData[user2][0][item][1]];
            console.log("Matric1: " + matric1 + " | Matric2: " + matric2, " | Total: " + (matric1 + matric2));

            //edgecase for if one is is must-have & other is dealB: use ternary operator
            let diff_of_users = ((matric1 * matric2) != -1) ? matric1 + matric2 : -2;
            calcCS[0].push([allUserData[0][0][item][0], diff_of_users])
        }
    }
    //calulate oc differences put into calcCS[0]
    calc_oc_diffs() {
        console.log("Calc differences: ");
        for(let array in calcCS) {
            for(let index in allUserData[array]) {
                for(let item in allUserData[user][index]) {
                    console.log("user: " + user + "| index: " + index + "| item: " + item 
                    + "| Descrip: " + allUserData[user][index][item][0] + "-Value:" + allUserData[user][index][item][1]);
                }
            }
        }
    }

}

//This is called ideally when user hits Check Compatibility results---eventually
function storeData() {
    //testing grounds, create class object 
    let testCompData = new compareData();
    //testing 1-showAllUserData *Works
    //testCompData.showAllUserData();

    //testing 2-db_diff *Works
    //testCompData.calc_db_diffs();

    //testing XYZ-show_calcCS
    testCompData.show_calCS();
}
