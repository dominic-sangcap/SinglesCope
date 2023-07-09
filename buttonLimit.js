//limit times user can hit submit Button for dB text
var add_dB_Button = document.getElementById('add_dB');
var addCount = 0; //might have to reference body of input later in future when/if i add functionality to import export data
var maxCount = 3; //allows for 3 entries

add_dB_Button.addEventListener("click", () => {
    addCount++;
    console.log("Add Count = " + addCount);
    if (addCount > maxCount) {
        //might have to disable this in the future???
        add_dB_Button.disabled = true;
        console.log('Max Submissions reached')
        //reset addCount by 1 to maintain correct size var
        addCount--;
        //reference text field and clear it???

        //make pop up message somewhere
    }
});