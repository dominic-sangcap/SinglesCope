const data = {
    "dealbreaker": false,
    "indifferent": false,
    "must-have": false,
}

const radioBtnDynamic = document.getElementById("radioBtnDynamic");

for (let key in data) {
    //might not need this label creation
    let label = document.createElement("label");
    label.innerText = key;
    //radio button creation -- the juice
    let input = document.createElement("input");
    input.type = "radio";
    //this makes all instance of current buttons unique click amongst group
    input.name = "colour";
    //allow for checking radio button state change
    input.addEventListener('change', () => {
        Object.keys(data).forEach(key => {
            data[key] = false;
        })
        data[key] = true;
    });
    label.appendChild(input);
    radioBtnDynamic.appendChild(label);
}