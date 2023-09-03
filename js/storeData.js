//unsure if want to store 1 userData or all userData in one area
//use var to store data, and calculate Stuff???
//create a different class userData with calculate functions???

//global variable
var allUserData = [];

//will i need a variable to stoe calculations???
var calcCS = [[], []];

//blasphemous storage fo score
var finalScore = [,];

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
            if (matric1 == -1 && matric2 == -1) {
                diff_of_users = 2;
            }
            calcCS[0].push([allUserData[0][0][item][0], diff_of_users])
        }
    }
    //calulate oc differences put into calcCS[0]
    calc_oc_diffs() {
        console.log("Calc differences in Range Values: ");
        let user1 = 0;
        let user2 = 1;
        let oC = 1;
        for(let item in allUserData[0][oC]) {
            console.log("user: " + user1 + "| index: " + 0 + "| item: " + item 
            + "| Descrip: " + allUserData[user1][oC][item][0] + "-Value:" + allUserData[user1][oC][item][1]);
            console.log("user: " + user2 + "| index: " + 0 + "| item: " + item 
            + "| Descrip: " + allUserData[user2][oC][item][0] + "-Value:" + allUserData[user2][oC][item][1]);
            

            //calculate abs(difference of range values)
            let range1 = allUserData[user1][oC][item][1];
            let range2 = allUserData[user2][oC][item][1];
            console.log("Range1: " + range1 + " | Range2: " + range2, " | Total: " + Math.abs(range1 - range2));

            //edgecase for if one is is must-have & other is dealB: use ternary operator
            let range_diff = Math.abs(range1 - range2);
            calcCS[oC].push([allUserData[user1][oC][item][0], range_diff])
        }
    }
    //calculate dbMath
    dbMath() {
        let percent1 = 0;
        //value = [string, int]
        for(let value of calcCS[0]) {
            let addThis = chartPercent[value[1]] * (1/calcCS[0].length);
            console.log("value: " + value + "| chartPercent: " + chartPercent[value[1]] + "| 1/x: " + (calcCS[0].length/1));
            percent1 += addThis;
            console.log("addThis: " + addThis + "| Current percent: " + percent1);
        }
        //half this number as it is only half the calculation
        percent1 *= 0.5 * 100;
        percent1 = parseFloat(percent1).toFixed(2);

        //either reutrn this value or send it somwhere
        finalScore[0] = percent1;
        console.log("Final Percent db: " + percent1);
    }
    //calculate ocMath
    ocMath() {
        let percent2 = 0;
        //value = [string, int]
        for(let value2 of calcCS[1]) {
            let addThis2 = chartPercent2[value2[1]] * (1/calcCS[1].length);
            console.log("value: " + value2 + "| chartPercent: " + chartPercent2[value2[1]] + "| 1/x: " + (1/calcCS[1].length));
            percent2 += addThis2;
            console.log("addThis2: " + addThis2 + "| Current percent2: " + percent2);
        }
        //half this number as it is only half the calculation
        percent2 *= 0.5 * 100;
        percent2 = parseFloat(percent2).toFixed(2)

        //either reutrn this value or send it somwhere
        finalScore[1] = percent2;
        console.log("Final Percent oc: " + percent2);
    }
    //calcScore
    calcScore() {
        console.log("Toatal score = " + (Number(finalScore[0]) + Number(finalScore[1])));
        return Number(finalScore[0]) + Number(finalScore[1]);
    }
}

//memeQuote
function memeQuote(number) {
    if (number < 0) {
        //edge case, since -1 cannot be a key value in object
        return "Honestly, just give up";
    } else if(number > 100) {
        return lQuotes[11];
    } else if(number >= 0 && number <= 100) {
        var rangeKey = Math.floor(number / 10); 
        return lQuotes[rangeKey];
    } else {
        return "Percent not in certified range???"
    }

}

//This is called ideally when user hits Check Compatibility results---eventually
function storeData() {
    //testing grounds, create class object 
    let testCompData = new compareData();
    //testing 1-showAllUserData *Works
    //testCompData.showAllUserData();

    //testing 2-db_diff *Works
    testCompData.calc_db_diffs();

    //testing 3-OC_diff *Works
    testCompData.calc_oc_diffs();

    //testing XYZ-show_calcCS
    testCompData.show_calCS();

    //testing 4-dbMath
    testCompData.dbMath();

    //testing 5-ocMath
    testCompData.ocMath();

    //testing 6-calcScore
    let coupleScore = testCompData.calcScore();
    let changeDiv = document.getElementById("Compatibility-Score");
    let nextDiv = document.createElement('div');
    nextDiv.classList.add("doin-Alot");
    nextDiv.textContent = coupleScore + "%";
    changeDiv.insertAdjacentElement('afterend', nextDiv);
    //ref coupleScore and output meme quote based on percentage
    console.log("start memquote-------");
    let brItem = document.createElement('br');
    nextDiv.insertAdjacentElement('afterend', brItem);
    let nextDiv2 = document.createElement('div');
    nextDiv2.textContent = '"' + memeQuote(coupleScore) + '"';
    brItem.insertAdjacentElement('afterend', nextDiv2);
    console.log("end memquote-------");

    //disable Compatibility Results
    let disableMe2 = document.getElementById("Btn-Compat");
    disableMe2.disabled = true;
}
