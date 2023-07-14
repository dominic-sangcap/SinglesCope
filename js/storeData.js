//unsure if want to store 1 userData or all userData in one area

let userData = {
    userData: [[], []],
    setValue1: function(stringVar, btnChoice) {
        this.userData[0].push([stringVar, btnChoice]);
    },
    setValue2: function(stringVar2, rangeVal) {
        this.userData[1].push([stringVar2, rangeVal]);
    },
    getValue: function() {
        //returns a copy of all user data in 
        return this.userData;
    }, 
    getValueAt: function(outerIndex, innerIndex) {
        //getValue at specified index
        if (outerIndex >= 0 && outerIndex < this.userData.length) {
            const innerArray = this.userData[outerIndex];
            if (innerIndex >= 0 && innerIndex < innerArray.length) {
                return innerArray[innerIndex];
            }
        }
        return null;
    }
}

function setValue1(stringVar, btnChoice) {
    userData.setValue1(stringVar, btnChoice);
}

function setValue2(stringVar2, rangeVal) {
    userData.setValue2(stringVar2, rangeVal);
}

function getValue() {
    //output element??
    const outputElement = document.getElementById('output');
    const userData = myData.getValue();

    let output = '';
    userData.forEach((data, index) => {
    output += `User ${index + 1}: `;
    data.forEach((item) => {
        output += `${item}, `;
    });
    output = output.slice(0, -2); // Remove the extra comma and space
    output += "<br>";
    });

    outputElement.innerHTML = output;
}

function getValueAt(index) {
    //output element??
    const outputElement = document.getElementById('output');
    const value = userData.getIndividualValue(outerIndex, innerIndex);
  
    if (value) {
      outputElement.textContent = `Value at userData[${outerIndex}][${innerIndex}]: ${value}`;
    } else {
      outputElement.textContent = `Invalid index provided.`;
    }
}