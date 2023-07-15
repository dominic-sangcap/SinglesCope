//Explanation of what should happen, what sections interact across one another
//Section 0
/*
Note: honestly dont need right now, makes more sense if i switch UI to page/step based format
    Header Section
    Currently: 
    userInput ->  Go to Section 1
    secondUser ->  Go to Section 3
    Stats -> Go to Section 7
    How To Use ->  Go to Section 9
    Disclaimers ->  Go to Section 10
*/

//Section 1
/*
Note: 
    *dealBreakers & *otherConsiderations
    Userinput, 
    Add+ Button,
    Note of input count

    when[userInput] -> Add+:
    then 
        - Add dealB inputText to section 2.1, Add radio button choices, Update count
        - Add otherC inputText to section 2.2, Add range slider, Update count, display: block on section 2.2 list

    if inputCount = maxAllowed:
    then
        -disable Add+ at respective input, Put error message in inputTextField, revertCount to correct amount
*/

//Section 2
/*
    2.1
    -allow for radio btnChoice
    2.2
    -display: block; if user puts in OC
    -allow for rangeSliderChoice
*/

//Section 3
/*
    when Loc-In Answ Btn:
    then
        - if !empty, populate 3.1 w/ all same dealB/mustH from 2.1
        - if !empty, populate 3.2 w/ all same otherC from 2.2
        - disable Add+ Btns from Section 1

    3.1
    -allow for radio btnChoice
    3.2
    -display: block; if user puts in OC
    -allow for rangeSliderChoice

    TODO: maybe-freeze user1 input via 
    for loop:
        radiBtn[i].disabled = true;
    for loop:
        rangeSlider.disabled = true;
*/

//Section 4
/*
    Currently dont need, but probably freeze input from 2nd user
*/

//Section 5
/*
    TODO: 
        send values into storeData variables
        Do the calculations
        store calculations somewhere
*/

//Section 6
/*
    TODO: 
        use predetermined % set, and x/x set
        {
            > 100%, give them the world
            > 90%, should be dating
            .....
        },
        {
            20/20 = yall see eye to eye
            ....
        }
*/

//Section 7
/*
    TODO:
        hard recap stats, compare side by side
        explain how percentages work
*/

//Section 8
/*
    TODO:
        *For now: Import Test data set for user 1, update count(could allow user to add more on top of this)
        **Do Later: Import Export Capability, like pokemon showdown
*/

//Section 9
/*
    TODO: 
        *NOt obligated to do this, but it might help someone
*/

//Section 10
/*
    Its in fine print....
*/