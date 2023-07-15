//have a set of data as default ready to import into user1 field
//For now do nothing, probably have to extract the functionality of event listeners on adding new data from user, so that I am not repeating and cross referncing code
let importBtn = document.getElementById("import-Btn");

function importData() {
    //and then disable Btn after one use
    importBtn.disabled = true;
    let divElement = document.createElement("div");
    divElement.innerHTML = "Sorry, Button Not working For Now";
    importBtn.appendChild(divElement);
}