//limit times user can hit submit Button for dB text
var add_dB_Button = document.getElementById('add_dB');
var addCount = 0; //might have to reference body of input later in future when/if i add functionality to import export data
var maxCount = 5; //allows for 5 entries
//new stuff, update counter to show max amount
var updateCounter = document.getElementById('update_counter');

add_dB_Button.addEventListener("click", () => {
    //if get input is empty, do nothing
    
    addCount++;

    //consider disabling button before it gets to over max number???
    if (addCount > maxCount) {
        //might have to disable this in the future??? -> undisable thw button
        add_dB_Button.disabled = true;
        //reset addCount by 1 to maintain correct size var
        addCount--;
        //reference text field, clear it and make pop up message in textField
        let clearMe = document.getElementById('todo-input');
        clearMe.value = 'Silly Goose, The max is 5';
    }
    else {
        //update max count from user input
        updateCounter.innerHTML++;
    }
});