//crude method of showing stats to User
function dbMath2() {
    let dbString = "";
    let percent1 = 0;
    //value = [string, int]
    dbString += "---Calculation of dealBreakers and Must-Haves--- <br>";
    for(let value of calcCS[0]) {
        let addThis = chartPercent[value[1]] * (1/calcCS[0].length);
        dbString += "value: " + value[0] + "=" + value[1] + "| chartPercent: " + chartPercent[value[1]] + "| 1/x: " + (calcCS[0].length/1);
        dbString += "<br>";
        percent1 += addThis;
        dbString += "addThis: " + addThis + "| Current percent: " + percent1;
        dbString += "<br><br>";
    }
    //half this number as it is only half the calculation
    percent1 *= 0.5 * 100;
    percent1 = parseFloat(percent1).toFixed(2);

    //either reutrn this value or send it somwhere
    //finalScore[0] = percent1;
    dbString += "Final Percent db: " + percent1;
    dbString += "<br>";
    return dbString;
}
//calculate ocMath
function ocMath2() {
    let ocString = "";
    let percent2 = 0;
    //value = [string, int]
    ocString += "---Calculation of other Considerations--- <br>";
    for(let value2 of calcCS[1]) {
        let addThis2 = chartPercent2[value2[1]] * (1/calcCS[1].length);
        ocString += "value: " + value2[0] + "=" + value2[1] + "| chartPercent: " + chartPercent2[value2[1]] + "| 1/x: " + (1/calcCS[1].length);
        ocString += "<br>";
        percent2 += addThis2;
        ocString += "addThis2: " + addThis2 + "| Current percent2: " + percent2;
        ocString += "<br><br>";
    }
    //half this number as it is only half the calculation
    percent2 *= 0.5 * 100;
    percent2 = parseFloat(percent2).toFixed(2)

    //either reutrn this value or send it somwhere
    //finalScore[1] = percent2;
    ocString += "Final Percent oc: " + percent2;
    ocString += "<br>";
    return ocString;
}
//calcScore
function calcScore2() {
    return "Total score = " + (Number(finalScore[0]) + Number(finalScore[1])) + "%";
}

function show_sbChart() {
    let string_sb = "";
    string_sb += "Chart calculations for dealbreakers/must-haves -> key: value <br>";
    for(let key in chartPercent) {
        string_sb += key + ": " + chartPercent[key] + " | ";
    }
    string_sb += "<br>";
    return string_sb;
}

function show_ocChart() {
    let string_oc = "";
    string_oc += "Chart calculations for other considerations -> key: value <br>";
    for(let key in chartPercent2) {
        string_oc += key + ": " + chartPercent2[key] + " | ";
    }
    string_oc += "<br>";
    return string_oc;
}

function statShow() {
    let pId = document.getElementById("stat-padding");
    let btnId = document.getElementById("stat-Btn");

    let divDump = "";

    divDump += show_sbChart();
    divDump += "<br>";
    divDump += dbMath2();
    divDump += "<br>";
    divDump += show_ocChart();
    divDump += "<br>";
    divDump += ocMath2();
    divDump += "<br>";
    divDump += calcScore2();
    
    pId.innerHTML = divDump;

    //disable Btn after use
    btnId.disabled = true;
}