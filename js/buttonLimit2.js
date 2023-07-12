//limit times user can hit submit Button for oC's text
var add_dB_Button2 = document.getElementById('add_oC');
var addCount2 = 0; //might have to reference body of input later in future when/if i add functionality to import export data
var maxCount2 = 5; //allows for 5 entries
//new stuff, update counter to show max amount
var updateCounter2 = document.getElementById('update_counter2');

add_dB_Button2.addEventListener("click", () => {
    //if get input is empty, do nothing

    addCount2++;

    if (addCount2 > maxCount2) {
        //might have to disable this in the future???
        add_dB_Button2.disabled = true;
        //reset addCount by 1 to maintain correct size var
        addCount2--;
        //reference text field, clear it and make pop up message in textField 
        let clearMe2 = document.getElementById('todo-input2');
        clearMe2.value = 'Silly Goose, The max is 5';
    }
    else {
        //update max count from user input
        updateCounter2.innerHTML++;
    }
});